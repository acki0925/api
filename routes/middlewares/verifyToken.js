var jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    var token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access'
        });
    }

    jwt.verify(token, "JWTSECRET", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access'
            });
        }

        req.user = decoded;

        next();
    });
}

module.exports = authMiddleware;
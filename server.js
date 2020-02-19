const express = require('express');
const bodyparser = require('body-parser');

const Routes = require('./routes/routes');
const app = express();

app.use(bodyparser.urlencoded());

const middleware = function (req, res, next) {
    console.log('Headers', req.headers);

    if (req.headers['authorization'] !== 'jwttoken') {
        return res.json({
            message: "Invalid token",
            success: false
        })
    }

    next();
};


app.use('/api', Routes)

const listener = app.listen(3000, () => {
    console.log('Listening ', listener.address().port);
});
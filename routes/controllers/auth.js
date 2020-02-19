const express = require("express");
var jwt = require('jsonwebtoken');

const router = express.Router();

const user = {
    id: "wrgrgwrhststhsrh",
    email: "ibu@gmail.com",
    password: "ibupassword"
}

router.post('/login', (req, res) => {
    console.log('login');

    if (req.body.email == user.email && req.body.password == user.password) {

        var token = jwt.sign({
            id: user.id,
            email: user.email
        }, 'JWTSECRET', {
            expiresIn: "24h"
        });

        res.json({
            token,
            success: true,
            message: "Logged In successfully"
        })
    }

    res.json({
        success: false,
        message: "Invalid credentials"
    })
});

router.post('/signup', (req, res) => {
    console.log('signup');

    res.json({
        route: "signup"
    })
});


module.exports = router;
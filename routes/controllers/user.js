const express = require("express");
const router = express.Router();

const user = {
    id: "wrgrgwrhststhsrh",
    email: "ibu@gmail.com",
    password: "ibupassword"
}

router.get('/details', (req, res) => {
    try {
        res.json({
            success: true,
            user: req.user
        })

    } catch (err) {
        res.json({
            success: false,
            message: "Server error"
        })
    }
});


router.get('/history', (req, res) => {
    try {
        res.json({
            success: true,
            user: req.user
        })

    } catch (err) {
        res.json({
            success: false,
            message: "Server error"
        })
    }
});


module.exports = router;
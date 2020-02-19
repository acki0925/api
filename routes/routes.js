const express = require('express');
const app = express();

const AuthController = require('./controllers/auth');
const UserController = require('./controllers/user');

const AuthMiddleware = require('./middlewares/verifyToken');

app.use('/auth', AuthController);
app.use('/user', AuthMiddleware, UserController);

module.exports = app;
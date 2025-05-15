const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();
const authController = new AuthController();

const setRoutes = (app) => {
    router.post('/register', authController.registerUser);
    router.post('/login', authController.loginUser);

    app.use('/api/auth', router);
};

module.exports = setRoutes;
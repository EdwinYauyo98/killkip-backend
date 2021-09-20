const express = require('express');
const {
    register,
    login,
    edit
} = require('../controllers/userController');
const router = express.Router();

router.post('/registerUser', register);
router.post('/login', login);
router.put('/editUser',edit);


module.exports = {
    routes: router
}
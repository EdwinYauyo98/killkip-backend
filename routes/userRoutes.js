const express = require('express');
const {
    register,
    login,
    edit,
    ensureToken,
    out
} = require('../controllers/userController');
const router = express.Router();

router.post('/registerUser', register);
router.post('/login', login);
router.put('/editUser',edit);
router.get('/protected', ensureToken, out); 


module.exports = {
    routes: router
}
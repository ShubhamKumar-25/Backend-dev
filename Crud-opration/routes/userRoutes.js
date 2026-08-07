

const express = require('express');

const router = express.Router();

const contrellers = require('../controllers/crud');

router.get('/getUser', contrellers.getAllUsers);

router.get('/getUser/:id', contrellers.getUserById);

router.post('/createUser', contrellers.createUser);

router.put('/updateUser/:id', contrellers.updateUser);

router.patch('/updateUser/:id', contrellers.patchUpdate);

router.delete('/deleteUser/:id', contrellers.deleteUser);

module.exports = router; 
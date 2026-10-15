const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    partialUpdateUser,
    deleteUser
} = require('../controllers/userControllers');

// Define routes for user CRUD operations
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.patch('/users/:id', partialUpdateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
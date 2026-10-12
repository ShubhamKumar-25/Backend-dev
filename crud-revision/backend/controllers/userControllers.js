const User = require('../models/userModel');

async function getAllUsers(req, res) {
    try{
        res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: User
        });
    }    
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
            error: "Internal server error"
        })
    }
}

// User Fetched by ID
async function getUserById(req, res){
    try{
        const userId = User.find(u => u.id === parseInt(req.params.id));
        if(!userId){
            return res.status(404).json({
                success: false,
                message: "User not Found",
                error: "User is not found with given this id"
            })
        }
        res.status(200).json({
            success: true,
            message: "User is fetched successfully",
            data: userId
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
            error: "Internal server error"
        })
    }
}

// Create a User
async function createUser(req, res){
    try{
        const { name, email, age, city } = req.body;
        if(!name || !email || !age || !city){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
                error: "Fill all the data"
            });
        }
        const newUser = {
            id: User.length + 1,
            name,
            email,
            age,
            city
        }
        User.push(newUser);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
            error: "Internal server error"
        })
    }
}

// Update a User
async function updateUser(req, res){
    try{
        const userIndex = User.findIndex(u => u.id === parseInt(req.params.id));
        if(userIndex === -1){
            return res.status(404).json({
                success: false,
                message: "User not Found",
                error: "User is not found with given this id"
            })
        }
        const { name, email, age, city } = req.body;
        User[userIndex] = {
            ...User[userIndex],
            name,
            email,
            age,
            city
        };
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: User[userIndex]
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
            error: "Internal server error"
        })
    }
}

// Partial Update a User
async function partialUpdateUser(req, res) {
    try{
        const userId = User.find(u => u.id === parseInt(req.params.id));
        if(!userId){
            return res.status(404).json({
                success: false,
                message: "User not Found",
                error: "User is not found with given this id"
            });
        }
        Object.assign(userId, req.body);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: userId
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
            error: "Internal server error"
        });
    };
};

// Delete a User
async function deleteUser(req, res) {
    try{
        const userIndex = User.findIndex(u => u.id === parseInt(req.params.id));
        if(userIndex === -1){
            return res.status(404).json({
                success: false,
                message: "User not Found",
                error: "User is not found with given this id"
            });
        }
        User.splice(userIndex, 1);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: User
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
            error: "Internal server error"
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    partialUpdateUser,
    deleteUser
}
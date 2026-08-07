
const e = require("express");
const User = require("../model/user");



async function getAllUsers(req, res){
    try{
        res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: User

        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    };
};


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
            message: "User is fatched successfully",
            data: userId
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    };
};

// Create a User
async function createUser(req, res){
    try{
        const { name, email, age, city } = req.body;
        if(!name || !email || !age || !city){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
                error: "Fill all the data"
            })
        }

        const newUser = {
            id: User.length + 1,
            name,
            email,
            age,
            city
        };

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
            message: "Internal server error",
            error: error.message
        })
    };
};

async function updateUser(req, res) {
    try {
        const userIndex = User.findIndex(u => u.id === parseInt(req.params.id));
        if (userIndex === -1) {
            return res.status(400).json({
                success: false,
                message: "User not Found",
                error: "No user with this id"
            });
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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}


async function patchUpdate(req, res) {
    try {
        const user = User.find(u => u.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not Found",
                error: "User not found with this id"
            });
        }

        Object.assign(user, req.body);

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}


// User delete
async function deleteUser(req, res){
    try {
        const userIndex = User.findIndex(u => u.id === parseInt(req.params.id));
        if(userIndex === -1){
            return res.status(404).json({
                success: false,
                message: "user not Found",
                error: "User not found with this id"
            })
        }

        User.splice(userIndex, 1);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    };
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, patchUpdate, deleteUser };



const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json());

const users = [
    {
        id: 1,
        name: "Rohan Gupta",
        age: 22,
        email: "rohan.gupta@example.com",
        city: "New Delhi"
    },
    {
        id: 2,
        name: "Priya Sharma",
        age: 28,
        email: "priya.sharma@example.com",
        city: "Mumbai"
    },
    {
        id: 3,
        name: "Amit Kumar",
        age: 30,
        email: "amit.kumar@example.com",
        city: "Bangalore"
    },
    {
        id: 4,
        name: "Sneha Patel",
        age: 25,
        email: "sneha.patel@example.com",
        city: "Chennai"
    }
];


// To fetch all users
app.get('/users', async (req , res) => {
    try {
        res.status(200).json({
            success: true,
            message: "All user are fetched Successfully",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    };
});

// User Fetched by Id
app.get('/user/:id', async (req, res) => {
    try {
        const userId = users.find(u => u.id === parseInt(req.params.id));
        if(!userId){
            return res.status(404).json({
                success: true,
                message: "User not found",
                error: "User is not Found with given this id"
            })
        }
        res.status(200).json({
            success: true,
            message: "user is fetched successfully",
            data: userId
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    };
});


// Create a user
app.post('/user', async (req, res) => {
    try {
        const { name, email, age, city } = req.body;
        if(!name || !email || !age || !city){
            return res.status(400).json({
                success: false,
                message: "All field are require",
                error: "Fill the all data"
            })
        }
        const newUsers = {
            id: users.length + 1,
            name,
            email,
            age,
            city
        }
        users.push(newUsers);
        res.status(200).json({
            success: true,
            message: "User created Successfully",
            data: newUsers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    };
});


// Update user
app.put('/user/:id', async (req, res) => {
    try {
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

        if(userIndex === -1){
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: "No one user is find with this id"
            })
        }
        const { name, email, age, city } = req.body;
        users[userIndex] = {
            ...users[userIndex],
            name, email, age, city
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: userIndex[userIndex]
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    };
});

// Partially update user by his id
app.patch('/user/:id', async (req, res) => {
    try {
        const index = users.find(u => u.id === parseInt(req.params.id));
        if(!index){
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: "User not found with this given id"
            })
        }
        Object.assign(index , req.body);
        res.status(200).json({
            success: true,
            message: "User update successfully",
            data: index
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    };
});

// delete a user
app.delete('/user/:id', async (req, res) => {
    try {
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
        if(userIndex === -1){
            return res.status(404).json({
                success: false,
                message: "User is not found",
                error: "User is not found with this id"
            })
        }
        users.splice(userIndex, 1);
        res.status(200).json({
            success: true,
            message: "user deleted succussfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    };
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost ${PORT}`);

})
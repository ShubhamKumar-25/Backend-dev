const express = require('express');
const router = require('./routes/userRoutes');

const app = express();
const PORT = 8000;
app.use(express.json());

app.use('/api', router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
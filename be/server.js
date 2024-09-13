const express = require('express');
const connectDatabase = require('./utils/database');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();

app.use(express.json());


app.use('/api', userRoutes);

connectDatabase();

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

const express = require('express');
const connectDatabase = require('./utils/database');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();

app.use(express.json());


app.use('/api', userRoutes);

connectDatabase();


const path = require('path')

app.use('/', express.static(path.join(__dirname, '../fe/out')))

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

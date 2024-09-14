const express = require('express');
const connectDatabase = require('./utils/database');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const config = require('./config/config');
const morgan = require('morgan')
const app = express();

app.use(express.json());

app.use(morgan('tiny'))

app.use('/api', [loggerMiddleware]);

app.use('/api', [
    userRoutes,
    categoryRoutes,
    productRoutes
]);

connectDatabase();

const path = require('path')

app.use('/', express.static(path.join(__dirname, '../fe/out')))

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

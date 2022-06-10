const express = require('express');
const app = express();
const morgan = require('morgan')
const apperror = require('./utils/appError');
const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const globalErrorHandler = require('./controllers/errorController');
const categoryRouter = require('./routes/categoryRoutes');
const characterRouter = require('./routes/characterRoutes');
const petRouter = require('./routes/petRoutes');


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library Api",
            version: "1.0.0",
            description: "Api's"
        },
        servers: [{
            url: "http://localhost:8900"
        }],
    },
    apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options);
app.use(express.json());
app.use(morgan('dev'));
app.use('/tasks', taskRouter);
app.use('/users', userRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use('/character', characterRouter);
app.use('/pet', petRouter);
app.use('/categorys', categoryRouter);


app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to soloLeveling', app: 'sololeveling ' })
})

app.all('*', (req, res, next) => {

    next(new apperror(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
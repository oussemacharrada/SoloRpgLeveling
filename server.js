const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './config.env' });
const app = require('./index');

const DB = process.env.Database;

mongoose.connect(DB).then(() => {
    console.log('DB connections successful');
});
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('port used is ${port}');
})
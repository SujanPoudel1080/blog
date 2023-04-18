const mongoose = require('mongoose');
const dotenv = require ('dotenv');
dotenv.config();


const database = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('database connection established');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
database();


const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.databaseURI); 
        console.log(`Mongodb connected: ${conn.connection.host}`);       
    } catch (error) {
        console.log(`Database connection Failed: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
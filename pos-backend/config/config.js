require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURI: process.env.MONGODB_URI || "mongodb+srv://anusha:Anusha2002@restaurant-pos.cfcdfhd.mongodb.net/?retryWrites=true&w=majority&appName=Restaurant-pos",
    nodeEnv : process.env.NODE_ENV || "development"
});

module.exports = config;
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const app = express();

const PORT = process.env.PORT;
connectDB();

app.get("/", (req,res) => {
    res.json({message : "hello anush"});
})

app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})
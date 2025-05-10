const express = require("express");
const createHttpError = require("http-errors");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const app = express();

const PORT = config.port;
connectDB();

//middlewares
app.use(express.json()); //parse incoming request in json format

//root end-point
app.get("/", (req,res) => {
    res.json({message : "hello server"});
})

//other end-point
app.use("/api/user", require("./routes/userRoute"));

//global error handler
app.use(globalErrorHandler);

//server
app.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
})
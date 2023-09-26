const express = require("express")
const app = express();
const ErrorHandler = require("./utils/ErrorHandler")
const cookieParser =require("cookie-parser")
const bodyParser = require("body-parser");


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
}

// import routes
const user = require("./controller/user");


app.use("/api/v2" , user)
// Error Handling
app.use(ErrorHandler)
  
module.exports = app;  
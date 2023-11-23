const express = require("express");
const mongoose = require("mongoose");
const router = require("./BooksormaFrontend/BooksormaBackend/routes/book-routes");
const cors = require("cors");
const app = express();
// app.use('/',(res,req,next)=>{
//   req.send("hello");
//   next();
// })
app.use(express.json());
app.use(cors());
app.use("/books", router); 
mongoose
  .connect(
    "mongodb+srv://palak0988be21:Palak1234@cluster0.79vkw9y.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

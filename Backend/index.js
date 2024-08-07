import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
/*middleware h cors*/

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI ='mongodb://localhost:27017/bookstore';

// locally connect to mongoDB isiliye try m 2 chiz pass krte hai
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

//connect to mongodb locally connect kr rhe hai
// defining route /book p bookroute dekhe

app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
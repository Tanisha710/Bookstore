import mongoose from "mongoose";

/*kya kya data bhejenge usk liye schema likhenege datab fetch krne k liye mongoose import krenge list .json k liye schema define kr rhe hao*/
const bookSchemea=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    Image:String,
    title:String
});

/*schema ka model create kr rhe hai Book collection m jaa kr store hoga*/
const Book = mongoose.model("Book", bookSchemea);

export default Book;
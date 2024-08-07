/*controller deffine krenge import krenge book jo naam rakhe the last wale folder m 
controller m funtionality define krenge
*/
import Book from "../model/book.model.js";

export const getBook= async(req,res)=> {
try
{
   const book = await Book.find();
   res.status(200).json(book);
}
catch(error)
{
console.log("Error:", error);
res.status(500).json(error);
}
};
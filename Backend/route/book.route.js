import express from "express";
import {getBook} from "../controller/book.controller.js"

const router = express.Router();
/*ccreated api*/
router.get("/",getBook);

 export default router;
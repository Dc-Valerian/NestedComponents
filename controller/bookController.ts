import { Request,Response } from "express";
import mongoose, { mongo } from "mongoose";
import authorModel from "../Models/authorModel";
import bookModel from "../Models/bookModel";

const createBooks = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const {title,category,summary}= req.body;
        const myAuthor =await authorModel.findById(req.params.authorBookID);
        const newBook = await bookModel.create({
            title,
            coverImage:title.charAt(0),
            category,
            summary,
            authorName:myAuthor?.authorName,
        });
        myAuthor?.books.push(new mongoose.Types.ObjectId(newBook._id));
        myAuthor?.save();

        return res.status(201).json({
            message:"Book Created Successfully"
        });
    } catch (error) {
        return res.status(404).json({
            message:"opps.....and error has just occured  COULDN'T CREATE AUTHOR",
            data:error,
        });
    };
};

export {createBooks}
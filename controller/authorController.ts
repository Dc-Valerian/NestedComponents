import authorModel from "../Models/authorModel";
import { Response,Request } from "express";

// {GET METHOD}
const getAuthor =async (req:Request,res:Response):Promise<Response>=>{
    try {
        const authorDetails = await authorModel.find();
        return res.status(200).json({
            message:"Successfully got the author details",
            data:authorDetails,
        })
    } catch (error) {
        return res.status(404).json({
            message:"opps...an error just occured couldn't get the author Details",
            data:error
        });
    };
};

// {GETONE AUTHOR METHOD}
const getOneAuthor = async (req:Request,res:Response):Promise<Response>=>{
    try {
        const authorDetails = await authorModel.findById(req.params.authorID)
        return res.status(200).json({
            message:`${req.params.authorID} gotten Successfully`,
            data:authorDetails,
        });
    } catch (error) {
        return res.status(404).json({
            message:`opps...an error just occured.....Couldn't get${req.params.authorID} `,
            data:error,
        });
    };
};
// POST METHOD

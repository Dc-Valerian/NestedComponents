import express, { Application,Request,Response } from "express"

const PORT:number = 3033;

require("../config/db")

const app :Application = express()

app.use(express.json())

app.get("/",(req:Request,res:Response):Response=>{
  return res.status(200).json({
    message:"Nested Component server has been created"
  })
})

app.listen(PORT,()=>{
    console.log(`Listening to my PORT :${PORT}`);
    
})
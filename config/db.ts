import mongoose from "mongoose";

const URL:string ="mongodb://0.0.0.0:27017/nested"

mongoose.connect(URL).then(()=>{
    console.log(`database connected`)
})
mongoose.connection.on(
    "open",()=>{
        console.log("Nested Component is up and running");
    }
).once(
    "error",(error)=>{
     console.log("opps.....An Error has occurred", error);    
    }
)
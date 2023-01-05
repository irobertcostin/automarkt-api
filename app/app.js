import { getCars } from "./repository.js";

import  express from "express";


const app=express();



app.get('/api/v1/cars',async (request,response)=>{

    const masini= await getCars();

    console.log("aici");

    response.json(masini);

})



app.listen(3000,()=>{

    console.log("start");
})
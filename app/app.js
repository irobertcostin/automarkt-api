import { getCars } from "./repository.js";

import  express from "express";


import cors from "cors";


const app=express();


app.use(cors());


app.get('/api/v1/cars',async (request,response)=>{

    const masini= await getCars();

    console.log("aici");

    response.json(masini);

})



app.listen(3000)
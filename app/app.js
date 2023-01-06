import { getCars ,getCarsByMaker, getAllMakers, getAllCarsByMinYear} from "./repository.js";

import  express from "express";


import cors from "cors";


const app=express();


app.use(cors());


app.get('/api/v1/cars',async (request,response)=>{
    const masini= await getCars();
    console.log("aici");
    response.json(masini);
})


app.get('/api/v1/cars/filtered/:maker',async (req,res)=>{

    let maker=req.params.maker;
    let cars= await getCarsByMaker(maker);
    res.json(cars);


})

app.get('/api/v1/cars/allMakers',async (req,res)=>{

    let makers = await getAllMakers();
    res.json(makers);

})

app.get('/api/v1/cars/:minYear', async (req,res)=>{

    let minYear= req.params.minYear;
    let cars = await getAllCarsByMinYear(minYear);
    res.json(cars);

})





app.listen(3000,()=>{

    console.log("start");
})
import { getCars ,getCarsByMaker, getAllMakers, getAllCarsByMinYear,getAllModelsByMaker,getAllCarsByKmMin,getAllCarsByFuelType,getAllCarsByMaxYear,getAllCarsByMaxKm,getAllCarsByMinPrice,getAllCarsByMaxPrice,getAllCarsByModel, addCar} from "./repository.js";

import  express from "express";


import cors from "cors";


const app=express();


app.use(cors());


app.use(express.json());

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

app.get('/api/v1/cars/fuel-type=:fuelType', async(req,res)=>{

    let fuelType=req.params.fuelType;

    let cars = await getAllCarsByFuelType(fuelType);
    res.json(cars);


})



app.get('/api/v1/cars/year-filter/min-year=:minYear', async (req,res)=>{

    let minYear= req.params.minYear;
    
    let cars = await getAllCarsByMinYear(minYear);
    res.json(cars);

})

app.get('/api/v1/cars/year-filter/max-year=:maxYear', async (req,res)=>{

    let maxYear= req.params.maxYear;
    
    let cars = await getAllCarsByMaxYear(maxYear);
    res.json(cars);

})

// to create maxYear

app.get('/api/v1/cars/km-filter/min-km=:minKm',async(req,res)=>{

    let minKm = req.params.minKm;
    

    let cars = await getAllCarsByKmMin(minKm)
    res.json(cars);

})

app.get('/api/v1/cars/model-filter/model=:model',async(req,res)=>{

    let model = req.params.model;
    let cars = await getAllCarsByModel(model);
    res.json(cars);

})

app.get('/api/v1/cars/km-filter/max-km=:maxKm',async(req,res)=>{

    let maxKm = req.params.maxKm;
    

    let cars = await getAllCarsByMaxKm(maxKm)
    res.json(cars);

})




app.get('/api/v1/cars/:maker/models',async (req,res)=>{


    let maker = req.params.maker;
    let models=await getAllModelsByMaker(maker);
    res.json(models);


})

app.get('/api/v1/cars/price-filter/min-price=:minPrice',async(req,res)=>{

    let minPrice = req.params.minPrice;

    let cars = await getAllCarsByMinPrice(minPrice);
    res.json(cars);

})


app.get('/api/v1/cars/price-filter/max-price=:maxPrice',async(req,res)=>{


    let maxPrice = req.params.maxPrice;
    let cars = await getAllCarsByMaxPrice(maxPrice);
    res.json(cars);

})

app.post('/api/v1/cars/add',async(request,response)=>{


    // console.log("asdasd")
    let car={

        

        maker:request.body.maker,
        model:request.body.model,
        price:request.body.price,
        VIN:request.body.vin,
        year:request.body.year,
        mileage:request.body.mileage,
        horsepower:request.body.horsepower,
        engine_size:request.body.engine_size,
        gas_consumption:request.body.gas_consumption,
        doors:request.body.doors,
        color:request.body.color,
        receipt:request.body.receipt,
        finance_eligibility:request.body.finance_eligibility,
        provenance:request.body.provenance,
        registered:request.body.registered,
        location:request.body.location,
        first_owner:request.body.first_owner,
        no_accidents:request.body.no_accidents,
        service_book:request.body.service_book,
        ad_date:request.body.ad_date,
        ad_id:request.body.ad_id,
        ad_time:request.body.ad_time,
        negociable:request.body.negociable,
        fuel_type:request.body.fuel_type
        // maker:request.body.maker,
        // model:request.body.model,
        // year:request.body.year,
        // vin:request.body.vin
    }
    await addCar(car);


    
    
    console.log(request.body);


    response.json(JSON.stringify(car));
});




app.listen(3000,()=>{

    console.log("start");
})
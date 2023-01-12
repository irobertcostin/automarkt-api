import fs from "fs";

import path from "path";


const __dirname=path.resolve();

export function getCars(){

    return new Promise((res,rej)=>{

        fs.readFile(path.resolve(__dirname,"data.json"),`utf-8`,(err,data)=>{
            if(err){
                rej(err);   
            }else{
                const json=JSON.parse(data);
                res(json);
            }
        })
    })
}

export async function getCarsByMaker(makerParam){


    let data = await getCars();

    data=data.masini;

    let arr=[];

    for(let i=0;i<data.length;i++){

        if(data[i].maker.includes(makerParam)){

            arr.push(data[i])

        }

    }

    return arr;
}


export async function getAllMakers () {


    let data = await getCars();
    data = data.masini;

    let arr = [];

    for(let i=0;i<data.length;i++){

        if(arr.includes(data[i].maker)==false){
            arr.push(data[i].maker)
        }
        

    }
    arr.sort();
    return arr;

}

export async function getAllModelsByMaker(makerParam){


    let data = await getCars();
    data=data.masini;

    let arr = [];

    for(let i=0; i<data.length; i++){

        if(data[i].maker==makerParam){
            if(arr.includes(data[i].model)==false)
            arr.push(data[i].model)
        }


    }
    arr.sort();
    return arr;

}

export async function getAllCarsByMinYear(param1) {

    let data = await getCars();
    data = data.masini

    let arr = [];

    for(let i=0;i<data.length;i++){

        if(data[i].year>=param1){
            arr.push(data[i]);
        }

    }

    return arr;

}

export async function getAllCarsByMaxYear(param1) {

    let data = await getCars();
    data = data.masini

    let arr = [];

    for(let i=0;i<data.length;i++){

        if(data[i].year<=param1){
            arr.push(data[i]);
        }

    }

    return arr;

}




export async function getAllCarsByKmMin(param1){

    let data = await getCars()
    data = data.masini;

    let arr=[];

    for(let i=0;i<data.length;i++){

        if(data[i].mileage >= param1){

            arr.push(data[i]);
            // if(arr.includes(data[i])==false) {
                
            // }
        }
    }
return arr;

}

export async function getAllCarsByMaxKm(param1){

    let data = await getCars()
    data = data.masini;

    let arr=[];

    for(let i=0;i<data.length;i++){

        if(data[i].mileage <= param1){

            arr.push(data[i]);
            // if(arr.includes(data[i])==false) {
                
            // }
        }
    }
return arr;

}


export async function getAllCarsByFuelType(param){

    let data = await getCars();
    data=data.masini;

    let arr = [];

    for(let i=0;i<data.length;i++){

        if(data[i].fuel_type==param)
        arr.push(data[i])

    }

    return arr;
}



export async function getAllCarsByMinPrice(param){

    let data = await getCars();
    data=data.masini;

    let arr=[];
    let arr2=[];

    for(let i =0;i<data.length;i++){

            arr.push(data[i].price.slice(1));

            
            
    }

    for(let i=0;i<arr.length;i++){


        if(parseInt(arr[i])>=param){
            arr2.push(parseInt(arr[i]));
        }
            
}
    return arr2;

}


export async function getAllCarsByMaxPrice(param){


    let data = await getCars();
    data=data.masini; 
    
    let arr=[];
    let arr1=[];

    for(let i = 0; i<data.length;i++){
        arr.push(data[i].price.slice(1));
    }

    for(let i=0;i<arr.length;i++){
        if(parseInt(arr[i])<=param){
            arr1.push(parseInt(arr[i]))
        }
    }

    return arr1;
}


export async function getAllCarsByModel(param){

    let data = await getCars();
    data = data.masini;

    let arr=[];

    for(let i=0;i<data.length;i++){
        if(arr.includes(data[i])==false){

            if(data[i].model==param){
                arr.push(data[i]);
            }

        }


    }

    return arr;
}


export async function addCar(car){

    let data = await getCars();

    // map , filter , forEach - metode pentru arrays

    let ids =   data.masini.map(e=>e.id)
    let id = Math.floor(Math.random()*1000+1);

    while(ids.includes(id)===true){
        id = Math.floor(Math.random()*1000+1)
    }

    car.id=id;
    data.masini.push(car);

    await save(data);

}

export function save(data){

    return new Promise((resolve,reject)={

        fs.writeFile(path.resolve(__dirname,'data.json'),JSON.stringify(data),(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }

        })
    })

}



//test
// sortation
// newest by year
// oldest by year
// cheapest 
// most expensive 

// a bigger api, for the displaying results 
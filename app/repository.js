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



// filter between by price 
// diesel , gasoline , gpl 

// sortation
// newest by year
// oldest by year
// cheapest 
// most expensive 

// a bigger api, for the displaying results 
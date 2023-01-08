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

export async function getAllCarsByMinYear(param) {

    let data = await getCars();
    data = data.masini

    let arr = [];

    for(let i=0;i<data.length;i++){

        if(data[i].year>=param){
            arr.push(data[i]);
        }

    }

    return arr;

}

export async function getAllModelsByMaker(makerParam){


    let data = await getCars();
    data=data.masini;

    let arr = [];

    for(let i=0; i<data.length; i++){

        if(data[i].maker==makerParam){
            arr.push(data[i].model)
        }


    }
    arr.sort();
    return arr;

}
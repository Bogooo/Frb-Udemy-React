// Code goes here!
import _ from 'lodash';
import Product from "./product.model";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";


console.log(_.shuffle([14,3,3,5]));

const products = [{title:'car' , price:13.5},{title:'phone', price: 8.5}];
const loadedProducts = plainToClass(Product,products);

for (const prd of loadedProducts){
    console.log(prd.getInformation());
}

const p1= new Product('book', 9.99);
console.log(p1.getInformation());

const newProd = new Product('',5.9);
validate(newProd).then(errors =>{
    if(errors.length > 0 ){
        console.log('ERRORS',errors);
    }else{
        console.log(newProd.getInformation());
    }
});

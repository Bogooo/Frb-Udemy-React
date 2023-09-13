
import {IsNotEmpty,IsNumber} from 'class-validator';
export default class Product {
    @IsNotEmpty()
    title:string
    @IsNumber()
    price:number
    constructor(t:string,p:number) {
        this.title=t;
        this.price=p;
    }

    getInformation(){
        return [this.title,`${this.price}`];
    }
}
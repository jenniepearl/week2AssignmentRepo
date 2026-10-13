// week 2 assignment 1

export interface Laces{
    id:number;
    category?:string;
    name:string;
    price:number;
    inStock:boolean;
    discount?:number;
    colors:string[];
    yards?:number;
    quantity?:number;
}

export interface Shoes extends Laces{
    size:number;
    material:string;
    gender:string;
}

export interface Bags extends Laces{
    type:string;
    brand:string;
}
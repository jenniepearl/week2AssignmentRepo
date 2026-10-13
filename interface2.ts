export interface LaceProduct{
    id:number
    category?:string
    name:string
    price:number;
    inStock:boolean;
    discount?:number
    colors:string[]
    yards?:number;
}
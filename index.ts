// Week 2 assignment 1

import type { Laces } from "./interface1";
import type { Shoes } from "./interface1";
import type { Bags } from "./interface1";

let Laces:Laces= {
    id: 1,
    category: "Bridals",
    name: "Ankle Laces",
    price: 12000,
    inStock: true,
    discount: 5,
    colors: ["white", "ivory", "champagne"],
    yards:5,

}
let Shoes:Shoes = {
    id: 5,
    category: "Office Shoes",
    name: "Gucci",
    price: 18000,
    inStock: false,
    colors: ["black"],
    size:44,
    material:"leather",
    gender:"male",
    quantity: 1,

}
let Bags:Bags = {
    id: 3,
    type: "Tote Bags",
    name: "Teddy Tote Bag",
    price: 9000,
    inStock: true,
    discount: 2,
    colors: ["white", "pink", ],
    quantity:2,
    brand:"Channel"

}

let all={Laces, Shoes, Bags}
console.log(all);

console.log(Bags);




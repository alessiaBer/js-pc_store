//import method for named export
import { products } from "./db.js"
import { printProductCards, printCart } from "./Helpers/function.js"
//Generate cards into the DOM

const productsElement = document.getElementById('products')

printProductCards(productsElement, products);

//select all btns
const buttonsList = document.querySelectorAll('button');
printCart(buttonsList);



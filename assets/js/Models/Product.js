//export default [ce ne può essere solo uno per file]
export default class Product {
    //name = 'Vertical Mouse'
    //description = 'Lorem'
    in_stock = false //condiviso tra tutte le istanze della class Product
    
    // CONSTRUCTOR [magic function]
    /**
     * Product Constructor
     * @param {String} name 
     * @param {String} description 
     * @param {Float} price 
     * @param {String} category 
     * @param {String} image_path 
     * @param {Number} likes 
     */
    constructor(name, description, price, category, image_path, likes = 100) {
        this.name = name
        this.description = description
        this.price = price
        this.category = category
        this.image_path = image_path
        this.likes = likes
    }

    //function
    addLikes() {
        this.likes++;
    }
}

/*OPTION 1*/
//named export [ce ne possono essere più di uno]
//export {Product}

/* 
//rename named export
export {Product as ProductClass} */



/* 
//OPTION 2
export {Product as default} */
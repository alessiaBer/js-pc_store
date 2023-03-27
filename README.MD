// CLASSES [non soggette a hoisting]
// class declaration

class ClassName {

}

// class expression

const ClassName_2 = class {

}

class Product {
    //name = 'Vertical Mouse'
    //description = 'Lorem'
    in_stock = false //condiviso tra tutte le istanze della class Product
    
    // CONSTRUCTOR [magic function]
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

const ssd = new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', 120);
const monitor = new Product('AOC Monitor', 'Thin 24inch monitor', 140.99, 'Pc Components');

console.log(ssd);
console.log(monitor);

//update an obj property
ssd.in_stock = true;
console.log(ssd);

// Call a method
ssd.addLikes();
ssd.addLikes();
ssd.addLikes();
ssd.addLikes();
ssd.addLikes();
console.log(ssd);


const products = [
    new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', './img/', 120),
    new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', './img/', 120),
    new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', './img/', 120),
    new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', './img/', 120),
    new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', './img/', 120),
    new Product('SSD 1 TB', 'Super fast ssd drive', 60, 'Pc Hardware', './img/', 120)
]

/***************/


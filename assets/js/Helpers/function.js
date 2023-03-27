function printProductCards(domElement, products) {
    products.forEach(product => {
        //destructuring
        const {name, price, description, image_path} = product
        const markup = `
        <div class="product">
            <span class="price">$${price}</span>
            <img src="${product.image_path}" alt="${name}">
            <div class="product-body">
                <h4>${name}</h4>
                <p>${description}</p>
                <button data-product-price="${price}" data-product-name="${name}">Buy Now</button>
            </div>
        </div>
        `;
 
        domElement.insertAdjacentHTML('beforeend', markup);
    }) 
}

function printCart(nodeList) {
    let sum = 0;

    nodeList.forEach(node => {
    node.addEventListener('click', function() {
        const product_name = this.getAttribute('data-product-name')
        const product_price = this.getAttribute('data-product-price')

        //console.log(product_name, product_price)
        sum += parseFloat(product_price)

        document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li>${product_name} ${product_price}</li>`)

        document.querySelector('.total').innerHTML = `<strong>$${sum.toFixed(2)}</strong>`
    })
}) 
}

export { printProductCards, printCart }
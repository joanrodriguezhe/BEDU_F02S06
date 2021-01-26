// Ejemplo 1
/* var car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: '2021'
}

function addColor(car) {
    return {...car,color:'Black'};
}

console.log(`Before calling addColor() ${JSON.stringify(car)}`);

var sameCar = addColor(car);

console.log(`car after calling addColor() ${JSON.stringify(car)}`);
console.log(`sameCar after calling addColor() ${JSON.stringify(sameCar)}`)

console.log(`Same car? ${car === sameCar}`); */

//Ejemplo 2

let cart = [
    {
        item: 'Laptop',
        quantity: 1
    }
];

function addItemToCart(cart, item, quantity) {
    let newCart = cart.map(el => el);

    newCart.push({
        item: item,
        quantity: quantity
    })

    return newCart;
}

cart = addItemToCart(cart, 'Phone', 2);

console.log(`Cart ${JSON.stringify(cart)}`)
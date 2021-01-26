// Ejemplo 1
var car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: '2021'
}

function addColor(car) {
    return { ...car, color: 'Black' };
}

/*console.log(`Before calling addColor() ${JSON.stringify(car)}`);

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

//console.log(`Cart ${JSON.stringify(cart)}`)

//Ejemplo 3

let number = 12345;
let sum = number
    .toString()
    .split('')
    .map(Number).
    reduce((accumulator, currentValue) => accumulator + currentValue, 0)

//console.log(number);
//console.log(sum);

//Reto 1

function flatten(arrays) {
    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

//console.log(array); // [1, 2, 3, 4, 5, 6]

//Reto 2

function compact(array) {
    return array.filter(Boolean);
}

var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

//console.log(compactedArray); // [1, 2, 3]

//Reto 3

function loop(start, test, update, body) {
    while (test(start)) {
        body(start);
        start = update(start);
    }
}

var test = function (n) {
    return n > 0;
}

var update = function (n) {
    return n - 1;
}

loop(3, test, update, console.log);
  // 3
  // 2
  // 1

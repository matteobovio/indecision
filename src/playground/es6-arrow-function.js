// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x

// console.log(squareArrow(8));

// arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     console.log(arguments);
//     return a + b
// }

// console.log(add(55, 1, 1000));

// this keyword - no longer bound

const user = {
    name: 'Matteo',
    cities: ['Bellinzago', 'Aarhus', 'Berlin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

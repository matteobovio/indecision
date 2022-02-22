var nameVar = 'Matteo';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'John';
nameLet = 'Jimmy';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName
}

const petName = getPetName();
console.log(petName);

// Block scoping

var fullName = 'Matteo Bovio';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
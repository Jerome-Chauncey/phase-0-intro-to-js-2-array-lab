// let cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }


// function destructivelyPrependCat(name) {
//     cats.unshift(name);
// }

// function destructivelyRemoveLastCat() {
//     cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//     cats.shift();
// }

// function appendCat(name) {
//     return [...cats, name];
// }

// function prependCat(name) {
//     return [name, ...cats];
// }

// function removeLastCat() {
//     return cats.slice(0, -1);
// }

// function removeFirstCat() {
//     return cats.slice(1);
// }


// console.log(cats)


let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
}
destructivelyAppendCat();
console.log(cats);

function destructivelyPrependCat(){
    cats.unshift('Bob')
}
destructivelyPrependCat();
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.pop('Ralph');
}
destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat(){
    cats.shift('Bob');
}
destructivelyRemoveFirstCat();
console.log(cats);

function appendCat(){
    return [...cats, "Broom"];
}
const allCats = appendCat();
console.log(allCats);
console.log(cats);


function prependCat(){
    return ["Arnold", ...cats];
}
const allCats1 = prependCat();
console.log(allCats1);
console.log(cats);


function removeLastCat(){
    return cats.slice(0, -1);
}
const lastCatRemove = removeLastCat();
console.log(lastCatRemove);
console.log(cats);

function removeFirstCat(){
    return cats.slice(1);
}
const firstCatRemove = removeFirstCat();
console.log(firstCatRemove);
console.log(cats);
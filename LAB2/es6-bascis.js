var string1 = "st1"; //global
string2 = "st2"; // same var

string1 = "hello";
console.log(string1);

{
    let string1 = "my name";
    console.log(string1);
}

console.log(string1);
{
    const string1 = "BP";
    // string1 = "KG";
}

// tradition fn
function add(a, b){
    let c = a + b;
    return c;
}

const res = add(5, 3);
console.log(res);

// arrw function
const addFn = (a, b) => a + b;
res = addFn(8, 5);
console.log(res);

// array
const cars = ["toyota","mazda","honda"];
const fruits =[];
fruits[0] = "apple";
fruits[3] = "mango";
const people = new Array("win","james","john");
console.log(people);
console.log(fruits);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.push("kubota");
cars.shift(); //remove "toyota"
cars.unshift("forza");
console.log(cars);

const carSlide = cars.salica(1,2);
console.log(cars);

carSlide.splice(1,0,"Honda");
console.log(carSlide);

console.log(carSlide.toSring());
console.log(carSlide.concat(people));
console.log([...cars, ...people]);
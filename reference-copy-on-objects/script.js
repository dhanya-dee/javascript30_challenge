
// start with strings, numbers and booleans then to go to array and finally objects 

// Let's say we have an array

let players = ['Wes', 'Sarah', 'Ryan', 'Poppy']; // CAN'T MODIFY A CONST VARIABLE -> hence,changed it to a let 
console.log(players, typeof players); 

players = ['JSCourse'];// NEWLY MODIFIED players is not captured into the reference of shallowCopyObj1

// and we want to make a copy of it.
console.log("shallowCopyObj1", shallowCopyObj1,  "players", players); // value or players and shallowCopyObj1 differ


// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread
shallowCopyObj1 = ['Dhanya', ...players]; //creates a var-global variable of shallowCopyObj1 : using ES6 spread operator here.

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

// how do we take a copy instead?

// object ...spread -> IS THERE NOW!!!!!

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

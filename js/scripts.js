var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];

/**
 * .find() method:
 */


var myValue = myArray.find( function (element) { return element > 4; } );
console.log( myValue ); // Returns 5. Only gives the first matching element

var isMyStringInside = myArray.find( function (element) { return element === 'Hello, World!'; });
console.log( isMyStringInside );    // We would get the matching element

// Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find( function (element) { return element === 'Goodbye, Everyone :('; });
console.log( isMyStringInside );    // Not found

/**
 * .findIndex() method:
 */

 var findAnIndex = myArray.findIndex( function (element) { return element === 2; } );
 console.log( findAnIndex );    // Bur this time, it returned the value's INDEX.

 /**
  * .entries() method:
  */

var pairing = myArray.entries();
console.log( pairing ); // Returns an iterator.
console.log( pairing.next().value ); // We can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );

/**
 * .from() method:
 */

var fromArray = Array.from( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );
console.log( fromArray ); // Oh geeze, tha't is a 26-element array now.
var fromArray2 = Array.from( 'Hello, World!' );
console.log( fromArray2 ); 

/**
 * .filter() method:
 */

var filtered = myArray.filter( function ( element ) { return element > 4; } );
console.log( filtered ); // All matches returned!

/**
 * .reduce() method:
 * We can add on to a value, returns only a single.
 */

var reduceResult = myArray.reduce( function ( accumulator, currentVal ) { return accumulator + currentVal; } );
console.log( reduceResult );

console.log( [1, 2, 3, 4].reduce( function ( a, v ) { return a + v; } ) );
// Because we have numbers in here, they are being added (mathematically.)

console.log( [1, 2, 3, 'a'].reduce( function ( a, v ) { return a + v; } ) );
// The numbers are adding until it hits the string, then it concatenates.

/**
 * Let and Const
 */

var x=3; //Standard variable declaration. Function-scoped.
let y=7;  // let is block-scoped.
const z=36; // Const is block-scoped, but re-assignment is not allowed.

for ( var myVar = 0; myVar < 10; myVar++ ) {
    console.log( 'For loop iteration' )
}
console.log( 'myVar = ' + myVar);   // myVar is available as it is in the same function it was declared with var


for ( let myNewVar = 0; myNewVar < 10; myNewVar++ ) {
    console.log( 'For loop iteration' )
}
// console.log( 'myVar = ' + myNewVar);    // myNewVar is not available here because 'let' forced scope within the block (for loop)

/**
 * Const can't be re-assigned...but its insides can be manipulated
 */

const myObj = {
    name: 'Henry',
    age: 18
}

myObj.name = 'Sandy'; // Can we update properties or array elements inside of a const-declated variable. YES!!!
console.log( myObj );

// myObj = {};  This would give an error.

/**
 * Let's shake things up with: FUNCTIONS
 */

// this is the classic way of declaring the function
function myFunction ( a, b ) {
    return Number( a ) + Number( b );
}

// ES6 style:
myFunction = ( a, b ) => Number( a ) + Number( b );

console.log( myFunction( 3, 8 ) );

//Bigger function (ES6)
myOtherFunction = ( a, b ) => {     // use curly braces for larger, more complex operations.
    const myAnswer = Number(a) + Number(b);
    return myAnswer;
}
console.log( myOtherFunction( 34, 6 ) );

/**
 * Function default parameter values.
 */

 // We can set defaults to prevent errors in case nothing gets passed in fo a parameter
addNums = ( x = 0, y = 0 ) => x + y;

console.log( addNums() );

/**
 * Rest parameter.
 */

findHighNum = (  ...args ) => {    // ...args will capture any number of arguments that we pass!
    console.log( args );           // It can be called by the name we had inbetween our parenthesis
    return args;
}

addAllNums = ( ...nums ) => nums.reduce( ( a, v ) => a + v );  // nums becomes an array of length of the number of parameters passsed
console.log( addAllNums( 64, 6, 10 ) );

getSecondNum = ( ...nums ) => nums[1];
console.log( getSecondNum( 64, 6, 10 ) );









































































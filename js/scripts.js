import { Movie } from './Movie.Class.js';  //Bring in our file
// You will have to use a server for this to work! Browsers protect your filesystem.
// from JavaScript by default, so this is a quick workaround we can use.
 
import { BuyableMovie } from './BuyableMovie.Class.js'

import { Calculator } from './Calculator.Class.js'


/**
 * Let's see what some of our newer array methods are
 */
/*
var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];

/**
 * .find() method:
 */

/**
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

//  var findAnIndex = myArray.findIndex( function (element) { return element === 2; } );
//  console.log( findAnIndex );    // Bur this time, it returned the value's INDEX.

//  /**
//   * .entries() method:
//   */

// var pairing = myArray.entries();
// console.log( pairing ); // Returns an iterator.
// console.log( pairing.next().value ); // We can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
// console.log( pairing.next().value );
// console.log( pairing.next().value );
// console.log( pairing.next().value );
// console.log( pairing.next().value );
// console.log( pairing.next().value );
// console.log( pairing.next().value );

// /**
//  * .from() method:
//  */

// var fromArray = Array.from( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );
// console.log( fromArray ); // Oh geeze, tha't is a 26-element array now.
// var fromArray2 = Array.from( 'Hello, World!' );
// console.log( fromArray2 ); 

// /**
//  * .filter() method:
//  */

// var filtered = myArray.filter( function ( element ) { return element > 4; } );
// console.log( filtered ); // All matches returned!

// /**
//  * .reduce() method:
//  * We can add on to a value, returns only a single.
//  */

// var reduceResult = myArray.reduce( function ( accumulator, currentVal ) { return accumulator + currentVal; } );
// console.log( reduceResult );

// console.log( [1, 2, 3, 4].reduce( function ( a, v ) { return a + v; } ) );
// // Because we have numbers in here, they are being added (mathematically.)

// console.log( [1, 2, 3, 'a'].reduce( function ( a, v ) { return a + v; } ) );
// // The numbers are adding until it hits the string, then it concatenates.

// /**
//  * Let and Const
//  */

// var x=3; //Standard variable declaration. Function-scoped.
// let y=7;  // let is block-scoped.
// const z=36; // Const is block-scoped, but re-assignment is not allowed.

// for ( var myVar = 0; myVar < 10; myVar++ ) {
//     console.log( 'For loop iteration' )
// }
// console.log( 'myVar = ' + myVar);   // myVar is available as it is in the same function it was declared with var


// for ( let myNewVar = 0; myNewVar < 10; myNewVar++ ) {
//     console.log( 'For loop iteration' )
// }
// // console.log( 'myVar = ' + myNewVar);    // myNewVar is not available here because 'let' forced scope within the block (for loop)

// /**
//  * Const can't be re-assigned...but its insides can be manipulated
//  */

// const myObj = {
//     name: 'Henry',
//     age: 18
// }

// myObj.name = 'Sandy'; // Can we update properties or array elements inside of a const-declated variable. YES!!!
// console.log( myObj );

// // myObj = {};  This would give an error.

// /**
//  * Let's shake things up with: FUNCTIONS
//  */

// // this is the classic way of declaring the function
// function myFunction ( a, b ) {
//     return Number( a ) + Number( b );
// }

// // ES6 style:
// myFunction = ( a, b ) => Number( a ) + Number( b );

// console.log( myFunction( 3, 8 ) );
/*
//Bigger function (ES6)
myOtherFunction = ( a, b ) => {     // use curly braces for larger, more complex operations.
    const myAnswer = Number(a) + Number(b);
    return myAnswer;
}
console.log( myOtherFunction( 34, 6 ) );
*/
/**
 * Function default parameter values.
 */

 // We can set defaults to prevent errors in case nothing gets passed in fo a parameter
//  /**
// addNums = ( x = 0, y = 0 ) => x + y;

// console.log( addNums() );

// /**
//  * Rest parameter.
//  */

// findHighNums = ( minNum = 0, ...args ) => {    // ...args will capture any number of arguments that we pass!
//     minNum = Number( minNum );
//     if ( minNum === NaN ) minNum = 0;
//     const highNums = args.filter( ( element ) => element > minNum);
//     // console.log( args );           // It can be called by the name we had inbetween our parenthesis
//     return highNums;
// }
// console.log( findHighNums( 5, 2, 20, 50, 3, 0, 10, 24, -508) );

// addAllNums = ( ...nums ) => nums.reduce( ( a, v ) => a + v );  // nums becomes an array of length of the number of parameters passsed
// console.log( addAllNums( 64, 6, 10 ) );

// getSecondNum = ( ...nums ) => nums[1];
// console.log( getSecondNum( 64, 6, 10 ) );

// /**
//  * Template Literals
//  */

// const helloVar = 'Hello, World!';
// const sampleName = 'Sam';

// const myNewString = `Hey there, my name is ${sampleName}; I\'d like to give you a big: "${helloVar}"!!`  // note backticks - important!
// console.log( myNewString );

// /**
//  * Spread Operator (NB: be careful: same symbol as "rest" ! )
//  */

// const newArray = [ 'Hello', ',', ' ', 'World', '!' ]
// console.log( newArray );
// console.log( ...newArray ); //Brought the values in the array together as one string with SPACES inbetween each item (hence spread).

// const aBunchOfNums = [ 5, 10, 36, 58 ];
// console.log(addAllNums( aBunchOfNums ) );   // Does not recognise the numbers in the array as seperate parameters ...
// console.log(addAllNums( ...aBunchOfNums ) );  // but this does.

// /**
//  * String Methods!
//  * 
//  */

//  /**
//   * .search() Method:
//   */

// const myTestString = 'Greetings, Programs!'
// console.log( myTestString.search( /tings/i ) );   //returns position of (start) of substring using Regular Expression (Rgex) for searching.

// //Example for password:
// //if ( prompt( 'enter your pass' ).search( "^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$" ) )

// /**
//  * .replace() Method:
//  */

// const myReplacedString = myTestString.replace( /Programs/, 'World' );  // Find a string and replace it.
// console.log( myReplacedString );

// /**
//  * Blocks:
//  */


//  {
//      const myBlockNestedVar = 38;
//  }
//  // console.log( myBlockNestedVar );  // Variable not scoped here

//  // We can name blocks if we want

//  myOrganizationName: {  // This could be named anything...
//      // We can organize some code in here and control scope of let/const. Program operation just flows straight through.
//      let myBlockNestedVar = 55;   // We used the same name as in our unamed block. That's okay, it was born in a different scoped block!
//      myBlockNestedVar++;
//      console.log( myBlockNestedVar );
//  }

//  */


// // Using classes defined in another file

const tron = new Movie( 'Disney\'s TRON', 'Adventure', 1982 );
const dragonheart = new Movie( 'Dragonheart', 'Fantasy', 1996 );
const godfather = new Movie( 'Godfather II', 'AAction/Thriller', 1974 );

console.log( tron );
console.log( dragonheart );
console.log( godfather );

const billAndTedsExcellentAdventure = new BuyableMovie( 'Bill and Ted\'s Excellent Adventure', 'Comedy', 1989 )
billAndTedsExcellentAdventure.setPrice = '16.37';
console.log( billAndTedsExcellentAdventure );

// Using a regular (non-static) method.
billAndTedsExcellentAdventure.showPoster();
console.log( billAndTedsExcellentAdventure.showPoster() );

//
console.log( Calculator.add( 3, 3, 3, 3, 3, 5 ));   //20
console.log( Calculator.subtract( 16, 5 )); //11

/**
 * SETS
 */

let mySet = new Set();

mySet.add( 5 );  // Set values must be unique
mySet.add( 5 ); // No error, but does not add a new member
mySet.add( 2 );

console.log( mySet );

console.log( mySet.size ); // Size is 2 (i.e. 2 members)

console.log( mySet.has( 5 ) );  // Returns true

console.log( mySet.has( 36 ) );  // Returns false

let mySetIterator = mySet.entries();

console.log( mySetIterator.next().value );  // Show value 1....
console.log( mySetIterator.next().value );  // Now value 2....
// Since Sets contain only unique values, there is no need for a proper 
// "key", as the value is already unique.

mySet.delete( 5 );
console.log( mySet )

/**
 * Maps
 * KEY VALUE PAIR data-type
 */const myValues = {  //Old workaround was objects
     name: 'Billy',
     age: 95
 }


console.log( myValues );  // Object, gross, not what it was intended for

const myMap = new Map( [
    ['name', 'Billy'],
    ['age', 95],
    ['greeting', 'Yo']
    [7, 'We can even use numbers as keys, unlike for objects.']
] );

console.log( myMap.size );
console.log( myMap.has( 'age' ) ); // Check for a key
console.log( myMap.get( 'age' ) ); // Retrieve value
const myMapIterator = myMap.keys(); // Gets an iterator
console.log( myMapIterator.next().value ); // First item's key
console.log( myMapIterator.next().value ); // Second item's key
console.log( myMapIterator.next().value ); // Third item's key

myMap.set( 'country', 'Canada' );  // Add a new key-value pair.

const myMapValueIterator = myMap.values(); //Gets an iterator
console.log( myMapValueIterator.next().value ); //First item's value
console.log( myMapValueIterator.next().value );
console.log( myMapValueIterator.next().value );
console.log( myMapValueIterator.next().value );

myMap.clear();

console.log( myMap.size );  // Zero now :(






























































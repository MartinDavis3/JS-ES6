export class Calculator { 
    static add( ...nums ) {
        let sum = 0;
        for ( let i = 0; i < nums.length; i++ ) {
            sum += Number( nums[i] );
        }
        return sum;
    }
    // With STATIC methods, we can call upon functionality without creating an
    // object out of our class/blueprint! BEWARE we cannot use 'this', as
    // there is no object to store our properties etc in...
    static subtract( num1, num2 ) {
        return Number( num1 ) - Number( num2 );
    }       
}
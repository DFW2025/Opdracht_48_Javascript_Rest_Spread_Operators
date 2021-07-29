// JAVASCRIPT


// rest operator

function sum ( ...numbers ) {

    return numbers.reduce (function (prev, current) { return prev + current; });


};


console.log (sum ( 1,2,3,4));


// spread operator


function sum2 (x, y, z ) {

     return x + y + z;

};

let numbers = [1,2,3];

console.log (sum2 (...numbers));


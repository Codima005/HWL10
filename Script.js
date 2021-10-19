debugger;

function main (c) { 
    return typeof c === 'function' ? c() : result;
    
  
}

function sum (a = 2, b = 3) { 
    return a + b;     
};



function chtoto (g = 8){
    return sum() * g;
}

let result = sum();

// let result = main();

console.log(main(chtoto));

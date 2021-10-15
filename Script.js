function main (a = 2,b = 3,c) { 
    if(c){
        return a + b + c;
    }
    else{
        return sum();
    }

  
}

function sum (a=2, b=3) { 
    return a + b;     
};



function chtoto (g = 8){
    return sum() * g;
}

let result = main(2,3,chtoto());

// let result = main();

console.log(result)

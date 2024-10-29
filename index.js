
function receivesAFunction(callback){
    console.log("receivesAFunction involked!")
    callback();
    console.log(`callback function ${callback} involked!`)
}

let returnsANamedFunction = () =>{
    let namedFunction = () => 'Hello, world!'
    return namedFunction
}

let returnsAnAnonymousFunction = function(){
    return () => 'Hello, world!'
}


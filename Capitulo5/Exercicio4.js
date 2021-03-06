function every(array, func){
    for(let element of array){
        if(!func(element)){
            return false
        }
    }
    return true
}

function some(array, func){
    for(let element of array){
        if(func(element)){
            return true
        }
    }
    return false
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));

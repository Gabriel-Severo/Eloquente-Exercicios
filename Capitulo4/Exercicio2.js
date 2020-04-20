function reverseArray(array){
    let newArray = []
    for(let i = array.length-1; i >= 0; i--){
        newArray.push(array[i])
    }
    return newArray
}

function reverseArrayInPlace(array){
    let final = array.length - 1
    for (let i = 0; i < Math.ceil(array.length / 2); i++){
        let aux = array[i]
        array[i] = array[final]
        array[final] = aux
        final--
    }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
function arrayToList(array){
    head = null
    for (let i = array.length-1; i >=0; i--){
        head = {value: array[i], rest: head}
    }
    return head
}

function listToArray(array){
    arrayF = []
    while(array != null){
        arrayF.push(array.value)
        array = array.rest
    }
    return arrayF
}

function prepend(value, rest){
    list = {value, rest}
    return list
}

function nth(list, pos){
    if (pos != 0 && list != null){
        return nth(list.rest, pos-1)
    }
    if (list == null){
        return undefined;
    }
    return list.value
}


console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

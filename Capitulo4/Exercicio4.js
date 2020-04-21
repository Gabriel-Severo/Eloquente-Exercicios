function deepEqual(a, b){
    if (a === b){
        return true;
    }
    if(a == null || typeof(a) != 'object' || b == null || typeof(b) != 'object'){
        return false
    }
    keysA = Object.keys(a), keysB = Object.keys(b)
    if(keysA.length != keysB.length){
        return false
    }
    for(let key in a){
        if(!(key in b) || !deepEqual(a[key], b[key])){
            return false
        }
    }
    return true
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
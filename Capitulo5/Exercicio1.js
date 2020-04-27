let arrays = [[1, 2, 3], [4, 5], [6]];
let result = arrays.reduce((value, element) => {
    return value.concat(element)
})

console.log(result)
function range(start, end, increment=1){
    numeros = []
    if(increment > 0){
        for(let i = start; i <= end; i+=increment){
            numeros.push(i)
        }
    }else{
        increment *= -1
        for(let i = start; i >= end; i-=increment){
            numeros.push(i)
        }
    }
    return numeros
}

function sum(array){
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma
}

console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))
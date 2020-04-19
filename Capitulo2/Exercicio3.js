size = 8
for (let i = 0; i < size; i++){
    let linha = ''
    for (let j = 0; j < size; j++){
        if ((i + j) % 2 == 0){
            linha += '#'
        }else{
            linha += ' '
        }
    }
    console.log(linha)
}
function countBs(string){
    let cont = 0
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) === "B"){
            cont++
        }
    }
    return cont
}

function countChar(string, letter){
    let cont = 0
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) === letter){
            cont++
        }
    }
    return cont
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
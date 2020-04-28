const ancestry = require('./ancestry')
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(array, func){
    let groups = {}
    array.forEach((element) => {
        let group = func(element)
        if(group in groups){
            groups[group].push(element)
        }else{
            groups[group] = [element]
        }
    })
    return groups
}

const groups = groupBy(ancestry, (person) => {
    return Math.ceil(person.died / 100);
})

for(let sec in groups){
    let ages = groups[sec].map((person) => {
        return person.died - person.born
    })
    console.log(sec + ' ' + average(ages))
}

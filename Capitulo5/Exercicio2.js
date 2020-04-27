const ancestry = require('./ancestry')
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

const ages = []

ancestry.forEach((element) => {
    if(byName[element.mother] != null){
        ages.push(element.born - byName[element.mother].born)
    }
})

console.log(average(ages))
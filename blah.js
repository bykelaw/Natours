function Fruit(type){
    this.type = type;
    this.color = 'unknown'
    this.getInformation = getInformation;
}
function getInformation(){
    return `This ${this.type} is ${this.color}.`
}
console.log(new Fruit().getInformation())
let orange = new Fruit('orange');
console.log(orange)

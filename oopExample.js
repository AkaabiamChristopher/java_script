function Human(name,age,complexion){
    this.name = name;
    this.age = age;
    this.complexion = complexion;

this.describe = ()=>{
    return 'My name is ${this.name}, I am $(this.age) years old.'
}

}

let personOne = new Human("Chris",18,"dark");
console.log(personOne);
console.log(personOne.describe)
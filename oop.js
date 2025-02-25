let animal = {
    name :"unknow",
    color :"",
    soundType : "",
    sound: function(){
        return `${ths.name} make a sound`
    }
};

let dog = Object.create(animal);
console.log(dog);
dog.name = "dog",
dog.color = "brown",
console.log(dog)

let cat = {}
Object.setPrototypeOf(cat, animal);
console.log(cat);
cat.name = "pussyCat";
console.log(cat.sound);
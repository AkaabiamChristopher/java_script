// first task
const person = {

name: "chris",
age: "12",
sex: "male",
complexion: "fair",
stateOfOrigin: "benue",
country: "nigeria"
};

console.log(person);

// third task
const laptop = {
	brand:"dell",
	price:"1200"
};
laptop.colour = "blue";

console.log(laptop);

// fouth task
const phone = {
	brand:"Apple",
	price:"999"
};
console.log(phone);

// fifth task
const persons = {firstName:"Chris",lastName:"Akaabiam",fullName: function(){
	return this.firstName + this.lastName;
}
}
console.log(persons.fullName());

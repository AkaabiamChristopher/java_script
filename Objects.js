
let student = {
    name: "John Doe",
    age: 20,
    age: 23,
    GPA: 3.8,
    getDetails: function() {
        return `${this.name} is ${this.age} years old and has a GPA of ${this.GPA}`;
    }
};

console.log(student.getDetails());

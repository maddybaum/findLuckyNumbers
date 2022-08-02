
let person = {
    firstName: "Maddy",
    lastName: "Baum",
    age: 27,
    favorites: {
        movie: ["The Blind Side", "Harry Potter"],
        artist: ["Drake", "Future"],
    },
    greeting: () => {
        console.log("hey how are you")
    }
}


//now let's practice accessing key value pairs within our object
//we can use dot or bracket notation

person.greeting()



let {greeting} = person;
greeting()

let {firstName, lastName, age} = person;
console.log(firstName, lastName, age)

let {age: yearsOfWisdon} = person;

for(const property in person) {
    console.log(`The property of ${property} has a value of: ${person[property]}`)
}

//adding and deleting properties

person.job = "Instructor";
console.log(person);

delete person.job
console.log(person);
//classes

class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true;
    }
    greeting(){
        console.log(`woof! my name is ${this.name} and I am a ${this.breed}`)
    }
}
const rory = new Dog("Rory", "Great Dane", 4);
console.log(rory);
rory.greeting()

class Puppy extends Dog {
    constructor(name, breed, age, isTeething){
        super(name, breed, age);

        this.isTeething = isTeething;
    }
}
const Rue = new Puppy("Rue", "Bernese", 4, true);
console.log(Rue)
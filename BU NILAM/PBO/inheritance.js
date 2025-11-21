class Parent {
    constructor(greeting){
        this.greeting = greeting;
    }
    //method
    parentSay() {
        console.log(`${this.greeting} this is the parent class.`);  
    }
}

//class Child 
class Child extends Parent {
    constructor(greeting, name){
        super(greeting); //panggil constructor parent
        this.name = name;
    }
    //method
    childSay() {
        console.log(`${this.greeting} my name is ${this.name}, I am the child class.`);  
    }   
}

// instantiate
let Parent1 = new Parent("Hello");
Parent1.parentSay();
let Child1 = new Child("Hi", "Indah");
Child1.parentSay();
Child1.childSay();
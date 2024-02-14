class Person{
    static count = 0
    //static so can it can be accessed without the object(so that the value can change). It is now part of the class only not the object
    constructor(){
        //if you want to assign default values to your properties
        this.firstName = 'Please provide your name'
        this.lastName= 'Please provide your surname'
        this.age = 0
        Person.count +=1
    }
    //to add the ability to update value on first name
    set FirstName(value){
        this.firstName = value
    }
    //to retrieve value on firstname
    get FirstName(){
        return this.firstName
    }
    set Lastname(value){
        this.lastName = value
    }
    get Lastname(){
        return this.lastName
    }
    set Age(value){
        this.age = value
    }
    get Age(){
        return this.age
    }

    //display method
    display(){
        console.log(`
        =====Person ID: ${Person.count}=====
        First name: ${this.FirstName}
        Last name: ${this.Lastname}
        Age: ${this.Age}
        =======================

        
        `);
    }
}

//exporting the class
export{
    Person
}
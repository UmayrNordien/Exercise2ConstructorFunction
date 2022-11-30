//Exercise 2:
/*
1. Please create a constructor function called PersonDetails that will 
take the following parameters:
firstName, lastName, email
*/
function PersonDetails(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
/*
2. Create a getter and setter for each properties including a display method that
will display the person details
*/
    this.getFirstName = () => this.firstName;          
    this.getLastName = () => this.lastName;
    this.getEmail = () => this.email;
    /* S E T T E R */
    this.setFirstName = (firstName) => this.firstName = firstName;  
    this.setLastName = (lastName) => this.lastName = lastName; 
    this.setEmail = (email) => this.email = email;
    /* D I S P L A Y */
    this.display = () => {
        console.table(this);
      }
}

/* 
3. Create an instance called person1 from a constructor function 
*/
let person1 = new PersonDetails('Umayr', 'Nordien', 'umayrnordien@gmail.com');
let person2 = new PersonDetails('Reece', 'Simon', 'reece@gmail.com');
let person3 = new PersonDetails('Javier', 'Goodall', 'javier@gmail.com');

/*
4. Call a display method (Only)
*/
person1.display();             
person2.display();
person3.display();

// Solution
// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.lastName
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());




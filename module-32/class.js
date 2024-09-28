// class Person{
//     constructor(name,age){
//         this.myname = name;
//         this.myage = age;

//     }
// }

// const person1 = new Person('Sharif', 21)
// const person2 = new Person('Mazhar', 21)
// console.log(person1);
// console.log(person2);



// class Car {
//     constructor(brand, color) {
//       this.brand = brand;   // property
//       this.color = color;   // property
//     }
  
//     // Method to display car details
//     describe() {
//       console.log(`This is a ${this.color} ${this.brand}.`);
//     }
  
//     // Method to change the car's color
//     repaint(newColor) {
//       this.color = newColor;
//       console.log(`The car is now ${this.color}.`);
//     }
//   }
  
//   // Creating an object from the class
//   const myCar = new Car('Toyota', 'red');
  
//   // Calling the 'describe' method
//   myCar.describe();  // Outputs: This is a red Toyota.
  
//   // Calling the 'repaint' method
//   myCar.repaint('blue');  // Outputs: The car is now blue.
  
//   // Calling the 'describe' method again to see the updated color
//   myCar.describe();  // Outputs: This is a blue Toyota.



class Car {
    constructor(name,year){
        this.Aname = name
        this.Ayear = year

    }

    describe(){
        console.log(`car name is ${this.Aname} car was made in ${this.Ayear}`);
    }
}

const car1 = new Car('Bugatti', 2018)
console.log(car1);
console.log(car1.describe());
  
// Define a class named 'Animal'
class Animal {
    // Constructor function to initialize properties
    constructor(name, legCount) {
      // Assign the 'name' parameter to the instance property 'name'
      this.name = name;
      // Assign the 'legCount' parameter to the instance property 'legCount'
      this.legCount = legCount;
    }

    // Method to describe the animal
    describe() {
      // Returns a string describing the animal's name and leg count
      return `${this.name} has ${this.legCount} legs`;
    }
}

  
class Father {
  fatherName: string;
  constructor(fatherName: string) {
    this.fatherName = fatherName;
  }
}

class Person extends Father {
  name: string;
  birthYear: number;

  constructor(name: string, birthYear: number, fatherName: string) {
    super(fatherName);
    this.name = name;
    this.birthYear = birthYear;
  }

  run() {
    console.log(`${this.name} is running...🏃‍♂️`);
  }

  eat() {
    console.log(`${this.name} is eating... 🍽️`);
  }
}

let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageInput) {
    if (typeof ageInput === 'number') {
      this._age = ageInput;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  get age() {
    console.log(`${this._name} is ${this._age} years old.`)
  }

};

person.age = 'Thirty-nine'
person.age = 39
console.log(person.age)

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
  }
};

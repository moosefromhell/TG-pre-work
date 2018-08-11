let person = {
  name: 'Moose',
  age: 23,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  sayGoodbye() {
  return 'Goodbye!';
}
};
let friend = {
  name: 'John'
}
friend.sayHello = person.sayHello;
console.log(person.sayHello())
person.hobbies = ['Drumming', 'Cooking'];
person.hobbies = ['Drumming'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(friend.sayHello())

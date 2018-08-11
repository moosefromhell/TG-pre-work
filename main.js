let person = {
  name: 'Moose',
  age: 23,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'

};
if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}
let day = 'Friday';
let alarm;
console.log(person['name'])
console.log(person['age'])
console.log(person[alarm]);

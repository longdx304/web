import { User } from './models/User';

const user = new User({
  name: 'myname',
  age: 20,
});

user.on('change', () => {
  console.log('change #1');
});
user.on('change', () => {
  console.log('change #2');
});
user.on('create', () => {
  console.log('create');
});

user.trigger('change');

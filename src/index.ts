import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20,
// });

const user = new User({ name: 'new user', age: 30 });

user.save();

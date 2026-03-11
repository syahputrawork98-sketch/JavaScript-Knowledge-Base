import { addUser, getUsers } from './user-store.js';

addUser('Alya');
addUser('Bima');

console.log('users ->', getUsers());

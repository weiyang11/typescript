// import * as roles from './roles';
enum Roles { admin="admin", author="author", editor="editor" } // enum

type Person = {
  name: string;
  email: string;
  password: string;
  role: string;
};

Roles.admin; // admin
Roles.author; // author
Roles.editor; // editor


const person4 : Person = {
  name: 'John Doe',
  email: 'werji@gg.com',
  password: '1234',
  role: Roles.admin
};

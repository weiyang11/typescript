import { EDITOR } from "../roles";

// import * as roles from './roles';
enum Roles { admin="admin", author="author", editor="editor" } // enum

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
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


const STATUS_LOADING = 'loading';
const STATUS_FAILED = 'failed';

enum NetworkState1 {
  loading = STATUS_LOADING,
  failed = STATUS_FAILED,
  success = 'success'
}

console.log( NetworkState1.loading ); // loading

enum Direction {
  Up, // 0
  Dowm,  // 1
  Left,  // 2
  Right // 3
}

const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
} //will not be compiled to js, due to const

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const; //readonly


let eDirectuin = EDirection.Down; // 1
let eDirectuin1 = Direction.Up; // 0
// ODirection.Up = 1; // Error: Cannot assign to 'Up' because it is a read-only property.

enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write, // 3
  Delete = 4,
  All = ReadWrite | Delete // 7
} //computed enum


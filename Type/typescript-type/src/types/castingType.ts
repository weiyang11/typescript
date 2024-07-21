let firstName5 = <any> "John" ; //casting any type
let lastName5 = "Doe" as any;  //casting any type

//User from API
let userObj = {
  name: 'Narj',
  email: 'na@gmail.com'
};

type User = {
  name: string;
  email: string;
};

function fetchUser() {
  return userObj as User;
}

const fetchedUser = fetchUser();

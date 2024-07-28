async function fetchData<T = any >(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


async function fetchDefault(){
  const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data); //Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}


fetchDefault();


type Post = {
  userId: number;
  id: number;
  title : string;
  completed: boolean;
};


async function fetchPost(){
  const data = await fetchData<Post>('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data); //Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}


fetchPost();

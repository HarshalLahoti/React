// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

// here the javascript will print the jonas pehle as the data yet to come from fetch
// java script is working asynchronly
// but javascript is synchronous
// it doesn't wait for anything and continous go and run the next statenennt

// await function it will go forward wait for code to get executed and come back
// but the line code in async will return promise and it wil run line by line won't go forward

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //4
  const data = await res.json(); //5
  console.log(data); //6

  console.log("harshal"); //7

  return data;
}

const todos = getTodos(); //1
console.log(todos); //2

console.log("jonas"); // 3

console.log('Hello')
setTimeout(() => {console.log('Hello VsCode')}, 5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))
console.log('World')
console.log('Hello Javascript');
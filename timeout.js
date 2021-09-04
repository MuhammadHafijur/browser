function doSomething(){
    console.log('I am using vs code');
}

console.log('First: This is first one');
console.log('Second: This is the second one');
// setTimeout(doSomething, 2000);
// setTimeout(function(){
//     console.log('I am using Javascript')
// }, 2000)
setTimeout(() => {
    console.log('I am using Javascript')
}, 2000)
console.log('Third: Exploring with third work')
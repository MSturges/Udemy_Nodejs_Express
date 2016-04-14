var obj = {
  greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

var arr =[];

arr.push(function(){
  console.log('hello 1');
});

arr.push(function(){
  console.log('hello 2');
});

arr.push(function(){
  console.log('hello 3');
});

arr.forEach(function(item){
  item();
});

// Each function is stored in the array by incrementing index based 0
// then the arr.forEach() each functions is then referenced by item
// and invoked by item();

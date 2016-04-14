// function statement

function  greet(){
  console.log('hi');
};
greet();

//  function are first-class

function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// Treat the function as a vairable
// function expression

var greetMe = function(){
  console.log('hi max');
}
greetMe();

// it's first-class
logGreeting(greetMe);

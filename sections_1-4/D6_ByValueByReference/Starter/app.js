function change(b) {
  b = 2;
}

var a = 1;
change(a);

console.log(a)

// a is a primative value. b became a copy
//of a and pointed to a different spot in memory.


//pass by reference
function changeObj(d){
  d.prop1 = function () {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {}
changeObj(c);
console.log(c);

// When c is passed to changeObj(); c is referenced by d.
// So now c prop1 is = function
// and now has a prop2 = {};

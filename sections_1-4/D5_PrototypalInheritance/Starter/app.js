function person(firstName, lastName, favColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favColor = favColor;
};

person.prototype.giveInfo = function() {
  console.log('Info:' + this.firstName + ' ' + this.lastName + ' ' + this.favColor );
}

var max = new person('max', 'sturges', 'green');
max.giveInfo();

var mike = new person('mike', 'ross', 'purples');
mike.giveInfo();

// The point 

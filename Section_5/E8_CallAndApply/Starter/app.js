var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Number Two'}, params);
obj.greet.apply({ name: 'Mini Me Max'}, [0,0]);

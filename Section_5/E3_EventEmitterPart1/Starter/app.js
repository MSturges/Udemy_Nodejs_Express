var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log('someone said hello');
});

emtr.on('greet', function(){
  console.log('someone else said hi');
});

emtr.on('bye', function(){
  console.log('someone else said bye');
});

emtr.on('bye', function(){
  console.log('someone else said laters');
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('bye');

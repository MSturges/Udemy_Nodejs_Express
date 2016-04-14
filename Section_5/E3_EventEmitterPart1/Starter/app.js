var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log('someone said hello');
});

emtr.on('greet', function(){
  console.log('someone else said hi');
});

console.log('Hello!');
emtr.emit('greet');

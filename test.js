import test from 'ava';
import exec from 'async-exec';


test.beforeEach(async (t) => {
  console.log('Before'); 
  const pid = await exec('./long_process.sh');  
  console.log(`PID is ${pid}`);  
});

test.afterEach((t) => {
  console.log('After'); 
});

test('foo', t => {
	t.pass();
});

test('bar', t => {
	t.pass();
});


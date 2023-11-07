/*// function scope
// block scope

let x = 1  // global variabel
var y = 2

if( true ) {
	let x = 100  // lokal variabel, skymmer globala x
	var y = 200   // global variabel eftersom var har "function scope"
}
console.log(x);
console.log(y);
*/
/*
if( 'hej' ) {
	console.log('hej');
}
if( 42 ) {
	console.log('The answer');
}
let obj = { value: 'javascript' }
if( obj ) {
	console.log('javascript har ett värde');
}
//  0 '' false null undefined
let p = 100
for( ; p > 1;  ) {
	console.log(p);
	p /= 2
}

console.log('Efter loopen är p: ', p);


if( true ) {
	// if-block
}
const exempel = () => {}
const f1 = x => { return x + 1 }
const f2 = x => x + 1

const f3 = () => { return {} }
const f4 = () => ({ name: 'badboll', price: 125 })
*/

function giveMeAnObject() {
	return {
		name: 'badboll',
		price: 125
	}
}
let o1 = giveMeAnObject()
let o2 = o1
let o3 = giveMeAnObject()
o1.price -= 25
let o4 = { ...o1 }
console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);

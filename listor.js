// TODO: testa att hitta minsta värdet
// samt att prova med negativa tal
let numbers = [3, 7, 11, 18, 5]
let max = 0
for( let index=0; index < numbers.length; index++ ) {
	console.log(numbers[index]);
	if( numbers[index] > max ) {
		max = numbers[index]
	}
}

console.log('Största talet i listan är: ' + max);

numbers.forEach(number => {
	console.log('forEach: ' + number);
})
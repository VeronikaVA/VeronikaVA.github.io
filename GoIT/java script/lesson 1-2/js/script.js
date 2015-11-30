function pow(){
	var base = prompt('Enter number');
	var exponent = prompt('Enter number2');

	var res = 1;

	for (var i = 0; i < exponent; i++){
		res = res * base;
	}

	console.log(res);

	// console.log(Math.pow(base, exponent));
}


function fill(){
	var arr = [];
	for (var i = 0; i < 5; i++){
		arr[i] = prompt('Enter name'); 
	}
	var name = prompt('Enter search name');

	for (var i = 0; i < arr.length; i++){
		if (name == arr[i]){
			alert(name + ', вы успешно вошли');
			return;
			}
	}
	alert('Error');
}

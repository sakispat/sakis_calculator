/* Number */
function number(id) {
	parseInt(document.getElementById("result").value += id); 
}

/* Operation */
function oper(id) {
	var oper = parseInt(document.getElementById("result").value += id);

	switch(oper) {
		case '+':
			document.getElementById("result").value = x + y; 
		break;	
		
		case '-':
			document.getElementById("result").value = x - y; 
		break;	
		
		case '*':
			document.getElementById("result").value = x * y; 
		break;	
		
		case '/':
			document.getElementById("result").value = x / y; 
		break;	
	}
}

/* Sin */
function sin(){
	document.getElementById("result").value = Math.sin(document.getElementById("result").value * Math.PI / 180);
}

/* Cos */
function cos(){
	document.getElementById("result").value = Math.cos(document.getElementById("result").value * Math.PI / 180);
}

/* Tan */
function tan(){
	document.getElementById("result").value = Math.tan(document.getElementById("result").value * Math.PI / 180);
}

/* Sqrt */
function sqrt(){
	document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}

/* Pow */
function pow(){
	document.getElementById("result").value = Math.pow(document.getElementById("result").value, 2);
}

/* Equals */
function equals() {
	var z = document.getElementById("result").value;
	if(z) {
		document.getElementById("result").value = eval(z);
	}
}

/* All Clear */
function allClear() {
	document.getElementById("result").value = "";
}
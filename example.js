function multiply(x, y) {
return x * y;
}

var button = document.querySelector("#calculate")
button.onclick = function() {
 var input1 = document.querySelector("#first").value;
 var input2 = document.querySelector("#second").value;

var result = multiply(input1, input2);

console.log(result);
document.querySelector("#answer").innerHTML = result;

}

function updateName(newName) {
	if (newName === "Miriam") {
		document.querySelector("#myname").innerHTML = "Hey, my name is Miriam too!";
	} else {
	document.querySelector("#myname").innerHTML = "Hello, " + newName
   }
}

var namefield = document.querySelector("#nameinput");
namefield.oninput = function () {
updateName(namefield.value);


var colourfield = document.querySelector("#colour");
colourfield.oninput = function() {
document.querySelector("#colourchange").style.color = colourfield.value;
}
var name = "Miriam";

console.log(name);
document.querySelector("#myname").innerHTML = "Helo My name is " + name;

var button = document.querySelector("#calculate")
button.onclick = function() {
 var input1 = document.querySelector("#first").value;
 var input2 = document.querySelector("#second").value;

var result = input1 * input2

console.log(result);
document.querySelector("#answer").innerHTML = result;

}

alert("Hello!");

if (1 + 1 === 2) {
    alert("Maths works")
}

if (1+1===3) {
	alert("Oh dear");
}

function checkPassword() {
    console.log("Yes, that's a password");
    var password = document.getElementById("password").value;
    alert(password);
if (password === "swordfish") {
        console.log(password + " is correct!");
    } else if (password==="Miriam") {

    	
    } else {
    	console.log("Not right");
    }
}
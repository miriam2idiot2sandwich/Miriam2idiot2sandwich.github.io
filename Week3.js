alert("Hello!");

if (1 + 1 === 2) {
    alert("Maths works")
}

if (1+1===3) {
	alert("Oh dear");
}

for (i = 8; i <= 43; i+=2) {
    console.log(i);
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

function duplicate() {
    var image = document.getElementById("target").innerHTML;
    var copies = document.getElementById("copies").value;
    document.getElementById("result").innerHTML = "";

    for (i = 1; i <= copies; i++) {
        document.getElementById("result").innerHTML += image;
    }
}
//Multiplication (https://stackoverflow.com/questions/21223164/multiplying-two-inputs-with-javascript-displaying-in-text-box)
function calculate() {
	var myBox1 = document.getElementById('box1').value;
	var myBox2 = document.getElementById('box2').value;
	var result = document.getElementById('result');
	var myResult = myBox1 * myBox2;
	document.getElementById('result').value = myResult;

}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Multiplication (https://stackoverflow.com/questions/21223164/multiplying-two-inputs-with-javascript-displaying-in-text-box)
function calculate() {
	var myBox1 = document.getElementById('box1').value;
	var myBox2 = document.getElementById('box2').value;
	var result = document.getElementById('result');
	var myResult = myBox1 * myBox2;
	document.getElementById('result').value = myResult;

}

function genSelected(val) {
	var generator = document.getElementById("generator").value;
	var text = ""
	if (generator == "clasdis") {
		document.getElementById("generatorLink").getElementsByTagName('a')[0].href='https://github.com/JeffersonLab/clasdis-nocernlib/blob/master/README.md';
		document.getElementById("generatorLink").getElementsByTagName('a')[0].innerHTML='clasdis options';
	} else if (generator == "dvcs") {
		document.getElementById("generatorLink").getElementsByTagName('a')[0].href='https://github.com/JeffersonLab/dvcsgen/blob/master/README.md';
		document.getElementById("generatorLink").getElementsByTagName('a')[0].innerHTML='dvcs options';

	} else if (generator == "disrad") {
		document.getElementById("generatorLink").getElementsByTagName('a')[0].href='https://github.com/JeffersonLab/inclusive-dis-rad/blob/master/README.md';
		document.getElementById("generatorLink").getElementsByTagName('a')[0].innerHTML='disrad options';

	} else if (generator == "genKYandOnePion") {
		document.getElementById("generatorLink").getElementsByTagName('a')[0].href='https://github.com/ValeriiKlimenko/genKYandOnePion';
		document.getElementById("generatorLink").getElementsByTagName('a')[0].innerHTML='genKYandOnePion options';

	}
}

// Side navigation
// function w3_open() {
// 	var x = document.getElementById("mySidebar");
// 	x.style.width = "30%";
// 	x.style.height = "60%";
// 	x.style.fontSize = "40px";
// 	x.style.paddingTop = "0%";
// 	x.style.display = "block";
// }
// 	function w3_close() {
// 	document.getElementById("mySidebar").style.display = "none";
// }
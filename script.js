
let computerSecret;
let userInput;

function selectNew() {
	computerSecret = parseInt(Math.random() * 100);
}

function guess() {

	userInput = parseInt(document.querySelector("input").value);

	console.log(typeof userInput);

	if (userInput === computerSecret) {
		alert("Congratulations!! YOU WON!");
		selectNew();
	} else if (userInput > computerSecret) {
		alert("Too High");
	} else {
		alert("Too low");
	}

}

selectNew();



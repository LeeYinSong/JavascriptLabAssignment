question();

function question() {
	let name = "";
	let firstAge = "";
	let age = "";

	do {
		name = prompt("What's your name?", "");
	} while(name === "");

	do {
		firstAge = prompt("How old were you when you first used a computer?", "");
	} while(firstAge === "" || firstAge < 0 || firstAge > 100);

	do {
		age = prompt("How old are you now?", "");
	} while(age === "" || age < 0 || age > 100);

	let years = age - firstAge;

	document.getElementById("result").innerHTML = name + ", you have used computers for " + years + " years.";
}
infiniteLoop();

function infiniteLoop() {
	let letter = "";

	do {
		letter = prompt("This function will keeps prompting until you input the letter \"p\"", "");
	} while(letter !== "p");
}
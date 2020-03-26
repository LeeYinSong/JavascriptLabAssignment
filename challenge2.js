backgroundColor();

function backgroundColor() {
	let color = "";

	do {
		color = prompt("Pick a background color for this page", "");
	} while(color === "");

	document.body.style.backgroundColor = color;
}
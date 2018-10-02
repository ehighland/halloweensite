var checklist = "<br />blah blah testing"

document.getElementById("select").addEventListener("click", choice);
document.getElementById("all").addEventListener("click",choice);

function choice() {
	if (this.id === "select"){
		document.getElementById("list").innerHTML = checklist;
	}
}


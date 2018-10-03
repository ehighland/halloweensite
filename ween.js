var movies = ["Mr. Jones", "The Perfect Host", "Suburban Gothic", "Prom Night", "Revenge", "The Canal", "Psycho", "Wolfcop", "Sonno Profundo", "Take Shelter", "Lovely Molly", "A Tale of Two Sisters", "Shadow of Doubt", "Dead of Night", "Der Nachtmahr", "The Substitute", "Vampyros Lesbos", "Alena", "Let Us Prey", "Rabid", "The House That Dripped Blood", "Sleep Tight", "Cherry Tree", "The Wicker Man (1973)", "Southbound", "Blood and Black Lace", "And Soon the Darkness", "Are We Not Cats", "Bug","Coherence", "Day of the Dead"];

document.getElementById("shuffle").addEventListener("click", shuffle);

function shuffle() {
	var x = Math.floor((Math.random() * movies.length) +1) -1;
	var output = movies[x];

	document.getElementById("output").innerHTML = output;
}


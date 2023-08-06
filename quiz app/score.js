function count_score()
{
	event.preventDefault(); 

	let score = 0;
	let quiz_form = document.getElementById("quiz");

	for(question in result)
	{
		if(result[question] == quiz_form.elements[question].value) 
		score++;
	}

	document.getElementById("score").innerHTML = score;
}
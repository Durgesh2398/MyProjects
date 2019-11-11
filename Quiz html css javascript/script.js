function check(){
    var ans1 = document.quiz.question1.value;
    var ans2 = document.quiz.question2.value;
    var correct = 0;
    if (ans1 == "colgroup") {
		correct++;
}
	if (ans2 == "World wide Web Consortium") {
		correct++;
}	
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
//creates global timer variables
var answerTimer;
var answerTimeLeft;
var answerSeconds;

//creates variables that will be used to manipulate the main-div & the time remaining div
var getMainDiv;
var fillTimeRemaining;



//creates the html for each question & set of answers
var q1 = "<p class='question-text'>What was Tupac's birth name?</p><div class='choices'><input type='radio' name='question1' id='q1option1'>Mutulu Shakur<input type='radio' name='question1' id='q1option2'>Tupac Amaru Shakur<input type='radio' name='question1' id='q1option3'>Radric Davis<input type='radio' name='question1' id='q1option4'>Lesane Parish Crooks</div>";

var q2 = "<p class='question-text'>What prison was Tupac incarcerated in on a sexual assault charge?</p><div class='choices'><input type='radio' name='question2' id='q2option1'>San Quentin State Prison<input type='radio' name='question2' id='q2option2'>Rikers Island<input type='radio' name='question2' id='q2option3'>Clinton Correctional Facility<input type='radio' name='question2' id='q2option4'>Guantanamo Bay</div>";

var q3 = "<p class='question-text'>What was the first motion picture that Tupac starred in?</p><div class='choices'><input type='radio' name='question3' id='q3option1'>Juice<input type='radio' name='question3' id='q3option2'>Above the Rim<input type='radio' name='question3' id='q3option3'>Boyz n the Hood<input type='radio' name='question3' id='q3option4'>Poetic Justice</div>";

var q4 = "<p class='question-text'>What was Tupac's debut solo single?</p><div class='choices'><input type='radio' name='question4' id='q4option1'>Trapped<input type='radio' name='question4' id='q4option2'>Brenda's Got A Baby<input type='radio' name='question4' id='q4option3'>If My Homie Calls<input type='radio' name='question4' id='q4option4'>I Get Around</div>";

var q5 = "<p class='question-text'>Tupac may have repped the West Coast in his music, but he was actually born in New York, and moved to __________ in 1986, where he studied at a public arts High School, before finally relocating to Marin City, CA in 1988.</p><div class='choices'><input type='radio' name='question5' id='q5option1'>Newark, NJ<input type='radio' name='question5' id='q5option2'>Chicago, IL<input type='radio' name='question5' id='q5option3'>Baltimore, MD<input type='radio' name='question5' id='q5option4'>Detroit, MI</div>";

var q6 = "<p class='question-text'>Tupac had a close friendship with the current wife of which famous actor?</p><div class='choices'><input type='radio' name='question6' id='q6option1'>Will Smith<input type='radio' name='question6' id='q6option2'>Eddie Murphy<input type='radio' name='question6' id='q6option3'>Denzel Washington<input type='radio' name='question6' id='q6option4'>Martin Lawrence</div>";

var q7 = "<p class='question-text'>Which Tupac album made history as the first double-full-length hip-hop solo studio album released for mass consumption?</p><div class='choices'><input type='radio' name='question7' id='q7option1'>Life After Death<input type='radio' name='question7' id='q7option2'>All Eyez On Me<input type='radio' name='question7' id='q7option3'>Me Against The World<input type='radio' name='question7' id='q7option4'>The Don Killuminati: The 7 Day Theory</div>";

var q8 = "<p class='question-text'>Which of the following rappers was NOT an original member of 'The Outlawz', a group founded by Tupac after his release from prison?</p><div class='choices'><input type='radio' name='question8' id='q8option1'>Hussein Fatal<input type='radio' name='question8' id='q8option2'>Stretch<input type='radio' name='question8' id='q8option3'>Young Noble<input type='radio' name='question8' id='q8option4'>Storm</div>";

var q9 = "<p class='question-text'>The name Tupac Shakur is a reference to 'Túpac Amaru II', an 18th century political revolutionary from what country?</p><div class='choices'><input type='radio' name='question9' id='q9option1'>Chile<input type='radio' name='question9' id='q9option2'>Nigeria<input type='radio' name='question9' id='q9option3'>Belize<input type='radio' name='question9' id='q9option4'>Peru</div>";

var q10 = "<p class='question-text'>Who inducted Tupac into the Rock N' Roll Hall of Fame in 2017?</p><div class='choices'><input type='radio' name='question10' id='q10option1'>Snoop Dogg<input type='radio' name='question10' id='q10option2'>Ice Cube<input type='radio' name='question10' id='q10option3'>Dr. Dre<input type='radio' name='question10' id='q10option4'>Kendrick Lamar</div>";


//sets up a function that will count down the seconds remaining in the quiz
function answerCountDown() {
    answerSeconds--;
    $("#time-left-during").html(answerSeconds);
}



//function to be called when quiz first starts or when the user clicks the "start over" button
function start() {

    //Creates a timer for how long the user has to fill out the quiz
    answerTimer = setTimeout(submit, 181000);

    //Sets up on-screen seconds countdown
    answerSeconds = 180;
    answerTimeLeft = setInterval(answerCountDown, 1000);


    //sets up variable to select the main-div
    getMainDiv = $("#main-div");

    //creates a new div for the "time-remaining" 
    fillTimeRemaining = $("<div id='time-remaining'>").html("Time Left: <span id='time-left-during'>180</span>");


    //clears the main-div so the new content is ready to be put into it
    getMainDiv.empty();


    // appends the "time remaining" div to the main-div
    getMainDiv.append(fillTimeRemaining);

    //creates a new div for the each of the questions & appends them to the main-div
    var fillQ1 = $("<div id = 'question-1'>").html(q1);
    getMainDiv.append(fillQ1);

    var fillQ2 = $("<div id = 'question-2'>").html(q2);
    getMainDiv.append(fillQ2);

    var fillQ3 = $("<div id = 'question-3'>").html(q3);
    getMainDiv.append(fillQ3);

    var fillQ4 = $("<div id = 'question-4'>").html(q4);
    getMainDiv.append(fillQ4);

    var fillQ5 = $("<div id = 'question-5'>").html(q5);
    getMainDiv.append(fillQ5);

    var fillQ6 = $("<div id = 'question-6'>").html(q6);
    getMainDiv.append(fillQ6);

    var fillQ7 = $("<div id = 'question-7'>").html(q7);
    getMainDiv.append(fillQ7);

    var fillQ8 = $("<div id = 'question-8'>").html(q8);
    getMainDiv.append(fillQ8);

    var fillQ9 = $("<div id = 'question-9'>").html(q9);
    getMainDiv.append(fillQ9);

    var fillQ10 = $("<div id = 'question-10'>").html(q10);
    getMainDiv.append(fillQ10);


    //creates a new div for the submit button & appends it to the main-div
    var fillSubmit = $("<button class='submit' onclick='submit()'>").text("SUBMIT");
    getMainDiv.append(fillSubmit);

}



//Function which is activated when user clicks submit or when time runs out
function submit() {

    //clears the timer & on-screen seconds countdown
    clearTimeout(answerTimer);
    clearInterval(answerTimeLeft);


    //sets the initial value of the score variables to 0
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;



    //sets up variables to check if the correct choice for each answer was selected
    var q1CorrectAnswer = $("#q1option4").prop("checked");
    var q2CorrectAnswer = $("#q2option3").prop("checked");
    var q3CorrectAnswer = $("#q3option1").prop("checked");
    var q4CorrectAnswer = $("#q4option2").prop("checked");
    var q5CorrectAnswer = $("#q5option3").prop("checked");
    var q6CorrectAnswer = $("#q6option1").prop("checked");
    var q7CorrectAnswer = $("#q7option2").prop("checked");
    var q8CorrectAnswer = $("#q8option2").prop("checked");
    var q9CorrectAnswer = $("#q9option4").prop("checked");
    var q10CorrectAnswer = $("#q10option1").prop("checked");


    // QUESTION 1 CHECKER

    // if at least one answer selected for question 1...
    if ($("input[name=question1]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q1CorrectAnswer) {
            correct++;
        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }



    // QUESTION 2 CHECKER

    // if at least one answer selected for question 2...
    if ($("input[name=question2]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q2CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }



    //QUESTION 3 CHECKER

    // if at least one answer selected for question 3...
    if ($("input[name=question3]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q3CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }



    //QUESTION 4 CHECKER

    // if at least one answer selected for question 4...
    if ($("input[name=question4]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q4CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }



    //QUESTION 5 CHECKER

    // if at least one answer selected for question 5...
    if ($("input[name=question5]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q5CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }


    //QUESTION 6 CHECKER

    // if at least one answer selected for question 6...
    if ($("input[name=question6]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q6CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }


    //QUESTION 7 CHECKER

    // if at least one answer selected for question 7...
    if ($("input[name=question7]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q7CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }

    //QUESTION 8 CHECKER

    // if at least one answer selected for question 8...
    if ($("input[name=question8]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q8CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }


    //QUESTION 9 CHECKER

    // if at least one answer selected for question 9...
    if ($("input[name=question9]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q9CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }



    //QUESTION 10 CHECKER

    // if at least one answer selected for question 10...
    if ($("input[name=question10]:checked").length > 0) {


        //if the selected answer is the correct one, add a point to "correct" variable
        if (q10CorrectAnswer) {
            correct++;

        }

        //if the selected answer is NOT the correct one, add a point to "wrong" variable
        else {

            wrong++;
        }

    }

    //if no answers selected, add a point to the "unanswered" variable
    else {

        unanswered++;

    }


    //DISPLAYS RESULTS OF ANSWERS 


    //sets up variable to select the main-div
    getMainDiv = $("#main-div");

    //creates a new div for the "time-remaining" 
    fillTimeRemaining = $("<div id='time-remaining'>").html("Time Left: <span id='time-left-during'></span>");


    //clears the main-div so the new content is ready to be put into it
    getMainDiv.empty();

    //sets up a variable to store the html for the results div
    var resultsDiv = "<center><img id='pac-results' src='assets/images/pac_results.jpg'><div id='results-container'><div class = 'results'>You got a: <br> <div id = 'score'>" + correct + "/10!</div></div>" + "<div class = 'results2'> <span class='result-number'>" + correct + "</span> Correct <br> <span class='result-number'>" + wrong + "</span> Wrong <br><span class='result-number'>" + unanswered + "</span> Blank</div></div></center>";

    //appeds the results div to the main div
    getMainDiv.append(resultsDiv);


    //prepends the "time remaining" div to the main-div
    getMainDiv.prepend(fillTimeRemaining);

    //fills in the number of seconds that the clock was stopped at when answers were submitted
    $("#time-left-during").html(answerSeconds);


    //create a variable to hold the html for the Start Over button & append that button to the main-div
    var startOver = $("<br><button class = 'start-over' onclick = 'start()'>").text("Try Again!");
    getMainDiv.append(startOver);


}
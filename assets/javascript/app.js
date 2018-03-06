//creates global timer variables
var answerTimer;
var answerTimeLeft;
var answerSeconds;

//creates the global score variables
var correct = 0;
var wrong = 0;
var unanswered = 0;


//creates the html for each question & set of answers
var q1 = "<p>What is question 1?</p><input type='radio' name='question1' id='q1option1'>Option 1<input type='radio' name='question1' id='q1option2'>Option 2<input type='radio' name='question1' id='q1option3'>Option 3<input type='radio' name='question1' id='q1option4'>CORRECT";

var q2 = "<p>What is question 2?</p><input type='radio' name='question2' id='q2option1'>Option 1<input type='radio' name='question2' id='q2option2'>Option 2<input type='radio' name='question2' id='q2option3'>CORRECT<input type='radio' name='question2' id='q2option4'>Option 4";

var q3 = "<p>What is question 3?</p><input type='radio' name='question3' id='q3option1'>CORRECT<input type='radio' name='question3' id='q3option2'>Option 2<input type='radio' name='question3' id='q3option3'>Option 3<input type='radio' name='question3' id='q3option4'>Option 4";

var q4 = "<p>What is question 4?</p><input type='radio' name='question4' id='q4option1'>Option 1<input type='radio' name='question4' id='q4option2'>CORRECT<input type='radio' name='question4' id='q4option3'>Option 3<input type='radio' name='question4' id='q4option4'>Option 4";

var q5 = "<p>What is question 5?</p><input type='radio' name='question5' id='q5option1'>Option 1<input type='radio' name='question5' id='q5option2'>Option 2<input type='radio' name='question5' id='q5option3'>CORRECT<input type='radio' name='question5' id='q5option4'>Option 4";




function answerCountDown() {
    answerSeconds--;

    $("#time-left-during").html(answerSeconds);




}


// PUT THE TIME REMAINING INTO THE CODE, EACH QUESTION, AND A SUBMIT BUTTON

function start() {

    // SETTIMEOUT FUNCTION WHICH USES THE "SUBMIT" FUNCTION
    answerTimer = setTimeout(submit, 5000);

    //SET INTERVAL TO SHOW SECONDS ONSCREEN

    //set up on-screen seconds countdown
    answerSeconds = 5;
    answerTimeLeft = setInterval(answerCountDown, 1000);


 

    //sets up variable to select the main-div
    var getMainDiv = $("#main-div");
    //clears the main-div so the new content is ready to be put into it
    getMainDiv.empty();


    //creates a new div for the "time-remaining" & appends it to the main-div
    var fillTimeRemaining = $("<div id='time-remaining'>").html("Time remaining: <span id='time-left-during'></span>") ;
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


    //creates a new div for the submit & appends it to the main-div
    var fillSubmit = $("<button class='submit' onclick='submit()'>").text("Submit");
    getMainDiv.append(fillSubmit);


}



//Function which is activated when user clicks submit or when time runs out
function submit() {

    clearTimeout(answerTimer);
    clearInterval(answerTimeLeft);

    $("#time-remaining").html("Time remaining: <span id='time-left-during'></span>");
    $("#time-left-during").html(answerSeconds);

    var q1CorrectAnswer = $("#q1option4").prop("checked");
    var q2CorrectAnswer = $("#q2option3").prop("checked");
    var q3CorrectAnswer = $("#q3option1").prop("checked");
    var q4CorrectAnswer = $("#q4option2").prop("checked");
    var q5CorrectAnswer = $("#q5option3").prop("checked");


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



    //DISPLAY RESULTS OF ANSWERS 

    $("#main-div").html(correct + "<br>" + wrong + "<br>" + unanswered);




}





















/*

//start function for when start button is clicked
function start() {


    // for (var i = 0; i < questionsAnswers.length; i++) {


    //put question 1 into the html
    $("#question-1").html(questionsAnswers[0]);
    //set countdown timer to track when time's up for that question
    answerTimer = setTimeout(timeout1, 3000);

    //set up on-screen seconds countdown
    answerSeconds = 3;
    answerTimeLeft = setInterval(answerCountDown, 1000);

    function answerCountDown() {
        answerSeconds--;

        $("#time-left-during").html(answerSeconds);


    }




    //set up what happens when you click one of the answers
    $(".options").on("click", function () {

        //make a variable that is equal to the value of the specific answer clicked
        var clickedAnswerID = $(this).attr("value");

        //if the answer clicked has the value of correct choice, then clear the timeout, stop the on-screen countdown, and put the corresponding info into the html
        if (clickedAnswerID === "correct-choice") {


            clearTimeout(answerTimer);
            clearInterval(answerTimeLeft);
            $("#question-content").html(correctResults[0]);
            $("#time-left").html(answerSeconds);
            correct++;

            //after 5 seconds, show the next question
            resultDisplayTimer = setTimeout(function () { $("#question-content").html(questionsAnswers[1]); }, 5000);





        }

        //if the answer clicked DOESN'T have the value of correct choice, then clear the timeout, stop the on-screen countdown, and put the corresponding info into the html
        else {

            clearTimeout(answerTimer);
            clearInterval(answerTimeLeft);
            $("#question-content").html(wrongResults[0]);
            $("#time-left").html(answerSeconds);
            wrong++;

            //after 5 seconds, show the next question
            resultDisplayTimer = setTimeout(function () { $("#question-content").html(questionsAnswers[1]); }, 5000);
        }


    });





    //sets up what happens when time runs out for an answer
    function timeout1() {

        clearInterval(answerTimeLeft);
        $("#question-content").html(timeoutResults[0]);
        answerSeconds = 0;
        $("#time-left").html(answerSeconds);

        unanswered++;

        //after 5 seconds, show the next question
        resultDisplayTimer = setTimeout(function () { $("#question-content").html(questionsAnswers[1]); }, 5000);




    }


    // }



}

*/
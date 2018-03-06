//creating global timer variables
var answerTimer;
var answerTimeLeft;
var answerSeconds;

//creating the global score variables
var correct = 0;
var wrong = 0;
var unanswered = 0;







//creating the html for each question & set of answers, plus setting up a variable for the id of the correct answer to each question


var q1 = "<p>What is question 1?</p><input type='radio' class = 'question1' name='question1' id='q1option1'>Option 1<input type='radio' class = 'question1' name='question1' id='q1option2'>Option 2<input type='radio' class = 'question1' name='question1' id='q1option3'>Option 3<input type='radio'  name='question1' class = 'question1' id='q1option4'>Option 4";

var q2 = "<p>What is question 2?</p><input type='radio' name='question2' id='q2option1'>Option 1<input type='radio' name='question2' id='q2option2'>Option 2<input type='radio' name='question2' id='q2option3'>Option 3<input type='radio' name='question2' id='q2option4'>Option 4";

var q3 = "<p>What is question 3?</p><input type='radio' name='question3' id='q3option1'>Option 1<input type='radio' name='question3' id='q3option2'>Option 2<input type='radio' name='question3' id='q3option3'>Option 3<input type='radio' name='question3' id='q3option4'>Option 4";

var q4 = "<p>What is question 4?</p><input type='radio' name='question4' id='q4option1'>Option 1<input type='radio' name='question4' id='q4option2'>Option 2<input type='radio' name='question4' id='q4option3'>Option 3<input type='radio' name='question4' id='q4option4'>Option 4";

var q5 = "<p>What is question 5?</p><input type='radio' name='question5' id='q5option1'>Option 1<input type='radio' name='question5' id='q5option2'>Option 2<input type='radio' name='question5' id='q5option3'>Option 3<input type='radio' name='question5' id='q5option4'>Option 4";

var submitButton = "<button class='submit' onclick='submit()'>Submit</button>";



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






    $("#time-remaining").html("Time remaining: <span id='time-left-during'></span>");

    $("#question-1").html(q1);

    $("#question-2").html(q2);

    $("#question-3").html(q3);

    $("#question-4").html(q4);

    $("#question-5").html(q5);

    //SUBMIT BUTTON WHICH USES THE "SUBMIT" FUNCTION
    $("#submit").html(submitButton);




}



// "SUBMIT" FUNCTION

function submit() {

    clearTimeout(answerTimer);
    clearInterval(answerTimeLeft);

    $("#time-remaining").html("Time remaining: <span id='time-left-during'></span>");
    $("#time-left-during").html(answerSeconds);


    var isQ1Answered = $(".question1").prop("checked");
    var isQ2Answered = $("[name='question2']").prop("checked");
    var isQ3Answered = $("[name='question3']").prop("checked");
    var isQ4Answered = $("[name='question4']").prop("checked");
    var isQ5Answered = $("[name='question5']").prop("checked");


    var q1CorrectAnswer = $("#q1option4").prop("checked");
    var q2CorrectAnswer = $("#q1option3").prop("checked");
    var q3CorrectAnswer = $("#q1option1").prop("checked");
    var q4CorrectAnswer = $("#q1option2").prop("checked");
    var q5CorrectAnswer = $("#q1option3").prop("checked");


    //if the correct choice for question 1 has been selected, add a point to the "correct" variable


    // if none of the choices for question 1 have been selected, add a point to the "unanwered" variable


//at least one answer selected
    if (  ($("input[name=question1]:checked").length > 0)  && (q1CorrectAnswer === true) {

        

        if (q1CorrectAnswer) {
            correct++;
            console.log("correct answer selected");

        }

        else {

            wrong++;
            console.log("wrong answer selected");
        }

    }

    //no answers selected
    else {

        unanswered++;
        console.log("no answer selected");

    }


    /*
        if (isQ1Answered === true) {
            console.log(true);
            unanswered++;
    
        }
    */

    // if the correct choice for question 1 has NOT been selected, BUT at least one of the other (incorrect) choices has, add a point to the "wrong" variable





    //if the correct choice for question 2 has been selected, add a point to the "correct" variable
    if (q2CorrectAnswer) {
        correct++;

    }

    // if none of the choices for question 2 have been selected, add a point to the "unanwered" variable
    if (!isQ2Answered) {
        unanswered++;

    }

    // if the correct choice for question 2 has NOT been selected, BUT at least one of the other (incorrect) choices has, add a point to the "wrong" variable
    if (!q2CorrectAnswer && !isQ2Answered) {
        wrong++;

    }





    //if the correct choice for question 3 has been selected, add a point to the "correct" variable
    if (q3CorrectAnswer) {
        correct++;

    }

    // if none of the choices for question 3 have been selected, add a point to the "unanwered" variable
    if (!isQ3Answered) {
        unanswered++;

    }

    // if the correct choice for question 3 has NOT been selected, BUT at least one of the other (incorrect) choices has, add a point to the "wrong" variable
    if (!q3CorrectAnswer && !isQ3Answered) {
        wrong++;

    }





    //if the correct choice for question 4 has been selected, add a point to the "correct" variable
    if (q4CorrectAnswer) {
        correct++;

    }

    // if none of the choices for question 4 have been selected, add a point to the "unanwered" variable
    if (!isQ4Answered) {
        unanswered++;

    }

    // if the correct choice for question 4 has NOT been selected, BUT at least one of the other (incorrect) choices has, add a point to the "wrong" variable
    if (!q4CorrectAnswer && !isQ4Answered) {
        wrong++;

    }





    //if the correct choice for question 5 has been selected, add a point to the "correct" variable
    if (q5CorrectAnswer) {
        correct++;

    }

    // if none of the choices for question 5 have been selected, add a point to the "unanwered" variable
    if (!isQ5Answered) {
        unanswered++;

    }

    // if the correct choice for question 5 has NOT been selected, BUT at least one of the other (incorrect) choices has, add a point to the "wrong" variable
    if (!q5CorrectAnswer && !isQ5Answered) {
        wrong++;

    }


    $("#question-content").html(correct + "<br>" + wrong + "<br>" + unanswered);



    // CHECKS IF THE "CHECKED" ATTR OF EACH QUESTION IS CORRESPONDING TO THE CORRECT CHECKBOX
    // IF YES, ADD A POINT TO "CORRECT"
    //IF NO, ADD A POINT TO "WRONG"
    //IF BLANK, ADD A POINT TO UNANSWERED

    // DISPLAY THE COUNT OF EACH IN THE HTML



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
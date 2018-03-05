//creating global timer variables
var answerTimer;
var resultDisplayTimer;
var answerSeconds;
var answerTimeLeft;

//creating the global score variables
var correct = 0;
var wrong = 0;
var unanswered = 0;





//creating the html for each question & set of answers, plus setting up a variable for the id of the correct answer to each question



var questionsAnswers = [

    /*q1:*/ "<div>Time remaining: <span id='time-left-during'></span></div><p>What is question 1?</p><div class='options'>Option 1</div><div class='options'>Option 2</div><div class='options' value='correct-choice'>Option 3</div><div class='options'>Option 4</div>",

    /* q2:*/ "<div>Time remaining: <span id='time-left-during'></span></div><p>What is question 2?</p><div class='options'>Option 1</div><div class='options' value='correct-choice'>Option 2</div><div class='options'>Option 3</div><div class='options'>Option 4</div>",

        /*q3:*/ "<div>Time remaining: <span id='time-left-during'></span></div><p>What is question 3?</p><div class='options'>Option 1</div><div class='options'>Option 2</div><div class='options'>Option 3</div><div class='options' value='correct-choice'>Option 4</div>",

   /* q4:*/ "<div>Time remaining: <span id='time-left-during'></span></div><p>What is question 4?</p><div class='options'>Option 1</div><div class='options' value='correct-choice'>Option 2</div><div class='options'>Option 3</div><div class='options'>Option 4</div>",

    /* q5: */ "<div>Time remaining: <span id='time-left-during'></span></div><p>What is question 5?</p><div class='options' value='correct-choice'>Option 1</div><div class='options'>Option 2</div><div class='options'>Option 3</div><div class='options'>Option 4</div>"



]




var correctResults = [

    /*result1Correct:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Correct!</div><img src='#'>",

    /* result2Correct:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Correct!</div><img src='#'>",

    /* result3Correct:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Correct!</div><img src='#'>",

    /*result4Correct: */ "<div>Time remaining: <span id='time-left'></span></div><div>Correct!</div><img src='#'>",

    /* result5Correct: */ "<div>Time remaining: <span id='time-left'></span></div><div>Correct!</div><img src='#'>"

]


var wrongResults = [

    /*result1Wrong:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Incorrect!</div><div>The correct answer was: Option 3</div><img src='#'>",

    /*result2Wrong:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Incorrect!</div><div>The correct answer was: Option 2</div><img src='#'>",

     /* result3Wrong:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Incorrect!</div><div>The correct answer was: Option 4</div><img src='#'>",

     /* result4Wrong: */ "<div>Time remaining: <span id='time-left'></span></div><div>Incorrect!</div><div>The correct answer was: Option 2</div><img src='#'>",

     /* result5Wrong:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Incorrect!</div><div>The correct answer was: Option 1</div><img src='#'>",
]


var timeoutResults = [



    /*result1Timeout:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Out of Time!</div><div>The correct answer was: Option 3</div><img src='#'>",

   /* result2Timeout: */ "<div>Time remaining: <span id='time-left'></span></div><div>Out of Time!</div><div>The correct answer was: Option 2</div><img src='#'>",

   /* result3Timeout:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Out of Time!</div><div>The correct answer was: Option 4</div><img src='#'>",

    /* result4Timeout: */ "<div>Time remaining: <span id='time-left'></span></div><div>Out of Time!</div><div>The correct answer was: Option 2</div><img src='#'>",

    /*result5Timeout:*/ "<div>Time remaining: <span id='time-left'></span></div><div>Out of Time!</div><div>The correct answer was: Option 1</div><img src='#'>"


]


function runQuiz (questionsAnswers, correctResults, wrongResults,timeoutResults) {


}





///TRY PUTTING THE BOTTOM SHIT INTO A FOR LOOP? AND MAKING EACH ANSWER PART OF AN ARRAY OR OBJECT??


//start function for when start button is clicked
function start() {


    // for (var i = 0; i < questionsAnswers.length; i++) {


    //put question 1 into the html
    $("#question-content").html(questionsAnswers[0]);
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








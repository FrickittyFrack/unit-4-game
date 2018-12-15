
// Computer generates a random number in between 19-120 at the beginning of each game

// Computer also generates a random number between 1-12 for each crystal for each game

// Computer also resets the users score at the start of each game

// Clicking on one of the crystals results in user score increasing by the corresponding number assigned to the crystal

// Once the user score hits the computers random number EXACTLY the win score increases by 1 and game is reset

// If the user score goes above the computers random number the lose score increases by 1 and game is reset


$(document).ready(function() {
    resetGame();

    var compRanChoice = Math.floor(Math.random() * 120) + 20;
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    var redNumber = Math.floor(Math.random() * 12) + 1;
    var blueNumber = Math.floor(Math.random() * 12) + 1;
    var greenNumber = Math.floor(Math.random() * 12) + 1;
    var purpleNumber = Math.floor(Math.random() * 12) + 1;


    function newCrystalValue() {
        var redNumber = Math.floor(Math.random() * 12) + 1;
        console.log("Red: ", redNumber);
    
        var blueNumber = Math.floor(Math.random() * 12) + 1;
        console.log("Blue: ", blueNumber);
    
        var greenNumber = Math.floor(Math.random() * 12) + 1;
        console.log("Green: ", greenNumber);
    
        var purpleNumber = Math.floor(Math.random() * 12) + 1;
        console.log("Purple: ", purpleNumber);
    };

    function checkAnswer() {
        if(parseInt(currentScore) === compRanChoice) {
            $("#wins").text(wins++);
            resetGame();
        }

        else if(currentScore > compRanChoice) {
            $("#losses").text(losses++);
            resetGame();
        };
    };

    function resetGame() {
        currentScore = 0;
        var compRanChoice = Math.floor(Math.random() * 120) + 20;
        console.log(compRanChoice);
        $("#random-num").text(compRanChoice);
        newCrystalValue();
    };

    $("#red-crystal").on("click", function() {
        $("#current-score").text(currentScore + redNumber);
        currentScore = currentScore + redNumber;
        checkAnswer();
    });

    $("#blue-crystal").on("click", function() {
        $("#current-score").text(currentScore + blueNumber);
        currentScore = currentScore + blueNumber;
        checkAnswer();
    });

    $("#green-crystal").on("click", function() {
        $("#current-score").text(currentScore + greenNumber);
        currentScore = currentScore + greenNumber;
        checkAnswer();
    });

    $("#purple-crystal").on("click", function() {
        $("#current-score").text(currentScore + purpleNumber);
        currentScore = currentScore + purpleNumber;
        checkAnswer();
    });
})
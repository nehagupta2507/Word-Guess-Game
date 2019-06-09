//Greeting user
let name = prompt ("Hey! What's your name?");
console.log("Hello " + name);
let userName= document.getElementById("player-Name");
userName.textContent = "Hello "+ name;

//Global Variables

//Words array 

let words = ["jamie", "ramsay", "tyrion", "ned", "littlefinger", "ygritte", "cersei", "melisandre", "samwell","hodor","tywin","varys"];
let randomWord = "";
let lettersInWord = [];
let underScores = 0;
let underScoreCorrect = [];
let incorrectGuess = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let validGuesses = alphabet.split("");

// Counter Variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;

function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = randomWord.split("");
    underScores = lettersInWord.length;
// Change the random word into all _.
    for (let i = 0; i < underScores; i++) {
        underScoreCorrect.push("_");   
    }
    document.getElementById("under-Score").innerHTML = "  " + underScoreCorrect.join("  ");
    console.log(randomWord);
    console.log(lettersInWord);
    console.log(underScores);
    console.log(underScoreCorrect);
}
 //Still figuring out to make it work
function hint(){
    if (randomWord === words[0]) {
         console.log("jamie I am here");
        document.getElementById("Hint").textContent =  `The things I do for love.`;
}
    else if (randomWord === words[1]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `If you think this has a happy ending, you haven’t been paying attention.`;
}
    else if (randomWord === words[2]) {
         console.log("I am here");
         document.getElementById("Hint").textContent =  `That’s what I do: I drink and I know things.`;
}
    else if (randomWord === words[3]) {
        console.log("I am here");
         document.getElementById("Hint").textContent =  `The man who passes the sentence should swing the sword.`;
}
    else if (randomWord === words[4]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `Chaos isn’t a pit. Chaos is a ladder.`;

}   else if (randomWord === words[5]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `You know nothing, Jon Snow.`;
}
    else if (randomWord === words[6]) {
         console.log("I am here");
        document.getElementById("Hint").textContent =  `When you play the game of thrones, you win or you die. There is no middle ground.`;

}   else if (randomWord === words[7]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `The night is dark and full of terrors.`;
}
   else if (randomWord === words[8]) {
        console.log("I am here");
         document.getElementById("Hint").textContent =  `I read it in a book.`;
}   
    else if (randomWord === words[9]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `Hold the door!`;
}
    else if (randomWord === words[10]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `Any man who must say 'I am the King' is no true King.`;
}
    else if (randomWord === words[11]) {
        console.log("I am here");
        document.getElementById("Hint").textContent =  `The big fish eat the little fish and I keep on paddling.`;
}
};

//Code for audio and images
var x = document.getElementById("GOT"); 
function playAudio() { 
  x.play(); 
   }

function fun() {
    if (randomWord === words[0]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Jamie.jpg";
        x.pause();
        playAudio();
    }
    
    else if (randomWord === words[1]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Ramsay.jpg";
        x.pause();
        playAudio();
    }
    
    else if (randomWord === words[2]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Tyrion.jpg";
        x.pause();
        playAudio();
    }
    
    else if (randomWord === words[3]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Ned.jpg";
        x.pause();
        playAudio();
    }
    
    else if (randomWord === words[4]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Littlefinger.jpeg";
        playAudio();
    }
    
    else if (randomWord === words[5]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Ygritte.jpg";
        playAudio();
    }
    
    else if (randomWord === words[6]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Cersei.jpg";
        playAudio();
    }
    else if (randomWord === words[7]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Melisandre.jpg";
        playAudio();
    }
    else if (randomWord === words[8]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Samwell.jpg";
        playAudio();
    }
    else if (randomWord === words[9]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Hodor.jpg";
        playAudio();
    }
    else if (randomWord === words[10]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Tywin.jpg";
        playAudio();
    }
    else if (randomWord === words[11]) {
        console.log("I am here");
        document.getElementById("image").src = "./assets/images/Varys.jpg";
        playAudio();
    }
    
};

// Reset values for each game
function reset() {
    guessesRemaining = 9;
    incorrectGuess = [];
    underScoreCorrect = [];
    Game()
}


function checkLetters(letter) {
    let letterMatch = false;
    for (let i = 0; i < underScores; i++) {
        if (randomWord[i] === letter) {
            letterMatch = true;
        }
    }
    
    if (letterMatch) {
        for (let i = 0; i < underScores; i++) {
            if (randomWord[i] === letter) {
                underScoreCorrect[i] = letter;
            }
        }
    }
    
    else {
        incorrectGuess.push(letter);
        guessesRemaining--;
    }
    console.log(underScoreCorrect);
}

function endGame() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining);
 
    // Win Condition
    if (lettersInWord.toString() == underScoreCorrect.toString()) {
        wins++;
        alert(`Congrats! You've won. Correct guess is ` + randomWord);
        fun();
        reset();
        document.getElementById("win-Tracker").innerHTML = wins;
    }
    // Lose Condition
      else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("loss-Tracker").innerHTML = losses;
    }
    
    document.getElementById("under-Score").innerHTML = underScoreCorrect.join(" ");
    document.getElementById("guesses-Remaining").innerHTML = guessesRemaining;
}



Game();
document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    endGame();
    console.log(guesses);
    document.getElementById("player-Guesses").innerHTML = incorrectGuess.join(" ");
};
// global var
var chosen, da7yChoise, score, win,gameActive;
gameActive = false;
score = 0;
// the click
    $(".game-img").on("click", yourChoise);





function yourChoise() {
  if(!gameActive){
    document.querySelector(".game").id = "game-play";
    document.querySelector("#rock").style.display = "none";
    document.querySelector("#scissors").style.display = "none";
    document.querySelector(".paper p").style.display = "block";
    document.querySelector(".da7y-pick p").style.display = "block";
    document.querySelector('.rules').style.display = 'none';


    chosen = this.id;
    document.querySelector("#paper img").setAttribute("src", "images/icon-" + chosen + ".svg");
    document.querySelector("#paper").setAttribute("class", "game-img border-" + chosen);

    randomChoise()
    setTimeout(rules(), 1000);
    gameActive = true;
  }
}

function randomChoise() {
  var gameArray = ['rock', 'paper', 'scissors'];
  var randomNumb = Math.floor(Math.random() * 3);
  da7yChoise = gameArray[randomNumb];

  document.querySelector("#scissors img").setAttribute("src", "images/icon-" + da7yChoise + ".svg");
  document.querySelector("#scissors").setAttribute("class", "game-img border-" + da7yChoise);

  setTimeout(function() {
    document.querySelector("#scissors").style.display = "block";
  }, 1000)

}

function rules() {
  // paper
  if (chosen == 'paper') {
    if (da7yChoise == 'rock') {
      win = true;
    } else if (da7yChoise == 'paper') {
      win = 'draw';
    } else {
      win = false
    }
    // rock
  } else if (chosen == 'rock') {
    if (da7yChoise == 'scissors') {
      win = true;
    } else if (da7yChoise == 'rock') {
      win = 'draw';
    } else {
      win = false
    }
    // scissors
  } else {
    if (da7yChoise == 'paper') {
      win = true;
    } else if (da7yChoise == 'scissors') {
      win = 'draw';
    } else {
      win = false}
    }

    setTimeout( result ,1500);
  }

  function result() {
    if (win == true) {
      document.querySelector('.your-choise').classList.add('winner-border');
      score++
      document.querySelector('.result').textContent="YOU WIN"
    } else if (win == false) {
      document.querySelector('.waiting-pick').classList.add('winner-border');
      score=0;
      document.querySelector('.result').textContent="YOU LOSE"

    }else{
      document.querySelector('.result').textContent="DRAW"

    }
    document.querySelector('.game-result').style.display ="block"
    // score
    if(score == 10){
      document.querySelector('.theScore').textContent ="win!"

    }else{document.querySelector('.theScore').textContent =score}

  }

  $('.play-again').on('click', playAgain)

function playAgain() {
  // paper
  document.querySelector(".game").id = "";
  document.querySelector("#paper img").setAttribute("src", "images/icon-paper.svg");
  document.querySelector("#paper").setAttribute("class", "game-img border-paper");
  document.querySelector('.your-choise').classList.remove('winner-border');
// scissors
  document.querySelector("#scissors img").setAttribute("src", "images/icon-scissors.svg");
  document.querySelector("#scissors").setAttribute("class", "game-img border-scissors");
  document.querySelector('.waiting-pick').classList.remove('winner-border');
// p
  document.querySelector(".paper p").style.display = "none";
  document.querySelector(".da7y-pick p").style.display = "none";
// rock
  document.querySelector("#rock").style.display = "block";
  // play again
  document.querySelector('.game-result').style.display ="none"

  gameActive= false;
  document.querySelector('.rules').style.display = 'block';

}
$('.rules').on("click", function(){
  document.querySelector('.wraper').style.display ="block"
});
$('.close').on("click", function(){
  document.querySelector('.wraper').style.display ="none"
})

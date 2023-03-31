var rollDiceButton = document.getElementById("rollDice");
var result = document.getElementById("result1");

rollDiceButton.addEventListener("click", function() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var dice3 = Math.floor(Math.random() * 6) + 1;
  var attempts = 1;
  
  while (dice1 != dice2 || dice2 != dice3) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    dice3 = Math.floor(Math.random() * 6) + 1;
    attempts++;
  }
  
  result.innerHTML = "Det tok " + attempts + " forsøk å trille tre " + dice1 + "ere.";
});
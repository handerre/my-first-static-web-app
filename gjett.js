const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", function() {
      const gjett = document.getElementById("gjett").value;
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (gjett == randomNumber) {
        document.getElementById("result").innerHTML = "Riktig!";
      } else {
        document.getElementById("result").innerHTML = "Feil. Nummeret var " + randomNumber;
      }
    });
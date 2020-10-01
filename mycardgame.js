/* When start button is clicked, card game starts */

function startCardGame() {
    // random number 1-14:
    var cardValue = Math.floor((Math.random() * 10) + 1); 
    // random number 0-4 (cards "country"):
    var cardCountryNumber = Math.floor((Math.random() * 4));
    var cardCountry = "C";
    if (cardCountryNumber == 0) {
        cardCountryNumber = "C";
    } else if (cardCountryNumber == 1) {
        cardCountry = "D";
    } else if (cardCountryNumber == 2) {
        cardCountry = "H";
    } else {
        cardCountry = "S";
    }

    var cardName = cardValue + cardCountry;
       
    document.getElementById("cardImage").src="Cards/purple_back.jpg";
    
    /* When the user clicks on the start button, 
    start showing the game guessing area */
    var dots = document.getElementById("stargGuessing");
    var moreText = document.getElementById("showGuessing");

    moreText.style.display = "inline";
    
    document.getElementById("guessInput").focus();

    return cardName;

}

function makeGuessing(count1, cardName) {
    
    var guessInput = document.getElementById("guessInput").value;
    
    var patt = /^([1-9]|1[0-4])$/g;
    var result = patt.test(guessInput);
    
    if (result == true) {
        
        count1 = parseInt(count1);
        var count2 = count1 + 1; 
        
        n = cardName.length; 

        var guessesLeft = 5 - count2;
        
        cardValue = cardName.substring(0, n - 1);
        
        if (guessInput == cardValue) {
            alert("Congratulations! Start a new game ");
            viewCard="Cards/" + cardName + ".jpg";
            
            document.getElementById("cardImage").src=viewCard;
            document.getElementById("guessInput").value="";
            return count2;
        } else {
            if (guessesLeft == 0) {
                alert(`That was your last guess, start a new game!`);
                document.getElementById("guessInput").value="";
                var pageButton = document.getElementById("startCardGameBtn");
                pageButton.click();
                return 0;
            }
            else {
                var guessInputInteger = parseInt(guessInput);
                var cardValueInteger = parseInt(cardValue);
                if (guessInputInteger > cardValueInteger) {
                    alert(`The cards value was smaller than ${guessInput}, take another guess. You have ${guessesLeft} guesses left.  `);
                } else {
                    alert(`The cards value was greater than ${guessInput}, take another guess. You have ${guessesLeft} guesses left.  `);
                }
                
                document.getElementById("guessInput").value="";
                document.getElementById("guessInput").focus();

                return count2;
            }
            
        }
     
    } else {
        alert("That number was out of range or not a number! Take another guess");
        document.getElementById("guessInput").value="";
        document.getElementById("guessInput").focus();
        return count1;
    }
}


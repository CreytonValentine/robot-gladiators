var playerName = window.prompt("what is your robot's name?");
var playerHealth = 70;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 16;
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // IF player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the ammount set in the playerAttack     variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        
            // check enemy's health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
                break;
            }
        
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
        // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
    
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
            );
            // check players health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + "still has " + playerHealth + " health left.");
            } 
            
                    fight();
        }
    }
};

    // function to start a new game
    var startGame = function() {
        // reset player stats
        playerHealth = 70;
        playerAttack = 10;
        playerMoney = 10;

        for (var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
                
                var pickedEnemyName = enemyNames[i];
                
                enemyHealth = 50;
                
                fight(pickedEnemyName);
            }
    
            else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }

        }

        // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
        endGame();
    };

    // function to end the entire game
    var endGame = function() {
        // if player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        }

        else {
            window.alert("You've lost your robot in battle.");
        }

        //ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            // restart the game
            startGame();
        }

        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    };

    // start the game when the page loads
    startGame();

// The only issue with this code is that I could not figure out how to handle the guesses
// Most of the work happens in this file and letter.js
var Word = require("./Word.js");
var inquirer = require('inquirer');
// words to use
var list = ["tyrannosaurus", "stegosaurus", "allosaurus", "troodon", "iguanodon", "minmi"];
var choice = list[Math.floor(Math.random() * list.length)];
// max number of guesses game ends when all guesses are used
// trying to figure out how to use each word with only 15 guesses but i often had errors
var guess = 35;
// makes a new word with variables
var order = new Word(choice, list);
var used = [];
// ask the user for a letter
function ask()
{
    if(guess > 0)
    {
        inquirer.prompt([
            {
                name: 'name',
                message: 'Guess a letter'
            }
        ]).then(function(response)
        {
            if(response.name === "")
            {
                console.log("Please enter a letter");
                
            }
            // if guesses is made then it subtracts from guess.
            order.addUserChoice(response.name);
            for(var i = 0; i<choice.length; i++)
            {

            }
            // this was suppose to add the guess if the text has the same letter as choice
            if(response.name === choice[i])
                {
                    guess++;
                    // console.log("You have " + guess + " guesses left");
                }
                else 
                {
                    guess--;
                    console.log("");
                    console.log("You have " + guess + " guesses left");
                    console.log("");
                }
                // this pushes each guess into an array and ask the user to pick another letter
            if(used.indexOf(response.name) === -1)
            {
                used.push(response.name);
            }
            else
            {
                guess--;
                console.log("");
                // console.log("You have " + guess + " guesses remaining");
                console.log("Please pick another letter");
                console.log("");
            }
            
            ask();
            
            
        })
    }
    // when guess is 0 then the game is over
    if(guess === 0)
    {
        console.log("Game over");
    }
};
ask();

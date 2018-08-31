var Letter = function(word,list)
{
// sets up word 
var choice;
this.word = word;
// console.log(word);
var place = [];
var x;
var y;
var area = word.length;
var used = [];
// set changing the word into undercases and removes any commas
function setup(words)
{
    place = [];
    for(var i = 0; i<words.length; i++)
    {
        place[i] = "_";
        y = place.toString();
        x = y.replace(/,/g,' ');
    }
}
// after the first word then this is used to make a new word
if(choice === undefined)
{

setup(word);
console.log(x)

}

else if(!(choice === undefined))
{
    console.log(choice);
    reset(list);
}
// this function checks the user input 
  this.check = function(text)
  { 
    //   the first word checked
      if(choice === undefined)
      {
        for(var i = 0; i<word.length; i++)
        {
            // after checked then correct is shown and then word is updated with underscore for the remaining letters
            if(text === word[i])
            {
                console.log("Correct");
                place[i] = text
                y = place.toString();
                x = y.replace(/,/g,' '); 
                // area is a length and it is decreased
                area--;
                used.push(text);
                // console.log(area);
            
            }
        } 
        console.log("");
        
    console.log(x);
    }
    // same code but after the first word.
    else if(!(choice === undefined))
    {
        for(var i = 0; i<choice.length; i++)
        {
            if(text === choice[i])
            {
                console.log("");
                console.log("Correct");
                place[i] = text
                y = place.toString();
                x = y.replace(/,/g,' '); 
                area--;
                // console.log(area);
            }
        } 
        // console.log("Correct");
    console.log(x);
    }
//  if every letter is entered for the whole word then the user press enter for the next word.
    if(area === 0)
    {
        console.log("Good job you got it press enter for next word");
        reset(list);
    }
    

  };
// this function resets a new word with area having a new length.
  function reset(list)
  {
    choice = list[Math.floor(Math.random() * list.length)];
    // console.log(choice);
    // console.log(choice.length);
    area = choice.length;
    setup(choice);
  };

};
module.exports = Letter;

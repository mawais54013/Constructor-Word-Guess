// this file uses functions to send info to letter.js
var Letter = require("./Letter.js");
var Word = function(array, list)
{
    // console.log(array);
    topic = new Letter(array, list);
    // calls a function in letter.js
    this.addUserChoice = function(str)
    {
        topic.check(str);
    }
}
module.exports = Word;

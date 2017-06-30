"use strict";

(function(){ module.exports = {
    BasicFlash: BasicFlash
};

function BasicFlash (front, back){
this.front = front;
this.back = back;

this.displayFront = function(){
    console.log("\n------------------\n");
    console.log("Front Text: " + this.front);
    console.log("\n------------------\n");
    };

this.displayBack = function(){
    console.log("\n------------------\n");
    console.log("Back Text: " + this.back);
    console.log("\n------------------\n");
    };

};

var movie1 = new BasicFlash ("The first movie of the Fast and Furious franchise was released in what year?", "2001");
var movie2 = new BasicFlash ("What is the name of the orphaned human boy in The Jungle Book?", "Mowgli");
var movie3 = new BasicFlash ("What is the name of Mickey Mouse´s dog?", "Pluto");

movie1.displayFront();
movie1.displayBack();
movie2.displayFront();
movie2.displayBack();
movie3.displayFront();
movie3.displayBack();

})();
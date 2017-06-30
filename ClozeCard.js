"use strict";
(function(){
    module.exports = {
        ClozeFlash: ClozeFlash
};

function ClozeFlash (fullText, cloze, partial){
this.fullText = fullText;
this.cloze = cloze;
this.partial = partial;

this.showFull = function(){
    console.log("\n------------------\n");
    console.log("Full Text: " + this.fullText);
    console.log("\n------------------\n");
    };

this.showCloze = function(){
    console.log("\n------------------\n");
    console.log("Clozed Text: " + this.cloze);
    console.log("\n------------------\n");
    };

this.showPartial = function(){
    console.log("\n------------------\n");
    console.log("Partial Text: " + this.partial);
    console.log("\n------------------\n");
    };

this.checkCloze = function(){
    var full = this.fullText;
    var check = full.includes(this.cloze);
    
    if(check === true){
        console.log("Good!");
    }else{
        console.log("Cloze text error!");
    };
    
    };

};

var spiderman = new ClozeFlash ("Peter Parker's secret identity is Spider-Man.", "Spider-Man", "Peter Parker's secret identity is...");
var batman = new ClozeFlash ("The Joker is Batman's greatest archenemy.", "The Joker", "...is Batman's greatest archenemy");
var superman = new ClozeFlash ("Superman's one and only weakness is kryptonite.", "kryptonite", "Superman's one and only weakness is...");
var hulk = new ClozeFlash ("The Hulk will destroy you!", "Make you pancakes.");

spiderman.showFull();
batman.showCloze();
superman.showPartial();
hulk.checkCloze();

})();
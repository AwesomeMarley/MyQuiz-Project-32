var canvas, backgroundImage;

var questions;

var val;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("cyan");

  if(answer){
    textSize(100);
    if(val == "Cats are in every way superior to dogs."){
      fill("green");
      text("Correct "+this.input1.value+"!",300,200);
      console.log("correct");
    }else{
      fill("red");
      text("Wrong!"+val,200,300);
      console.log("wrong");
    }

    }

}

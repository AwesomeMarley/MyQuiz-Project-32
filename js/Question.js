class Question {



  constructor() {
    
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter your name");
   //Create a input box to enter the number
   //this.input1 = createInput("").placeHolder();
   this.input2 = createInput("").attribute("placeholder","Enter correct option");

  this.radio = createRadio();

  textAlign(LEFT,CENTER);
  this.radio.size(1000,100);


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.One = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.radio.hide();
    this.button.hide();
    this.input2.hide();

    this.One.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();



  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.One.html("8x + 18 = 40x - 110, find x.");
    this.One.position(300, 100);

    this.option1.html("1) 12");
    this.option2.html("2) 5");
    this.option3.html("3) 4");
    this.option4.html("4) 8");
    this.option1.position(300,120);
    this.option2.position(300,140);
    this.option3.position(300,160);
    this.option4.position(300,180);


    //Create html() and position() for each question, input and answers.



    this.input1.position(250, 250);
    this.input2.position(420, 250);
    this.button.position(380, 300);



    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.hide();
      textSize(60);
      textAlign(CENTER,CENTER);
      if(this.input2.value() == '3' ||this.input2.value() == '3)'){
        fill("green");
        text("Correct "+this.input1.value()+"!",440,200);
        console.log("correct");
      }else{
        fill("red");
        text("Wrong "+this.input1.value()+"!",440,200);
        console.log("wrong");
      }
    })



  }
}

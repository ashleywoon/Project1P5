/*
	Project 1
	by Ashley Woon

	This project will demonstrate the sound and placement of each note on a open guitar string.
	Navigation occurs throught the use of a slider between notes, a mouse click to return to static,
	and the key "P" to play a simple song to increase comprehension of how notes can be used together.
*/

//state machine
var static
var static;
var stateE2 = 1;
var stateA = 2;
var stateD = 3;
var stateG = 4;
var stateB = 5;
var stateE4 = 6;

//coordinate variables
var string1, string2, string3, string4, string5, string6;
var y;

//color variables
var orange, yellow, blue, purple, red, green;

//slider
var slider, sliderHPos, sliderVPos, v, note;
var minValue=0;
var maxValue=6;

function setup() {
	createCanvas(1000,700);
	ellipseMode(CENTER);
  	orange=color(255,127,80);
  	yellow=color(225,225,0);
	blue=color(0,0,255);
	purple=color(218,112,214);
	red=color(255,0,0);
	green=color(0,255,0);
}

function draw() {
	drawSlider();
	drawStatic();
	if(static==stateE2)
		drawE2();
	else if(static==stateA)
	  	drawA();
	else if(static==stateD)
	  	drawD();
	else if(static==stateG)
	  	drawG();
	else if(static==stateB)
	  	drawB();
	else if(static==stateE4)
	  	drawE4();
}

//Creates the basic outline of the guitar and string placement
function drawGuitar() {
	background(130,82,1);
	noStroke();
	fill(255);
	rect(0,0,200,700);
	fill(0);
	ellipse(width/2, height/2,300,300);
	stroke(150);
	strokeWeight(5);
	string1=line(200,245, 1000,245);
	string2=line(200,290, 1000,290);
	string3=line(200,335, 1000,335);
	string4=line(200,380, 1000,380);
	string5=line(200,425, 1000,425);
	string6=line(200,470, 1000,470);
}

function drawStatic() {
	drawGuitar();
	textSize(50);
	text("Welcome to Guitar Intro", width/3,100);
	textSize(25);
	text("Press 'P' to play a song", width/3, 150);
	textSize(50);
	//strings
	text("E",100,260);
	text("A",100,305);
	text("D",100,350);
	text("G",100,395);
	text("B",100,440);
	text("E",100,485);
}

function drawE2() {
	drawGuitar();
	stroke(orange);
	string1=line(200,245, 1000,245);
	text("E",100,250);
}

function drawA() {
	drawGuitar();
	stroke(yellow);
	string2=line(200,290, 1000,290);
	text("A",100,295);
}

function drawD() {
	drawGuitar();
	stroke(blue);
	string3=line(200,335, 1000,335);
	text("D",100,340);
}

function drawG() {
	drawGuitar();
	stroke(purple);
	string4=line(200,380, 1000,380);
	text("G",100,385);
}

function drawB() {
	drawGuitar();
	stroke(red);
	string5=line(200,425, 1000,425);
	text("B",100,430);
}

function drawE4() {
	drawGuitar();
	stroke(green);
	string6=line(200,470, 1000,470);
	text("E",100,475);
}

function drawSlider() {
	fill(0);
	sliderVPos = height-40;
	sliderHPos = width/2;
	slider = createSlider(minValue,maxValue,0);
	slider.position(sliderHPos,sliderVPos);

	v=slider.value();
	note=map(v, minValue, maxValue, 0, .5);
	text(v, 10,10);
	drawSliderLabel();
}

function drawSliderLabel() {
	fill(0);
	if(v==0) {
		text('E', slider.width, slider.y);
		static=stateE2;
	}
	else if(v == 1) {
		text('A', slider.width, slider.y);
		static=stateA;
	}
	else if(v == 2) {
		text('D', slider.width, slider.y);
		static=stateD;
	}
	else if(v == 3) {
		text('G', slider.width, slider.y);
		static=stateG;
	}
	else if(v == 4) {
		text("B", slider.width, slider.y);
		static=stateB;
	}
	else if(v == 5) {
		text("E", slider.width, slider.y);
		static=stateE4;
	}

}
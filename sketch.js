/*
	Project 1
	by Ashley Woon

	This project will demonstrate the sound and placement of each note on a open guitar string.
	Navigation occurs throught the use of a slider between notes, a mouse click to return to static,
	and the key "P" to play a simple song to increase comprehension of how notes can be used together.
*/

//state machine
var static=0;
var stateE2 = 1;
var stateA = 2;
var stateD = 3;
var stateG = 4;
var stateB = 5;
var stateE4 = 6;

var string1, string2, string3, string4, string5, string6;

function setup() {
  createCanvas(800,800);
  ellipseMode(CENTER);
}

function draw() {
  drawGuitar();
}

//Creates the basic outline of the guitar and string placement
function drawGuitar() {
	background(130,82,1);
	fill(0);
	ellipse(widht/2, height/2,60,60);

}

function drawStatic() {

}

function drawE2() {

}

function drawA() {

}

function drawD() {

}

function drawG() {

}

function drawB() {

}

function drawE4() {

}
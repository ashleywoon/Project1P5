/*
	Project 1
	by Ashley Woon

	This project will demonstrate the sound and placement of each note on a open guitar string.
	Navigation occurs throught the use of a slider between notes, a mouse click to return to static,
	and the key "P" to play a simple song to increase comprehension of how notes can be used together.
*/

//state machine
var state;
var static = 0;
var stateE2 = 1;
var stateA = 2;
var stateD = 3;
var stateG = 4;
var stateB = 5;
var stateE4 = 6;

//note variables
var allNotes, e2, a, d, g, b, e4;
//image variables
var img;
var imgList=[];

//coordinate variables
var string1, string2, string3, string4, string5, string6;
var y;

//color variables
var orange, yellow, bl, purple, r, gr;

//slider variables
var slider, sliderHPos, sliderVPos, v, sliderWidth;
var minValue=0;
var maxValue=6;

function preload() {
	//load notes
	allNotes = loadSound('assets/allNotes.mp3');
	e2 = loadSound('assets/E2.mp3');
	a = loadSound('assets/A.mp3');
	d = loadSound('assets/D.mp3');
	g = loadSound('assets/G.mp3');
	b = loadSound('assets/B.mp3');
	e4 = loadSound('assets/E4.mp3');
	//load images
	imgList[0] = loadImage('assets/allNotes.jpg');
	imgList[1] = loadImage('assets/E2.jpg');
	imgList[2] = loadImage('assets/A2.jpg');
	imgList[3] = loadImage('assets/D3.jpg');
	imgList[4] = loadImage('assets/G3.jpg');
	imgList[5] = loadImage('assets/B3.jpg');
	imgList[6] = loadImage('assets/E4.jpg');
}

function setup() {
	createCanvas(1000,700);
	ellipseMode(CENTER);
	//set colors
  	orange = color(255,127,80);
  	yellow = color(225,225,0);
	bl = color(0,0,255);
	purple = color(218,112,214);
	r = color(255,0,0);
	gr = color(0,255,0);

	drawSlider();
}

function draw() {
	drawSliderStates();
	mouseHover();
	if(state==static & key=='p') {
		allNotes.play();
		e2.stop();
		a.stop();
		d.stop();
		g.stop();
		b.stop();
		e4.stop();
	}
	else if(state==stateE2) {
		allNotes.stop();
		e2.play();
		a.stop();
		d.stop();
		g.stop();
		b.stop();
		e4.stop();
	}
	else if(state==stateA) {
		allNotes.stop();
		e2.stop();
		a.play();
		d.stop();
		g.stop();
		b.stop();
		e4.stop();
	}
	else if(state==stateD) {
		allNotes.stop();
		e2.stop();
		a.stop();
		d.play();
		g.stop();
		b.stop();
		e4.stop();
	}
	else if(state==stateG) {
		allNotes.stop();
		e2.stop();
		a.stop();
		d.stop();
		g.play();
		b.stop();
		e4.stop();
	}
	else if(state==stateB) {
		allNotes.stop();
		e2.stop();
		a.stop();
		d.stop();
		g.stop();
		b.play();
		e4.stop();
	}
	else if(state==stateE4) {
		allNotes.stop();
		e2.stop();
		a.stop();
		d.stop();
		g.stop();
		b.stop();
		e4.play();
	}
}

//Creates the basic outline of the guitar and string placement
function drawGuitar() {
	background(130,82,1);
	noStroke();
	fill(140,92,10);
	rect(0,0,200,700);
	stroke(0);
	line(200,0, 200,700)
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
	text("Use your mouse to play each string or", width/3, 150);
	text("Use the slider below", width/2-50, 600);
	textSize(50);
	//strings
	text("E",100,260);
	text("A",100,305);
	text("D",100,350);
	text("G",100,395);
	text("B",100,440);
	text("E",100,485);
	img=imgList[0];
	print(img);
	image(img, 0,10,200,170);
}

function drawE2() {
	drawGuitar();
	stroke(orange);
	string1=line(200,245, 1000,245);
	text("Thickest string on top",350,180);
	text("E",100,250);
	text("E", sliderHPos +slider.width, sliderVPos);
	img=imgList[1];
	print(img);
	image(img, 0,10,200,170);
}

function drawA() {
	drawGuitar();
	stroke(yellow);
	string2=line(200,290, 1000,290);
	text("A",100,295);
	text("A", sliderHPos +slider.width, sliderVPos);
	img=imgList[2];
	print(img);
	image(img, 0,10,200,170);
}

function drawD() {
	drawGuitar();
	stroke(bl);
	string3=line(200,335, 1000,335);
	text("D",100,340);
	text("D", sliderHPos +slider.width, sliderVPos);
	img=imgList[3];
	print(img);
	image(img, 0,10,200,170);
}

function drawG() {
	drawGuitar();
	stroke(purple);
	string4=line(200,380, 1000,380);
	text("G",100,385);
	text("G", sliderHPos +slider.width, sliderVPos);
	img=imgList[4];
	print(img);
	image(img, 0,10,200,170);
}

function drawB() {
	drawGuitar();
	stroke(r);
	string5=line(200,425, 1000,425);
	text("B",100,430);
	text("B", sliderHPos +slider.width, sliderVPos);
	img=imgList[5];
	print(img);
	image(img, 0,10,200,170);
}

function drawE4() {
	drawGuitar();
	stroke(gr);
	string6=line(200,470, 1000,470);
	textSize(25);
	text("Thinest string on the bottom",350,550);
	textSize(50);
	text("E",100,475);
	text("E", sliderHPos +slider.width, sliderVPos);
	img=imgList[6];
	print(img);
	image(img, 0,10,200,170);	
}

function drawSlider() {
	sliderVPos = height-40;
	sliderHPos = width/2;
	slider = createSlider(minValue,maxValue,0);
	slider.position(sliderHPos,sliderVPos);
	sliderWidth=slider.width;
}

function drawSliderStates() {
	v=slider.value();
	if(v==0) {
		state=static;
		drawStatic();
	}
	else if(v==1) {
		state=stateE2;
		drawE2();
	}
	else if(v==2) {
		state=stateA;
		drawA();
	}
	else if(slider.value()==3) {
		state=stateD;
		drawD();
	}
	else if(slider.value()==4) {
		state=stateG;
		drawG();
	}
	else if(slider.value()==5) {
		state=stateB;
		drawB();
	}
	else if(slider.value()==6) {
		state=stateE4;
		drawE4();
	}
}

function mouseHover() {
	if(mouseY<255 & mouseY>234) {
		state=stateE2;
		drawE2();
	}
	else if(mouseY<300 & mouseY>280) {
		state=stateA;
		drawA();
	}
	else if(mouseY<355 & mouseY>325) {
		state=stateD;
		drawD();
	}
	else if(mouseY<390 & mouseY>370) {
		state=stateG;
		drawG();
	}
	else if(mouseY<435 & mouseY>415) {
		state=stateB;
		drawB();
	}
	else if(mouseY<480 & mouseY>460) {
		state=stateE4;
		drawE4();
	}
}

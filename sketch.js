var han;
var result01, result02, result03, resultF;
var letter01, letter02, letter03;
var text1;
var ch=0;
var s="";

function preload() {
  result = loadStrings('r.txt');
  han = loadStrings("han.txt");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // print(ch);
}

function keyTyped() {
  // print(ch);
  result01 = key;
  letter01 = han[0].indexOf(result01);
  if(letter01>=0){
  print(result01); 
  // s = result1;
  
  }
  // letter01 = random(0, 18);
  // letter02 = random(0, 20);
  // letter03 = random(0, 27);

  if (key == '+') {
    ch = ch + 1;
  }
  if (key == '-') {
    ch = ch - 1;
  }

  switch (ch) {

    case 0:
      // result01 = key;
      // letter01 = han[0].indexOf(result01);
      // letter01 = random(0, 18);
      break;

    case 1:
      // result02 = key;
      // letter02 = han[1].indexOf(result02);
      // letter02 = random(0, 20);
      break;

    case 2:
      // result03 = key;
      // letter03 = han[2].indexOf(result03);
      // letter03 = random(0, 27);
      break;
  }

  text1 = 44032 + (588 * letter01) + (28 * letter02) + letter03;

  s = s + char(text1);
  // print(s);
  // }
}
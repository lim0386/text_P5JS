var han;
var result01, result02, result03, resultF;
var letter, letter01, letter02, letter03;
var text1;
var ch = 0;
var s = "";
var input=0;
var origin;
var value;

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
  if (input === 0) { //초성입력 - 중성 입력시 넘어가게 할 듯?
    result01 = key;
    result02 = key;
    letter01 = han[0].indexOf(result01); // 초성 입력
    letter02 = han[1].indexOf(result02); //중성이 시작되는 ㅠㅠ 입력가능

    if (letter01 >= 0) {
      print(key); //초성 출력
    }
    
    if(letter01 < 0 && letter02 >= 0){
     input = 1; //중성입력기로 가기
     print("Let's Go to 2");
    }
  }
  
  if (input === 1) { //중성입력기
    result02 = key;
    letter02 = han[1].indexOf(result02); //만약에 키가 자음이면 걍 자음

    if (letter02 >= 0) {
      print(result02);
      if(result02 == 'ㅗ' || result02 == 'ㅜ' || result02 == 'ㅡ'){ //
        print("fff");
      }else {
        print("ttt");
      }
    }

  }

  if (input === 2) {
    result03 = key;
    letter03 = han[1].indexOf(result03);
    if (letter03 >= 0) {
      print(result03);
      
    }
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
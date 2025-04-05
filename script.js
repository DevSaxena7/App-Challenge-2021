//for setup
let bG = "beige";
let screen = "start";
let cW, cH;
let yOff = 93.60374415;
let game;
let grade;
let img;
let wallpaperPng;
const wallImages = [
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
  [randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8), randomInt(0, 8)],
];

let started = false;

//for maze game
let mazeChoices;
let charX = 1/2;
let shouldFlip;
let yDown = 1/3;
let speed = 1/1000;
let streak = 0;
let gameOver = false;

//for hurdle game
let charY = 2/3;
let upSpeed = 0;
let hurdleX = 1;
let hurdleChoices;
let answered = false;
let status = "";

//for target game
let targetChoices;
let targetSpeed = [0, 0, 0, 0];
let targetX = [0, 1, 0, 1];
let confirmPresence = false;
let confirmText = "";
let confirmCoord = [0, 0];
let confirmColor = "black";

//all the q&a arrs
let mathArr = [
  ["What is 7 * 8?", "64", "74", "48", "56"],
  ["What is 3 * 19?", "47", "49", "51", "57"],
  ["What is 35 ÷ 7?", "7", "12", "6", "5"],
  ["What is 56+39?", "98", "105", "93", "95"],
  ["What is 5 * 47?", "230", "225", "227", "235"],
  ["What is 36+68?", "94", "102", "104", ""],
  ["What is 111 ÷ 37?", "4", "5", "3"],
  ["What is 17*4?", "38", "62", "64", "68"]
];

let englishArr = [
  ["Which sentence is correct?", "John, who was in the football team.", "mary ran a mile.", "Yes.", "Eric sat down."]
];

let scienceArr = [
  ["What molecules is water made of?", "Two oxygen and one hydrogen.", "One oxygen, one carbon, and one hydrogen.", "One hydrogen.", "Two hydrogen and one oxygen."]
];

let historyArr = [
  ["What year was the decleration of independence written?", "1865", "1492", "1976", "1776"]
];

let gkArr = [
  ["Which is the longest river?", "Yellow\nRiver", "Amazon", "Colorado\nRiver", "Nile"],
  ["What is the capital of the United Kingdom?", "Cambridge", "Manchester", "Birmingham", "London"],
  ["How many states are there in the United States?", "13", "1", "3", "50"],
  ["Which is the largest river?", "Yellow\nRiver", "Nile", "Colorado\nRiver", "Amazon"],
  ["Which is the coldest planet?", "Neptune", "Venus", "Pluto", "Uranus"], 
  ["Which is the hottest planet?", "Mercury", "Earth", "Jupiter", "Venus"],
  ["Who was the first president?", "Abraham\nLincoln", "Elvis\nPresley", "Thomas\nJefferson", "George\nWashington"],
  ["Who created the formula e=mc²?", "Mariah\nCarey", "Marie\nCurie", "Isaac\nNewton", "Albert\nEinstein"],
  ["What material is the Statue of Liberty made of?", "Greenstone", "Clay", "Marble", "Copper"]
];


subject = "";
questionArr = [];
answerArr = [[]];
currentProb = 0;
function makeObj(arr, name) {
  subject = name;
  for(let i = 0; i < arr.length; i++) {
    questionArr[i] = arr[i][0];
    answerArr[i] = [arr[i][1], arr[i][2], arr[i][3], arr[i][4]];
  }
  currentProb = 0;
}

function nextProblem() {
  if(currentProb >= answerArr.length-1) {
    currentProb = 0;
    return false;
  }
  currentProb++;
  return true;
}

function prob() {
  return questionArr[currentProb];
}

function fourChoices() {
  return shuffle(answerArr[currentProb]);
}

function threeChoices() {
  var randomOne = randomInt(0, 3);
  var randomTwo = randomInt(0, 3);
  while(randomTwo == randomOne) {
    randomTwo = randomInt(0, 2);
  }
  return shuffle([answerArr[currentProb][3], answerArr[currentProb][randomOne], answerArr[currentProb][randomTwo]]);
}

function twoChoices() {
  return shuffle([answerArr[currentProb][3], answerArr[currentProb][randomInt(0, 3)]]);
}

function answer() {
  return answerArr[currentProb][3];
}

function ansIndex(options) {
  for(var i = 0; i < options.length; i++) {
    if(options[i] == answer()) {
      return i;
    }
  }
}


let myFont;
function preload() {
  myFont = loadFont('ArchitectsDaughter-Regular.ttf');
  bumping = loadImage('frames/bumping.png');
  falling = loadImage('frames/falling.png');
  jumping_1 = loadImage('frames/jumping_1.png');
  jumping_2 = loadImage('frames/jumping_2.png');
  jumping_3 = loadImage('frames/jumping_3.png');
  running_1 = loadImage('frames/running_1.png');
  running_2 = loadImage('frames/running_2.png');
  running_3 = loadImage('frames/running_3.png');
  running_4 = loadImage('frames/running_4.png');
  running_5 = loadImage('frames/running_5.png');
  running_6 = loadImage('frames/running_6.png');
  sliding = [loadImage('frames/sliding.png')];
  standing_1 = loadImage('frames/standing_1.png');
  standing_2 = loadImage('frames/standing_2.png');
  standing_3 = loadImage('frames/standing_3.png');
  standing_4 = loadImage('frames/standing_4.png');

  hurdle_left = loadImage('hurdle_parts/Hurdle_left_leg.png');
  hurdle_right = loadImage('hurdle_parts/Hurdle_right_leg.png');
  hurdle_top = loadImage('hurdle_parts/Hurdle_top.png');

  running = [running_1, running_2, running_3, running_4, running_5, running_6];
  running = cycleArr(running, 3);

  jumping = [jumping_1, jumping_2, jumping_3];
  
  standing = [standing_1, standing_2, standing_3];
  standing = cycleArr(standing, 4);
  standing = cycleEntire(standing, 3);
  standing.push(standing_4);
  standing.push(standing_4);


  beaker = loadImage('wallpaper/beaker.png');
  book = loadImage('wallpaper/book.png');
  brain = loadImage('wallpaper/brain.png');
  globe = loadImage('wallpaper/globe.png');
  letters = loadImage('wallpaper/letters.png');
  math = loadImage('wallpaper/math.png');
  pencil = loadImage('wallpaper/pencil.png');
  eraser = loadImage('wallpaper/eraser.png');
  wallpaperPng = [beaker, book, brain, globe, letters, math, pencil, eraser];

  logo = loadImage('AppChallengeWallpaper.png');
}

function setup() {
  cW = windowWidth;
  cH = windowHeight-1;
  createCanvas(cW, cH);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  
  currentFrame = 0;
  nextFrame = 0;
  currentPos = running;

  for(var i = 0; i < wallpaperPng.length; i++) {
    wallpaperPng[i].resize(40, 0);
  }

  for(var i = 0; i < running.length; i++) {
    switch(running[i].length) {
      case cW/18:
        break;
      default:
        running[i].resize(0, cW/9.4);
    }
  }

  for(var i = 0; i < jumping.length; i++) {
    switch(jumping[i].length) {
      case cW/18:
        break;
      default:
        jumping[i].resize(0, cW/9.4);
    }
  }

  for(var i = 0; i < standing.length; i++) {
    switch(standing[i].length) {
      case cW/18:
        break;
      default:
        standing[i].resize(0, cW/9.4);
    }
  }
  
  logo.resize(cW/7, 0);

  hurdle_left.resize(cW/2.5, 0);
  hurdle_right.resize(cW/2.5, 0);
  hurdle_top.resize(cW/2.5, 0);
}

function draw() {
  if(!gameOver) {
    clear();
    background(bG);
    doMod();
    img = currentPos[currentFrame];

    switch(screen) {
      case "start":
        drawWallpaper();
        fill("#4bd662");
        if(mouseOnRect(1/2, 1/2, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/2, 1/2, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        textS(1/32.05);
        fill("Black");
        textPos("Start", 1/2, 1/2);
        break;
      case "grade":
        drawWallpaper();
        textS(1/32.05);
        textPos("Choose a grade level", 1/2, 1/11);

        fill("#4e55de");
        if(mouseOnRect(1/3, 3/10, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/3, 3/10, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#dbe04a");
        if(mouseOnRect(1/3, 11/20, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/3, 11/20, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#37de61");
        if(mouseOnRect(1/3, 4/5, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/3, 4/5, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#e6a73c");
        if(mouseOnRect(2/3, 3/10, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(2/3, 3/10, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#e374df");
        if(mouseOnRect(2/3, 11/20, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(2/3, 11/20, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#d92121");
        if(mouseOnRect(2/3, 4/5, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(2/3, 4/5, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill(0, 0, 0);
        textS(1/42);
        textPos("Kindergarten", 1/3, 3/10);
        textPos("1st Grade", 1/3, 11/20);
        textPos("2nd Grade", 1/3, 4/5);
        textPos("3rd Grade", 2/3, 3/10);
        textPos("4th Grade", 2/3, 11/20);
        textPos("5th Grade", 2/3, 4/5);
        break;
      case "subject":
        drawWallpaper();
        textS(1/32.05);
        textPos("Choose a subject", 1/2, 1/11);

        fill("#4e55de");
        if(mouseOnRect(1/4, 1/4, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/4, 1/4, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#dbe04a");
        if(mouseOnRect(3/4, 1/4, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(3/4, 1/4, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#37de61");
        if(mouseOnRect(1/4, 3/4, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/4, 3/4, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#e6a73c");
        if(mouseOnRect(3/4, 3/4, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(3/4, 3/4, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#e374df");
        if(mouseOnRect(1/2, 1/2, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/2, 1/2, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill(0, 0, 0);
        textS(1/42);
        textPos("Math", 1/4, 1/4);
        textPos("English", 3/4, 1/4);
        textPos("Science", 1/4, 3/4);
        textPos("Social\nStudies", 3/4, 3/4);
        textPos("General\nKnowledge", 1/2, 1/2);
        break;
      case "chooseGame":
        drawWallpaper();
        textS(1/32.05);
        textPos("Choose a game", 1/2, 1/11);
        
        fill("#dbe04a");
        if(mouseOnRect(1/4, 1/2, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/4, 1/2, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);
        
        fill("#e6a73c");
        if(mouseOnRect(1/2, 1/2, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(1/2, 1/2, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        fill("#37de61");
        if(mouseOnRect(3/4, 1/2, 1/6.4, 1/6.09)) {
          fill("white");
        }
        rectPos(3/4, 1/2, 1/6.4, 1/6.09, 1/36.63, 1/36.63, 1/36.63, 1/36.63);

        textS(1/42);
        fill("#877d7c");
        textN("?", cW/4-cW/16.585, cH/2-cH/25.375);
        textN("?", cW/2-cW/16.585, cH/2-cH/25.375);
        textN("?", cW*3/4-cW/16.585, cH/2-cH/25.375);

        fill("black");
        textPos("Maze\nRunner", 1/4, 1/2);
        textPos("Hurdle\nJumper", 1/2, 1/2);
        textPos("Target\nShooter", 3/4, 1/2);

        if(mouseOnRectPos(cW/4-cW/14.73, cH/2-cH/14.7, cW/66.135, cH/23.82)) {
          fill("lightgray");
          rect(mouseX-cW/8.65, mouseY-cH/8.025, cW/8.65, cH/8.025);
          fill("black");
          textS(1/106.58);
          textN("Answer multiple choice\nquestions to navigate\nthrough a maze. If you\nget one wrong, the\ngame ends.", mouseX-cW/17.3, mouseY-cH/30);
        } else if (mouseOnRectPos(cW/2-cW/14.73, cH/2-cH/14.7, cW/66.135, cH/23.82)) {
          fill("lightgray");
          rect(mouseX-cW/8.65, mouseY-cH/8.025, cW/8.65, cH/8.025);
          fill("black");
          textS(1/106.58);
          textN("Jump over hurdles by\nsolving problems. If you\nget one wrong, your\nspeed drops. Try to get\nthe highest score!", mouseX-cW/17.3, mouseY-cH/30);
        } else if (mouseOnRectPos(cW*3/4-cW/14.73, cH/2-cH/14.7, cW/66.135, cH/23.82)) {
          fill("lightgray");
          rect(mouseX-cW/8.65, mouseY-cH/8.025, cW/8.65, cH/8.025);
          fill("black");
          textS(1/106.58);
          textN("Shoot down targets that\nhave the right answer. If\nyou are wrong, your\npoints drop. You have 60\nseconds to collect points.", mouseX-cW/17.3, mouseY-cH/30);
        }
        break;
      case "maze":
        bG = "#826f58";
        push();
        fill("#dea773");
        noStroke();
        rectPosBy("bottom left", 0, yDown, 1/10, 1);
        rectPosBy("bottom left", 3/10, yDown, 1/10, 1);
        rectPosBy("bottom left", 6/10, yDown, 1/10, 1);
        rectPosBy("bottom left", 9/10, yDown, 1/10, 1);
        rectPosBy("bottom middle", 1/2, yDown-1, 1, 1/25);
        rectPos(1/300, 1/2, 1/150, 1, 0, 0, 0, 0);
        rectPos(299/300, 1/2, 1/150, 1, 0, 0, 0, 0);
        pop();

        if(started) {
          fill("white");
          textS(1/30);
          textPos(prob(), 1/2, yDown+1/4);
          for(var i = 0; i < 3; i++) {
            textPos(mazeChoices[i], (6*i+4)/20, yDown);
          }
          textS(1/30);
          textPos(""+streak, 1/20, 1/20);

          push();
          noStroke();
          fill("#826f58");
          rectPosBy("bottom middle", (ansIndex(mazeChoices)*6+4)/20, yDown-1, 1/5, 1/25);
          pop();

          if(keyIsDown(LEFT_ARROW) && ((charX-((img.width*3)/(cW*2)) > 1/10 && charX < 7/20) || (charX-((img.width*3)/(cW*2)) > 2/5 && charX < 13/20) || (charX-((img.width*3)/(cW*2)) > 7/10 && charX < 19/20) || (yDown < 3/4))) {
            currentPos = running;
            doMod();
            imagePos(img, charX, 3/4, true);
            shouldFlip = true;
            charX-=1/250;
            advance(50);
          } else if(keyIsDown(RIGHT_ARROW) && ((charX+((img.width)/(cW*2)) < 3/10 && charX > 1/20) || (charX+((img.width)/(cW*2)) < 3/5 && charX > 7/20) || (charX+((img.width)/(cW*2)) < 9/10 && charX > 13/20) || (yDown < 3/4))) {
            currentPos = running;
            doMod();
            imagePos(img, charX, 3/4, false);
            shouldFlip = false;
            charX+=1/250;
            advance(50);
          } else {
            currentPos = standing;
            doMod();
            imagePos(img, charX, 3/4, shouldFlip);
            advance(50);
          }

          
          if(keyIsDown(UP_ARROW)) {
            yDown+=1/250;
          }

          yDown+=speed;
          if(yDown >= 3/4) {
            yDown+=(speed*4);
          }

          gameOver = (yDown-24/25+img.height/(2*cW) > 3/4 && !(charX > (1+(6*ansIndex(mazeChoices)))/20 && charX < (7+(6*ansIndex(mazeChoices)))/20));

          if(yDown >= 2) {
            yDown = 1/1000;
            nextProblem();
            mazeChoices = shuffle(threeChoices());
            if(speed < 1/200) {
              speed+=1/1000;
            }
            streak++;
          }
        } else {
          imagePos(img, charX, 3/4, false);
          fill(255);
          textPos("CLICK ANYWHERE TO START", 1/2, 1/2);
        }

        break;
      case "hurdle":
        bG = "lightblue";
        fill("green");
        rectPos(1/2, 5/6, 1, 1/3, 0, 0, 0, 0);
        if(started) {
          fill("white");
          textS(1/50);
          if(status == "Wrong!") {
            fill("red");
          } else if(status == "Correct!") {
            fill("green");
          }
          textPos(status+"\nCurrent Speed: "+speed*250, 1/5, charY-1/5);
          fill("white");
          textS(1/30);
          textPos(streak, 11/12, 11/12);
          textPos(prob(), 1/2, 1/10);
          textPos(hurdleChoices[0], hurdleX-(1/6), 5/12);
          textPos(hurdleChoices[1], hurdleX-(1/6), 5/6);
          imagePos(hurdle_left, hurdleX, 17/24, false);
          imagePos(img, 1/5, charY, false);
          imagePos(hurdle_right, hurdleX, 17/24, false);
          imagePos(hurdle_top, hurdleX, 17/24, false);
          advance(50);
          doMod();

          hurdleX-=speed;
          if(hurdleX < 0) {
            hurdleX = 1;
            nextProblem();
            hurdleChoices = twoChoices();
            answered = false;
          } else if(hurdleX <= 1/5 && !answered) {
            if((charY < 5/8 && ansIndex(hurdleChoices) == 0) || (currentPos == sliding && ansIndex(hurdleChoices) == 1)) {
              streak++;
              if(speed < 0.008) {
                speed+=1/1000;
              }
              status = "Correct!";
            } else {
              speed = 1/250;
              status = "Wrong!";
            }
            answered = true;
          }

          charY-=upSpeed;
          if(charY < 2/3) {
            upSpeed-=1/2000;
          } else {
            upSpeed = 0;
            charY = 2/3;
            if(currentPos != sliding) {
              currentPos = running;
            }
          }

          if(upSpeed > 0) {
            currentPos = jumping;
            currentFrame = 0;
            nextFrame = 0;
          } else if(upSpeed < 0) {
            currentPos = jumping;
            currentFrame = 1;
            nextFrame = 1;
          }
        } else {
          imagePos(img, 1/5, 2/3, false);
          fill("white");
          textPos("CLICK ANYWHERE TO START", 1/2, 1/2);
        }
        break;
      case "target":
        fill("#b3946f");
        rectPos(1/2, 3/30, 1, 3/15, 0, 0, 0, 0);
        rectPos(1/2, 11/30, 1, 1/15, 0, 0, 0, 0);
        rectPos(1/2, 17/30, 1, 1/15, 0, 0, 0, 0);
        rectPos(1/2, 23/30, 1, 1/15, 0, 0, 0, 0);
        rectPos(1/2, 29/30, 1, 1/15, 0, 0, 0, 0);

        fill("#dea773");
        rectPos(1/2, 4/15, 1, 2/15, 0, 0, 0, 0);
        rectPos(1/2, 7/15, 1, 2/15, 0, 0, 0, 0);
        rectPos(1/2, 10/15, 1, 2/15, 0, 0, 0, 0);
        rectPos(1/2, 13/15, 1, 2/15, 0, 0, 0, 0);

        drawTarget(targetX[0], 4/15, 2/15);
        drawTarget(targetX[1], 7/15, 2/15);
        drawTarget(targetX[2], 10/15, 2/15);
        drawTarget(targetX[3], 13/15, 2/15);
        
        if(started) {          
          targetX[0]+=targetSpeed[0];
          targetX[1]-=targetSpeed[1];
          targetX[2]+=targetSpeed[2];
          targetX[3]-=targetSpeed[3];

          push();
          fill("#dea773");
          noStroke();
          rectPos(targetX[0], 4/15, 1/5, 1/15, 0, 0, 0, 0);
          rectPos(targetX[1], 7/15, 1/5, 1/15, 0, 0, 0, 0);
          rectPos(targetX[2], 10/15, 1/5, 1/15, 0, 0, 0, 0);
          rectPos(targetX[3], 13/15, 1/5, 1/15, 0, 0, 0, 0);
          pop();
          
          fill("white");
          textS(1/30);
          textPos(prob(), 1/2, 1/10);

          textS(1/50);
          textPos("Score: "+streak, 1/20, 1/20);
          
          push();
          fill("black");
          textS(1/75);
          textPos(targetChoices[0], targetX[0], 4/15-cH/75000, 0, 1);
          textPos(targetChoices[1], targetX[1], 7/15-cH/75000, 0, 1);
          textPos(targetChoices[2], targetX[2], 10/15-cH/75000, 0, 1);
          textPos(targetChoices[3], targetX[3], 13/15-cH/75000, 0, 1);

          if(confirmPresence) {
            textS(1/30);
            fill(confirmColor);
            text(confirmText, confirmCoord[0], confirmCoord[1]);
          }
          pop();

          line(mouseX-cH/150, mouseY, mouseX - 5*(cH/150), mouseY);
          line(mouseX+cH/150, mouseY, mouseX + 5*(cH/150), mouseY);
          line(mouseX, mouseY-cH/150, mouseX, mouseY - 5*(cH/150));
          line(mouseX, mouseY+cH/150, mouseX, mouseY + 5*(cH/150));
          
          line(pmouseX - 5*(cH/150), pmouseY, mouseX - 5*(cH/150), mouseY);
          line(pmouseX + 5*(cH/150), pmouseY, mouseX + 5*(cH/150), mouseY);
          line(pmouseX, pmouseY - 5*(cH/150), mouseX, mouseY - 5*(cH/150));
          line(pmouseX, pmouseY + 5*(cH/150), mouseX, mouseY + 5*(cH/150));

          if(targetX[0] > 1 && targetX[1] < 0 && targetX[2] > 1 && targetX[3] < 0) {
            setTargetSpeeds();
            resetTargetX();
            streak-=2;
            streak = Math.max(0, streak);
            nextProblem();
            targetChoices = fourChoices();
          }
        } else {
          fill("white");
          textPos("CLICK ANYWHERE TO START", 1/2, 1/2);
        }
        break;
      default:
        drawWallpaper();
        textPos("Theres been an error :(\nTry reloading the page", 1/2, 1/2);
        break;
    }
  } else {
    textS(1/30);
    fill("white");
    textPos("Game Over!\nScore: "+streak, 1/2, 1/2);
  }
}

function mouseClicked() {
  switch(screen) {
    case "start":
      if(mouseOnRect(1/2, 1/2, 1/6.4, 1/6.09)) {
        setTimeout(function () {
          screen = "grade";
        }, 200);
      }
      break;
    case "grade":
      if(mouseOnRect(1/3, 3/10, 1/6.4, 1/6.09)) {
        grade = 0;
        setTimeout(function () {
          screen = "subject";
        }, 200)
      } else if(mouseOnRect(1/3, 11/20, 1/6.4, 1/6.09)) {
        grade = 1;
        setTimeout(function () {
          screen = "subject";
        }, 200)
      } else if(mouseOnRect(1/3, 4/5, 1/6.4, 1/6.09)) {
        grade = 2;
        setTimeout(function () {
          screen = "subject";
        }, 200)
      } else if(mouseOnRect(2/3, 3/10, 1/6.4, 1/6.09)) {
        grade = 3;
        setTimeout(function () {
          screen = "subject";
        }, 200)
      } else if(mouseOnRect(2/3, 11/20, 1/6.4, 1/6.09)) {
        grade = 4;
        setTimeout(function () {
          screen = "subject";
        }, 200)
      } else if(mouseOnRect(2/3, 4/5, 1/6.4, 1/6.09)) {
        grade = 5;
        setTimeout(function () {
          screen = "subject";
        }, 200)
      }
      break;
    case "subject":
      if(mouseOnRect(1/4, 1/4, 1/6.4, 1/6.09)) {
        makeObj(shuffle(mathArr), "Math");
        mazeChoices = threeChoices();
        hurdleChoices = twoChoices();
        targetChoices = fourChoices();
        setTimeout(function () {
          screen = "chooseGame";
        }, 200);
      } else if(mouseOnRect(3/4, 1/4, 1/6.4, 1/6.09)) {
        makeObj(shuffle(englishArr), "English");
        mazeChoices = threeChoices();
        hurdleChoices = twoChoices();
        targetChoices = fourChoices();
        setTimeout(function () {
          screen = "chooseGame";
        }, 200);
      } else if(mouseOnRect(1/4, 3/4, 1/6.4, 1/6.09)) {
        makeObj(shuffle(scienceArr), "Science");
        mazeChoices = threeChoices();
        hurdleChoices = twoChoices();
        targetChoices = fourChoices();
        setTimeout(function () {
          screen = "chooseGame";
        }, 200);
      } else if(mouseOnRect(3/4, 3/4, 1/6.4, 1/6.09)) {
        makeObj(shuffle(historyArr), "History");
        mazeChoices = threeChoices();
        hurdleChoices = twoChoices();
        targetChoices = fourChoices();
        setTimeout(function () {
          screen = "chooseGame";
        }, 200);
      } else if(mouseOnRect(1/2, 1/2, 1/6.4, 1/6.09)) {
        makeObj(shuffle(gkArr), "General Knowledge");
        mazeChoices = threeChoices();
        hurdleChoices = twoChoices();
        targetChoices = fourChoices();
        setTimeout(function () {
          screen = "chooseGame";
        }, 200);
      }
      break;
    case "chooseGame":
      if(mouseOnRect(1/4, 1/2, 1/6.4, 1/6.09)) {
        setTimeout(function () {
          screen = "maze";
          speed = 1/1000;
        }, 200);
      }
      if(mouseOnRect(1/2, 1/2, 1/6.4, 1/6.09)) {
        setTimeout(function () {
          screen = "hurdle";
          speed = 1/250;
        }, 200);
      }
      if(mouseOnRect(3/4, 1/2, 1/6.4, 1/6.09)) {
        setTimeout(function () {
          screen = "target";
        }, 200);
      }
      break;
    case "maze":
      started = true;
      if(gameOver) {
        screen = "start";
        mazeChoices = null;
        charX = 1/2;
        shouldFlip = false;
        yDown = 1/3;
        speed = 1/1000;
        streak = 0;
        started = false;
        strokeWeight(1);
        bG = "beige";
        gameOver = false;
      }
      break;
    case "hurdle":
      if(gameOver) {
        screen = "start";
        hurdleChoices = null;
        charY = 2/3;
        upSpeed = 0;
        speed = 0;
        streak = 0;
        hurdleX = 1;
        answered = false;
        started = false;
        strokeWeight(1);
        bG = "beige";
        gameOver = false;
      } else {
        started = true;
        
        setTimeout(function() {
          background("lightblue");
          fill("green");
          rectPos(1/2, 5/6, 1, 1/3, 0, 0, 0, 0);
          fill("white");
          // img = bumping;
          textS(1/30);
          textPos(streak, 11/12, 11/12);
          textPos(prob(), 1/2, 1/10);
          textPos(hurdleChoices[0], hurdleX-(1/6), 5/12);
          textPos(hurdleChoices[1], hurdleX-(1/6), 5/6);
          imagePos(hurdle_left, hurdleX, 17/24, false);
          imagePos(img, 1/5, charY, false);
          imagePos(hurdle_right, hurdleX, 17/24, false);
          imagePos(hurdle_top, hurdleX, 17/24, false);
          gameOver = true;
        }, 20000);
      }
      break;
    case "target":
      if(gameOver) {
        screen = "start";
        targetChoces = null;
        targetX = [0, 1, 0, 1];
        targetSpeed = [0, 0, 0, 0];
        streak = 0;
        started = false;
        strokeWeight(1);
        bG = "beige";
        gameOver = false;
        confirmPresence = false;
        confirmText = "";
        confirmCoord = [0, 0];
        confirmColor = "black";
      } else if(!started) {
        started = true;
        setTargetSpeeds();
        setTimeout(function() {
          gameOver = true;
        }, 20000);
      } else {
        for(let i = 0; i < 4; i++) {
          if(mouseOnEllipse(targetX[i], ((i*3)+4)/15, 1/15)) {
            if(i == ansIndex(targetChoices)) {
              streak++;
              confirmText = "+1";
              confirmColor = "green";
            } else {
              streak-=2;
              streak = Math.max(0, streak);
              confirmText = "-2";
              confirmColor = "red";
            }
            setTargetSpeeds();
            resetTargetX();
            nextProblem();
            targetChoices = fourChoices();
            confirmCoord = [mouseX, mouseY];
            confirmPresence = true;
            setTimeout(function() {
              confirmPresence = false;
            }, 2000);
            break;
          }
        }
        
      }
      break;
  }
}

function keyPressed() {
  switch(screen) {
    case "hurdle":
      if(keyCode == 38 && charY >= 2/3 && currentPos != sliding) {
        upSpeed = 1/50;
      } else if(keyCode == 40 && charY >= 2/3 && currentPos != sliding) {
        currentPos = sliding;
        currentFrame = 0;
        nextFrame = 0;
        setTimeout(function() {
          currentPos = running;
          currentFrame = 0;
          nextFrame = 0;
        }, 1500);
      }
  }
}

function inBetween(value, min, max) {
  return value>=min && value<=max;
}

function mouseOnRect(xPortion, yPortion, wPortion, hPortion) {
  let w = cW*wPortion;
  let h = cH*hPortion
  return inBetween(mouseX, cW*xPortion-w/2, cW*xPortion+w/2) && inBetween(mouseY, cH*yPortion-h/2, cH*yPortion+h/2);
}

function mouseOnRectPos(x, y, w, h) {
  return inBetween(mouseX, x, x+w) && inBetween(mouseY, y, y+h);
}

function mouseOnEllipse(xPortion, yPortion, radius) {
  return distance(mouseX, mouseY, cW*xPortion, cH*yPortion) <= (radius*cH);
}

function mouseOnEllipsePos(x, y, radius) {
  return distance(mouseX, mouseY, x, y) <= radius;
}

function rectPos(xPortion, yPortion, wPortion, hPortion, tl, tr, br, bl) {
  return rect(cW*xPortion-cW*wPortion/2, cH*yPortion-cH*hPortion/2, cW*wPortion, cH*hPortion, cW*tl, cW*tr, cW*br, cW*bl);
}

function textPos(textValue, xPortion, yPortion, wrapPortion, ignoreYOff) {
  if(wrapPortion) {
    return text(textValue, cW*xPortion, cH*yPortion-cH/yOff, cW*wrapPortion);
  } else {
    if(ignoreYOff == 1) {
      return text(textValue, cW*xPortion, cH*yPortion);
    } else {
      return text(textValue, cW*xPortion, cH*yPortion-cH/yOff);
    }
  }
}

function shuffle(arr) {
  let tempArr = arr;
  let returnArr;

  while(tempArr.length != 0) {
    returnArr.push(tempArr.splice(Math.floor(randomInt(0, tempArr.length)), 1)[0]);
  }

  return returnArr;
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1-x2)**2+(y1-y2)**2);
}

function cycleArr(originalArr, multiplier) {
  let returnArr = [];
  for(let i = 0; i < originalArr.length; i++) {
    for(let a = 0; a < multiplier; a++) {
      returnArr.push(originalArr[i]);
    }
  }
  return returnArr;
}

function cycleEntire(originalArr, multiplier) {
  let returnArr = [];
  for(let i = 0; i < multiplier; i++) {
    for(a = 0; a < originalArr.length; a++) {
      returnArr.push(originalArr[a]);
    }
  }
  return returnArr;
}

function textN(string, x, y, wrap) {
  return text(string, x, y-cH/yOff, wrap);
}

function textS(numero) {
  textSize(cW*numero);
  yOff = 3000*numero;
}

function imagePos(img, xPos, yPos, flip) {
  if(flip) {
    push();
    scale(-1, 1);
    return image(img, -(cW*xPos-(img.width/2)), cH*yPos-(img.height/2));
    pop();
  } else {
    return image(img, cW*xPos-(img.width/2), cH*yPos-(img.height/2));
  }
}

function advance(time) {
  if(nextFrame==currentFrame && currentPos != sliding && currentPos != jumping) {
    nextFrame = (nextFrame+1) % currentPos.length;
    setTimeout(function() {
      currentFrame = (currentFrame+1) % currentPos.length;
      img = currentPos[currentFrame];
    }, time);
  }
}

function rectPosBy(location, xPortion, yPortion, wPortion, hPortion, tl, tr, bl, br) {
  const x = xPortion*cW;
  const y = yPortion*cH;
  const w = wPortion*cW;
  const h = hPortion*cH;

  switch(location) {
    case "top left":
      return rect(x, y, w, h, tl, tr, bl, br);
    case "top right":
      return rect(x-w, y, w, h, tl, tr, bl, br);
    case "bottom left":
      return rect(x, y-h, w, h, tl, tr, bl, br);
    case "bottom right":
      return rect(x-w, y-h, w, h, tl, tr, bl, br);
    case "top middle":
      return rect(x-w/2, y, w, h, tl, tr, bl, br);
    case "bottom middle":
      return rect(x-w/2, y-h, w, h, tl, tr, bl, br);
  }
}

function doMod() {
  currentFrame = currentFrame % currentPos.length;
  if(nextFrame != currentFrame) {
    nextFrame = currentFrame+1;
  }
  nextFrame = nextFrame % currentPos.length;
}

function rectContains(xPortion, yPortion, width, height, xBound, yBound, widthBound, heightBound) {
  return (xPortion*cW-width/2 > xBound*cW-widthBound*cW/2) && (xPortion*cW+width/2 < xBound*cW+widthBound*cW/2) && (yPortion*cH-height/2 > yBound*cH-heightBound*cH/2) && (yPortion*cH+height/2 > yBound*cH+heightBound*cH/2);
}

function xBetween(xPortion, width, xBound, widthPortion) {
  return (xPortion*cW-width/2 >= xBound*cW-widthPortion*cW/2) && (xPortion*cW+width/2 <= xBound*cW+widthPortion*cW/2)
}

function drawWallpaper() {
  for(i = 0; i < cW; i+=64) {
    for(j = 0; j < cH; j+=64) {
      imagePos(wallpaperPng[wallImages[i/64][j/64]], (i+32)/cW, (j+32)/cH);
    }
  }
  push();
  fill("beige");
  noStroke();
  rect((cW*11)/14, (cH*5)/7, cW*2/7, cH*2/7);
  pop();
  imagePos(logo, 9/10, 9/10);
}

function randomInt(inclusiveMin, exclusiveMax) {
  return Math.floor(Math.random()*exclusiveMax + inclusiveMin);
}

function round(val) {
  let str = val+"";
  return str.substring(0, 3);
}

function drawTarget(xPortion, yPortion, dimPortion) {
  fill("red");
  ellipse(xPortion * cW, yPortion * cH, dimPortion * cH);

  fill("white");
  ellipse(xPortion * cW, yPortion * cH, (dimPortion * cH * 2)/3);

  fill("red");
  ellipse(xPortion * cW, yPortion * cH, (dimPortion * cH)/3);
}

function setTargetSpeeds() {
  targetSpeed[0] = (Math.random()/500)+(1/500);
  targetSpeed[1] = (Math.random()/500)+(1/500);
  targetSpeed[2] = (Math.random()/500)+(1/500);
  targetSpeed[3] = (Math.random()/500)+(1/500);
}

function resetTargetX() {
  targetX[0] = 0;
  targetX[1] = 1;
  targetX[2] = 0;
  targetX[3] = 1;
}
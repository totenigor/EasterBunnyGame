// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// const menu = document.getElementById("menu");
// const aboveCanvas = document.getElementById("aCanvas");
// const EndScreen = document.getElementById("end_Game");
// const finalScore = document.getElementById("score");
// const waveshow1 = document.getElementById("nextWave1");
// const waveshow2 = document.getElementById("nextWave2");
// let points = 10;

// //Audio
// const pickupSound = new Audio("Audio/pickupCoin.wav");

// const MainTheme = new Audio("Audio/MainTheme.wav");
// let MainThemeDuration = MainTheme.duration;

// MainTheme.addEventListener(
//   "ended",
//   function () {
//     this.currentTime = 0;
//     this.play();
//   },
//   false
// );

// const SadHampter = new Audio("Audio/SadHampter.mp3");
// let SadHampterDuration = SadHampter.duration;

// // Load player image
// const playerImgRight = new Image();
// const playerImgLeft = new Image();
// playerImgRight.src = "img/Krolik_Right.png"; // Path to your player image
// playerImgLeft.src = "img/Krolik_Left.png"; // Path to your player image
// let playerImg = image;

// //Background
// let background = new Image();
// background.src = "img/background.jpg";

// // Bunny
// let bunny = {
//   x: 100,
//   y: canvas.height - 100,
//   width: 50,
//   height: 50,
//   speed: 5,
// };

// // Egg
// let eggs = [];
// let score = 0;
// let highScore = 0;
// let blackEggSpawnChance = 0.1; // Spawn chance for black egg (10%)

// // Waves
// let wave1 = false;
// let wave2 = false;

// // Event listeners for moving the bunny
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// let leftPressed = false;
// let rightPressed = false;
// let spacePressed = false;

// function keyDownHandler(e) {
//   if (e.key == "a" || e.key == "A") {
//     leftPressed = true;
//     playerImgLeft = true;
//   } else if (e.key == "d" || e.key == "D") {
//     rightPressed = true;
//     playerImgRight = true;
//   } else if (e.key == "space") {
//     spacePressed = true;
//     speed = 10;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key == "a" || e.key == "A") {
//     leftPressed = false;
//   } else if (e.key == "d" || e.key == "D") {
//     rightPressed = false;
//   } else if (e.key == "space") {
//     spacePressed = false;
//   }
// }

// if (playerImgLeft == true) {
//   playerImg = playerImgLeft;
// } else if (playerImgRight == true) {
//   playerImg = playerImgRight;
// }

// // Function to draw bunny
// function drawBunny() {
//   ctx.drawImage(playerImg, bunny.x, bunny.y, bunny.width, bunny.height);
// }

// // Function to draw eggs
// function drawEggs() {
//   for (let i = 0; i < eggs.length; i++) {
//     const eggImg = new Image();
//     eggImg.src = eggs[i].imageSrc;
//     ctx.drawImage(eggImg, eggs[i].x, eggs[i].y, 20, 20); // Adjust size as needed
//   }
// }

// // Function to update game objects
// function update() {
//   if (score >= 15) {
//     document.getElementById("ability1").style.display = "block";
//   } else {
//     document.getElementById("ability1").style.display = "none";
//   }
//   if (score >= 40) {
//     document.getElementById("ability2").style.display = "block";
//   } else {
//     document.getElementById("ability2").style.display = "none";
//   }

//   // Move bunny
//   if (leftPressed && bunny.x > 0) {
//     bunny.x -= bunny.speed;
//   } else if (rightPressed && bunny.x < canvas.width - bunny.width) {
//     bunny.x += bunny.speed;
//   }

//   // Update egg positions
//   for (let i = 0; i < eggs.length; i++) {
//     eggs[i].y += 2; // Egg falling speed

//     // Check collision with bunny
//     if (
//       eggs[i].x > bunny.x &&
//       eggs[i].x < bunny.x + bunny.width &&
//       eggs[i].y > bunny.y &&
//       eggs[i].y < bunny.y + bunny.height
//     ) {
//       if (eggs[i].imageSrc === "img/Gold_EGG.png") {
//         score += 2; // Yellow egg gives 2 points
//         pickupSound.play();
//       } else if (eggs[i].imageSrc === "img/Egg_2.png") {
//         score -= 10; // Black egg deducts 10 points
//       } else {
//         score++; // Normal egg gives 1 point
//         pickupSound.play();
//       }
//       eggs.splice(i, 1); // Remove egg
//     }
//   }

//   // Generate black egg based on spawn chance
//   if (score >= 10 && Math.random() < blackEggSpawnChance) {
//     eggs.push({
//       x: Math.random() * (canvas.width - 20) + 10,
//       y: 0,
//       imageSrc: "img/Egg_2.png", // Black egg
//     });
//   }

//   // Increase black egg spawn chance every 10 points past 10 points
//   if (score >= 10 && wave1 == false) {
//     points = 30;

//     blackEggSpawnChance = score * 0.015;
//     setTimeout(() => {
//       wave1 = true;
//       blackEggSpawnChance = score * 0.002;
//     }, 3000);
//   } else if (score >= 30 && wave2 == false) {
//     points = 100000;
//     blackEggSpawnChance = score * 0.025;
//     setTimeout(() => {
//       wave2 = true;
//       blackEggSpawnChance = score * 0.002;
//     }, 3000);
//   }
// }

// // Function to render everything
// function render() {
//   ctx.drawImage(background, 0, 0);
//   drawBunny();
//   drawEggs();
//   ctx.font = "24px Arial";
//   ctx.fillStyle = "#000";
//   ctx.textAlign = "left";
//   ctx.fillText("Score: " + score, 10, 30);
//   ctx.textAlign = "center";
//   ctx.fillText("Next wave on " + points + " points", canvas.width / 2, 30);
// }

// // Main game loop
// function gameLoop() {
//   update();
//   render();
//   LifeChecker();
//   requestAnimationFrame(gameLoop);
// }

// setInterval(() => {
//   let eggImage;
//   if (Math.random() < 0.2) {
//     eggImage = "img/Gold_EGG.png";
//   } else {
//     eggImage = "img/Egg_1.png";
//   }
//   eggs.push({
//     x: Math.random() * (canvas.width - 20) + 10,
//     y: 0,
//     imageSrc: eggImage,
//   });
// }, 1000);

// function canvasOn() {
//   MainTheme.play();
//   aboveCanvas.style.display = "flex";
//   menu.style.display = "none";
// }

// function LifeChecker() {
//   if (score < 0) {
//     EndScreen.style.display = "flex";
//     aboveCanvas.style.display = "none";
//     finalScore.innerHTML = "Highest Score: " + highScore;
//     MainTheme.pause();
//     SadHampter.play();
//     if (SadHampterDuration == 0) {
//       SadHampter.pause();
//     } //ZATRZYMAC LOOP SAD HAMPTERA (DO ZROBIENIA)
//   }

//   if (score > highScore) {
//     highScore = score;
//   }
// }

// //Abilities
// document.onkeydown = checkKey;

// function ClrCanvas() {
//   if (score >= 10) {
//     eggs = []; // Clear all eggs
//     score -= 10; // Reduce score by 10 points
//   }
// }

// function Magnet() {
//   if (score >= 40) {
//     while (eggs[i].x > bunny.x && eggs[i].y > bunny.y) {
//       eggs[i].x--;
//       eggs[i].y--;
//     }
//     while (eggs[i].x < bunny.x && eggs[i].y < bunny.y) {
//       eggs[i].x++;
//       eggs[i].y++;
//     }
//     score -= 15;
//   }
// }

// function checkKey(e) {
//   e = e || window.event;

//   if (e.keyCode == "39") {
//     ClrCanvas();
//   }

//   if (e.keyCode == "40") {
//     Magnet();
//   }
// }

// // Start the game loop
// gameLoop();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const menu = document.getElementById("menu");
const aboveCanvas = document.getElementById("aCanvas");
const EndScreen = document.getElementById("end_Game");
const finalScore = document.getElementById("score");
const waveshow1 = document.getElementById("nextWave1");
const waveshow2 = document.getElementById("nextWave2");
let points = 10;

//Audio
const pickupSound = new Audio("Audio/pickupCoin.wav");

const MainTheme = new Audio("Audio/MainTheme.wav");
let MainThemeDuration = MainTheme.duration;

MainTheme.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

const SadHampter = new Audio("Audio/SadHampter.mp3");
let SadHampterDuration = SadHampter.duration;

// Load player images
const playerImgRight = new Image();
const playerImgLeft = new Image();
playerImgRight.src = "img/Krolik_Right.png"; // Path to your player image
playerImgLeft.src = "img/Krolik_Left.png"; // Path to your player image
let playerImg = playerImgRight; // Initial player image

// Set up image animation
const image1 = playerImgRight;
const image2 = playerImgLeft;
let currentImage = image1;

// Timer for image swapping
let imageSwapTimer;

// Function to start image swapping
function startImageSwap() {
  imageSwapTimer = setInterval(() => {
    currentImage = currentImage === image1 ? image2 : image1;
  }, 500); // Change image every 0.5 seconds
}

// Function to stop image swapping
function stopImageSwap() {
  clearInterval(imageSwapTimer);
}

//Background
let background = new Image();
background.src = "img/background.jpg";

// Bunny
let bunny = {
  x: 100,
  y: canvas.height - 100,
  width: 50,
  height: 50,
  speed: 5,
};

// Egg
let eggs = [];
let score = 0;
let highScore = 0;
let blackEggSpawnChance = 0.1; // Spawn chance for black egg (10%)

// Waves
let wave1 = false;
let wave2 = false;

// Event listeners for moving the bunny
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

function keyDownHandler(e) {
  if (e.key == "a" || e.key == "A") {
    leftPressed = true;
    startImageSwap(); // Start image swapping
  } else if (e.key == "d" || e.key == "D") {
    rightPressed = true;
    startImageSwap(); // Start image swapping
  } else if (e.key == "space") {
    spacePressed = true;
    speed = 10;
  }
}

function keyUpHandler(e) {
  if (e.key == "a" || e.key == "A") {
    leftPressed = false;
    stopImageSwap(); // Stop image swapping
  } else if (e.key == "d" || e.key == "D") {
    rightPressed = false;
    stopImageSwap(); // Stop image swapping
  } else if (e.key == "space") {
    spacePressed = false;
  }
}

// Function to draw bunny
function drawBunny() {
  ctx.drawImage(currentImage, bunny.x, bunny.y, bunny.width, bunny.height);
}

// Function to draw eggs
function drawEggs() {
  for (let i = 0; i < eggs.length; i++) {
    const eggImg = new Image();
    eggImg.src = eggs[i].imageSrc;
    ctx.drawImage(eggImg, eggs[i].x, eggs[i].y, 20, 20); // Adjust size as needed
  }
}

// Function to update game objects
function update() {
  if (score >= 15) {
    document.getElementById("ability1").style.display = "block";
  } else {
    document.getElementById("ability1").style.display = "none";
  }
  if (score >= 40) {
    document.getElementById("ability2").style.display = "block";
  } else {
    document.getElementById("ability2").style.display = "none";
  }

  // Move bunny
  if (leftPressed && bunny.x > 0) {
    bunny.x -= bunny.speed;
  } else if (rightPressed && bunny.x < canvas.width - bunny.width) {
    bunny.x += bunny.speed;
  }

  // Update egg positions
  for (let i = 0; i < eggs.length; i++) {
    eggs[i].y += 2; // Egg falling speed

    // Check collision with bunny
    if (
      eggs[i].x > bunny.x &&
      eggs[i].x < bunny.x + bunny.width &&
      eggs[i].y > bunny.y &&
      eggs[i].y < bunny.y + bunny.height
    ) {
      if (eggs[i].imageSrc === "img/Gold_EGG.png") {
        score += 2; // Yellow egg gives 2 points
        pickupSound.play();
      } else if (eggs[i].imageSrc === "img/Egg_2.png") {
        score -= 10; // Black egg deducts 10 points
      } else {
        score++; // Normal egg gives 1 point
        pickupSound.play();
      }
      eggs.splice(i, 1); // Remove egg
    }
  }

  // Generate black egg based on spawn chance
  if (score >= 10 && Math.random() < blackEggSpawnChance) {
    eggs.push({
      x: Math.random() * (canvas.width - 20) + 10,
      y: 0,
      imageSrc: "img/Egg_2.png", // Black egg
    });
  }

  // Increase black egg spawn chance every 10 points past 10 points
  if (score >= 10 && wave1 == false) {
    points = 30;

    blackEggSpawnChance = score * 0.015;
    setTimeout(() => {
      wave1 = true;
      blackEggSpawnChance = score * 0.002;
    }, 3000);
  } else if (score >= 30 && wave2 == false) {
    points = 100000;
    blackEggSpawnChance = score * 0.025;
    setTimeout(() => {
      wave2 = true;
      blackEggSpawnChance = score * 0.002;
    }, 3000);
  }
}

// Function to render everything
function render() {
  ctx.drawImage(background, 0, 0);
  drawBunny();
  drawEggs();
  ctx.font = "24px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "left";
  ctx.fillText("Score: " + score, 10, 30);
  ctx.textAlign = "center";
  ctx.fillText("Next wave on " + points + " points", canvas.width / 2, 30);
}

// Main game loop
function gameLoop() {
  update();
  render();
  LifeChecker();
  requestAnimationFrame(gameLoop);
}

setInterval(() => {
  let eggImage;
  if (Math.random() < 0.2) {
    eggImage = "img/Gold_EGG.png";
  } else {
    eggImage = "img/Egg_1.png";
  }
  eggs.push({
    x: Math.random() * (canvas.width - 20) + 10,
    y: 0,
    imageSrc: eggImage,
  });
}, 1000);

function canvasOn() {
  MainTheme.play();
  aboveCanvas.style.display = "flex";
  menu.style.display = "none";
}

function LifeChecker() {
  if (score < 0) {
    EndScreen.style.display = "flex";
    aboveCanvas.style.display = "none";
    finalScore.innerHTML = "Highest Score: " + highScore;
    MainTheme.pause();
    SadHampter.play();
    if (SadHampterDuration == 0) {
      SadHampter.pause();
    } //ZATRZYMAC LOOP SAD HAMPTERA (DO ZROBIENIA)
  }

  if (score > highScore) {
    highScore = score;
  }
}

//Abilities
document.onkeydown = checkKey;

function ClrCanvas() {
  if (score >= 10) {
    eggs = []; // Clear all eggs
    score -= 10; // Reduce score by 10 points
  }
}

function Magnet() {
  if (score >= 40) {
    while (eggs[i].x > bunny.x && eggs[i].y > bunny.y) {
      eggs[i].x--;
      eggs[i].y--;
    }
    while (eggs[i].x < bunny.x && eggs[i].y < bunny.y) {
      eggs[i].x++;
      eggs[i].y++;
    }
    score -= 15;
  }
}

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "39") {
    ClrCanvas();
  }

  if (e.keyCode == "40") {
    Magnet();
  }
}

// Start the game loop
gameLoop();

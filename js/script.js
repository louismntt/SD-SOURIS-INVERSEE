var cursor = document.getElementById('cursor');
var cursorX, cursorY;

var time = 15000;
var addTime = 2500;
let objectsArray = [];

const mainContainer = document.getElementById('mainContainer');


// inverted cursor move

console.log(document.clientWidth);
document.addEventListener("mousemove", function(e) {

  cursorX = document.body.clientWidth - e.pageX;
  // cursorY = document.body.clientHeight - e.pageY;
  cursorY = e.pageY;


  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  // console.log(cursorX, cursorY);
})

const getRandomInt = (min, max) =>  {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

const playableArea = document.getElementById('playable-area');
//
// setInterval(function() {
//  let goPointThis = document.createElement('div');
//  goPointThis.classList.add('pointThis');
//  playableArea.appendChild(goPointThis);
//  goPointThis.addEventListener("click", function() {
//    this.style.backgroundColor = "blue";
//  })
// }, 1000);

let objectsCount = 0;


class Object {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.backgroundColor = "green";

    let object = document.createElement('div');
    object.classList.add('pointThis');
    object.style.left = this.x + "px";
    object.style.top = this.y + "px";

    playableArea.appendChild(object);

    this.object = object;
  }

  detectClick(){
    // if ( 25 > this.x - cursorX > -25 && 25 > this.y - cursorY > -25 ) {
      this.backgroundColor = "blue";
    // }
  }

}


// creation des objets

setInterval(function () {
  objectsArray.push(new Object(getRandomInt(0, document.body.clientWidth - 70), getRandomInt(100, document.body.clientHeight - 70)));
}, 30);

// click trigger

var winCount = 0;

document.addEventListener('click', function(){
  for (var i = 0; i < objectsArray.length; i++) {
    if (25 > objectsArray[i].x - cursorX && objectsArray[i].x - cursorX > -25
    && 25 > objectsArray[i].y - cursorY && objectsArray[i].y - cursorY > -25) {

      console.log(objectsArray[i].x - cursorX)
      objectsArray[i].object.style.backgroundColor = "blue";
      time += addTime;
      winCount++;

      if (winCount == 10) {
        var tasgagne = document.createElement('h1')
        tasgagne.innerHTML = "C'EST GAGNÉ !";
        tasgagne.classList.add('tasgagne');
        mainContainer.appendChild(tasgagne);
      }

    }
  }
})

// timer

const timer = document.getElementById('timer');


var timerCounting = setInterval(function () {
    time -= 100;

    timer.innerHTML = "Temps restant : " + time/1000 + "s";

    if (time <=  0) {
      console.log
      clearInterval(timerCounting);

      var tasperdu = document.createElement('h1')
      tasperdu.innerHTML = "PERDU !";
      tasperdu.classList.add('tasperdu');
      mainContainer.appendChild(tasperdu);
    }

}, 100);



console.log(objectsArray);

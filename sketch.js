let img;
let tempImg;
let myCard;
let bg; 
let y = 0;
let deck = [];

function preload() {
  bg = loadImage("small.background.5.jpg");
}

function setup() {
  createCanvas(1280, 657,WEBGL);;
  bg = loadImage("small.background.5.jpg");
    for (let i = 0; i < 5; i++) {
     let tempImg =loadImage("card"+i+"jpg");
     let tempCard = new Card(tempImg,40,40+i*150);
     deck.push(tempCard);
    }; {
      loadImage("card"+ i +".jpg", img => {
        let tempCard = new Card(tempImg,40,40+i*150);
        deck.push(tempCard);
    });
  }
}

function draw() {
  background (bg);
  deck.forEach(card => { 
    myCard.display(); });

    image(img, 0, 0);
  myCard.display();
  myCard = new Card(img, 100, 100, 100, 100);
  location = 100, 100;
}


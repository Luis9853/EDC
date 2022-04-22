let gui;

var mapa;

//***BOTONES**
let bkinetic;
let bcircuit;
let bwaste;

let bmau5;
let bsky;
let blost;

let bdeorro;
let bsnake;
let bfisher;

let bzomboy;
let bskrillex;
let bjessica;

//LISTAS

var stages = [];
var artistas = [];
var canciones = [];

//OTROS

var welcomekinetic;
var welcomecircuit;
var welcomewaste;


function preload() {
  mapa = loadImage("mapa.PNG");
  kinetic = loadImage("kinetic.jpg");
  circuit = loadImage("circuit.jpg");
  waste = loadImage("waste.jpg");
  
  picmau5 = loadImage("picmau5.jpg");
  picsky = loadImage("picsky.jpg");
  piclost = loadImage("piclost.jpg");
  picdeorro = loadImage("picdeorro.jpg");
  picsnake = loadImage("picsnake.jpg");
  picfisher = loadImage("picfisher.jpg");
  piczomboy = loadImage("piczomboy.jpg");
  picskrillex = loadImage("picskrillex.jpg");
  picjessica = loadImage("picjessica.jpg");
  
   
  deadmau5 = loadSound("mau5.mp3");
  sky = loadSound("sky.mp3");
  lost = loadSound("lost.mp3");
  deorro = loadSound("deorro.mp3");
  snake = loadSound("snake.mp3");
  fisher = loadSound("fisher.mp3");
  zomboy = loadSound("zomboy.mp3");
  skrillex = loadSound("skrillex.mp3");
  jessica = loadSound("jessica.mp3");
  
  welcomekinetic = loadSound("welcomekinetic.wav");
  welcomecircuit = loadSound("welcomecircuit.wav");
  welcomewaste = loadSound("welcomewaste.wav");
  
  
  gui = createGui();

  
  bkinetic = createToggle("KINETIC", 365, 492, 80, 80);
  bwaste = createToggle("WASTE", 174, 120, 80, 80);
  bcircuit = createToggle("CIRCUIT", 538, 240, 80, 80);
    
  bmau5 = createToggle("DEADMAU5", 80, 400, 140, 70);
  bsky = createToggle("DOMBRESKY", 500, 400, 140, 70);
  blost = createToggle("LOST FRECUENCIES", 280, 600, 210, 70);
  bdeorro = createToggle("DEORRO", 80, 470, 140, 70);
  bsnake = createToggle("DJ SNAKE",500, 470, 140, 70);
  bfisher = createToggle("FISHER", 280, 400, 210, 70);
  bzomboy = createToggle("ZOMBOY", 80, 330, 140, 70);
  bskrillex = createToggle("SKRILLEX", 500, 330, 140, 70);
  bjessica = createToggle("JESSICA AUDIFRED", 280, 530, 210, 70);
  
  back1=createToggle("BACK", 650, 670, 70, 50);
  back2=createToggle("BACK", 580, 670, 70, 50);
  back3=createToggle("BACK", 510, 670, 70, 50);
    
  bmau5.visible = false;
  bsky.visible = false;
  blost.visible = false;
  bdeorro.visible = false;
  bsnake.visible = false;
  bfisher.visible = false;
  bzomboy.visible = false;
  bskrillex.visible = false;
  bjessica.visible = false;
  back1.visible = false;
  back2.visible = false;
  back3.visible = false;

}


function setup() {

  createCanvas(720, 720);
  
  stages = append(stages,kinetic);
  stages = append(stages,circuit);
  stages = append(stages,waste);
  
  artistas = append(artistas,picmau5);
  artistas = append(artistas,picsky);
  artistas = append(artistas,piclost);
  artistas = append(artistas,picdeorro);
  artistas = append(artistas,picsnake);
  artistas = append(artistas,picfisher);
  artistas = append(artistas,piczomboy);
  artistas = append(artistas,picskrillex);
  artistas = append(artistas,picjessica);
  
  canciones=append(canciones, deadmau5);
  canciones=append(canciones, sky);
  canciones=append(canciones, lost);
  canciones=append(canciones, deorro);
  canciones=append(canciones, snake);
  canciones=append(canciones, fisher);
  canciones=append(canciones, zomboy);
  canciones=append(canciones, skrillex);
  canciones=append(canciones, jessica);
  
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {

  background(220);
  imageMode(CORNER)
  image(mapa,0,0,width,height);
  fill (255);
  textSize(50);
  text("Elige un escenario",108,80);

  if (bkinetic.val) {
  imageMode(CORNER)
  image(kinetic,0,0,width,height);
    bkinetic.visible = true;
    bwaste.visible = false;
    bcircuit.visible = false;
    bmau5.visible = true;
    bsky.visible = true;
    blost.visible = true;
    back1.visible = true;
    
  }
  
   if (back1.val){        
    
    background(220);
    imageMode(CORNER)
    image(mapa,0,0,width,height);
    fill (255);
    textSize(50);
    text("Elige un escenario",108,80);
    bkinetic.visible = true;
    bwaste.visible = true;
    bcircuit.visible = true;
    bmau5.visible = false;
    bsky.visible = false;
    blost.visible = false;
    back1.visible = false;
    }
  
    if (bkinetic.isPressed) {
    if (welcomekinetic.isPlaying()) {
    } else {
      welcomekinetic.play();
    }   
  }

  if (bmau5.val) {
  imageMode(CORNER)
  image(artistas[0],0,0,width,height);
    bkinetic.visible = false;
    bsky.visible = false;
    blost.visible = false;
    back1.visible = false;
  }
  
    if (bmau5.isPressed) {
    if (canciones[0].isPlaying()) {
    } else {
      canciones[0].play();
    }  
  }
  
  if (bsky.val) {
  imageMode(CORNER)
  image(artistas[1],0,0,width,height);
    bkinetic.visible = false;
    bmau5.visible = false;
    blost.visible = false;
    back1.visible = false;
  }
  
    if (bsky.isPressed) {
    if (canciones[1].isPlaying()) {
    } else {
      canciones[1].play();
    }  
  }

  if (blost.val) {
  imageMode(CORNER)
  image(artistas[2],0,0,width,height);
    bkinetic.visible = false;
    bmau5.visible = false;
    bsky.visible = false;
    back1.visible = false;
  }
  
    if (blost.isPressed) {
    if (canciones[2].isPlaying()) {
    } else {
      canciones[2].play();
    }  
  }  
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
   if (bcircuit.val) {
  imageMode(CORNER)
  image(circuit,0,0,width,height);
    bkinetic.visible = false;
    bwaste.visible = false;
    bcircuit.visible = true;
    bmau5.visible = false;
    bsky.visible = false;
    blost.visible = false;
    bdeorro.visible = true;
    bsnake.visible = true;
    bfisher.visible = true;
    back2.visible = true;
    
  }
  
  if (back2.val){        
    
    background(220);
    imageMode(CORNER)
    image(mapa,0,0,width,height);
    fill (255);
    textSize(50);
    text("Elige un escenario",108,80);
    bkinetic.visible = true;
    bwaste.visible = true;
    bcircuit.visible = true;
    bdeorro.visible = false;
    bsnake.visible = false;
    bfisher.visible = false;
    back2.visible = false;
    }
  
    if (bcircuit.isPressed) {
    if (welcomecircuit.isPlaying()) {
    } else {
      welcomecircuit.play();
    }   
  }

  if (bdeorro.val) {
  imageMode(CORNER)
  image(artistas[3],0,0,width,height);
    bcircuit.visible = false;
    bsnake.visible = false;
    bfisher.visible = false;
    back2.visible = false;
  }
  
    if (bdeorro.isPressed) {
    if (canciones[3].isPlaying()) {
    } else {
      canciones[3].play();
    }  
  }
  
  if (bsnake.val) {
  imageMode(CORNER)
  image(artistas[4],0,0,width,height);
    bcircuit.visible = false;
    bdeorro.visible = false;
    bfisher.visible = false;
    back2.visible = false;
  }
  
    if (bsnake.isPressed) {
    if (canciones[4].isPlaying()) {
    } else {
      canciones[4].play();
    }  
  }

  if (bfisher.val) {
  imageMode(CORNER)
  image(artistas[5],0,0,width,height);
    bcircuit.visible = false;
    bdeorro.visible = false;
    bsnake.visible = false;
    back2.visible = false;
  }
  
    if (bfisher.isPressed) {
    if (canciones[5].isPlaying()) {
    } else {
      canciones[5].play();
    }  
  }  
  
//////////////////////////////////////////////////////////////////////////////////////////
  
  

   if (bwaste.val) {
  imageMode(CORNER)
  image(circuit,0,0,width,height);
    bkinetic.visible = false;
    bwaste.visible = true;
    bcircuit.visible = false;
    bzomboy.visible = true;
    bskrillex.visible = true;
    bjessica.visible = true;
    back3.visible= true;
    
    
  }
  
  if (back3.val){        
    
    background(220);
    imageMode(CORNER)
    image(mapa,0,0,width,height);
    fill (255);
    textSize(50);
    text("Elige un escenario",108,80);
    bkinetic.visible = true;
    bwaste.visible = true;
    bcircuit.visible = true;
    bzomboy.visible = false;
    bskrillex.visible = false;
    bjessica.visible = false;
    back3.visible = false;
    
    }
  
    if (bwaste.isPressed) {
    if (welcomewaste.isPlaying()) {
    } else {
      welcomewaste.play();
    }   
  }

  if (bzomboy.val) {
  imageMode(CORNER)
  image(artistas[6],0,0,width,height);
    bwaste.visible = false;
    bskrillex.visible = false;
    bjessica.visible = false;
    back3.visible = false;
  }
  
    if (bzomboy.isPressed) {
    if (canciones[6].isPlaying()) {
    } else {
      canciones[6].play();
    }  
  }
  
  if (bskrillex.val) {
  imageMode(CORNER)
  image(artistas[7],0,0,width,height);
    bwaste.visible = false;
    bzomboy.visible = false;
    bjessica.visible = false;
    back3.visible = false;
  }
  
    if (bskrillex.isPressed) {
    if (canciones[7].isPlaying()) {
    } else {
      canciones[7].play();
    }  
  }

  if (bjessica.val) {
  imageMode(CORNER)
  image(artistas[8],0,0,width,height);
    bwaste.visible = false;
    bzomboy.visible = false;
    bskrillex.visible = false;
    back3.visible = false;
  }
  
    if (bjessica.isPressed) {
    if (canciones[8].isPlaying()) {
    } else {
      canciones[8].play();
    }  
  }    
   drawGui();

}
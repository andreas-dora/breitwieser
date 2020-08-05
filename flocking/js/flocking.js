const flock  = [];

function setup(){
  createCanvas(640, 360);
  for(let i = 0; 1 < 20; i++){
    flock.push(new Boid());
  }
}

function draw(){
  background(40);

  for(let boid of flock){
    boid.update();
    boid.show();
  }
}


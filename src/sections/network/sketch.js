var network;
const map1 = new Map();
const timeMap = new Map();
const timeToNode = new Map();
const nameMap = new Map();
const followerMap = new Map();
const parentMap = new Map();
const infoToLoadMap = new Map();
var names = [];
var startpoint = 0;

//pause value
let pause = true;
let adjFrame = -1;
let popsound;
let firstClick = true;
//tweetset input values
let demotionVal = 0;
let tweetSet = 'BRADY';

let demotionDen = 10;

let histogram_x = 0;
let histogram_y = 0;
let histogram_width = 0;
let histogram_height = 0;
const max_bar_height = 1000;
const load_factor = 1;

let veryfirstguy ="";
let end_time = 0;
let bar_times = 0;
const num_bars = 150;
let hist_times = new Array(num_bars).fill(0);
let hist_heights_blue = new Array(num_bars).fill(0);
let hist_heights_pink = new Array(num_bars).fill(0);
let hist_heights_grey = new Array(num_bars).fill(0);


let cur_bar = 0
let tweetimg;
let bradyMap = new Map([
  ['table', 'links2.csv'],
  ['nodes_table', 'nodes_tb.csv'],
  ['info_table', 'users_tb.csv'],
  ['key_accounts', ['a','b', 'c']]
]);

function preload() {
  infoToLoadMap.set("Brady", bradyMap);
  table = loadTable('links2.csv', 'csv', 'header');
  nodes_table = loadTable('nodes_tb.csv', 'csv', 'header');
  info_table = loadTable('users_tb.csv', 'csv', 'header');
  popsound = loadSound('bubl.wav');
  tweetimg = loadImage('brady_tweet.png');

  //ok first node may not necessarily be author watch out for that
  
}

function setup() { 
 /* slider = createSlider(0, 10, 0, 1);
  slider.position((windowWidth/30)/load_factor, (windowHeight/20)/load_factor);
  slider.style('width', '500px');
  slider.style('height', '300px');*/
  restartNetwork();
  
  //histogram
  end_time = 0;
  for (let r = 0; r < nodes_table.getRowCount(); r++)
  {
    let n_time = int(parseFloat(nodes_table.getString(r,1)))
    if (end_time < n_time){
      end_time  = n_time
    }
  }

  bar_times = int( end_time/num_bars )
  hist_times = Array.from({ length: num_bars}, (_, i) => bar_times + (i * bar_times))
  histogram_x = (windowWidth/30)/load_factor;
  histogram_y = (8*windowHeight/10)/load_factor;
  histogram_width = (8*windowWidth/30)/load_factor;
  histogram_height = (1*windowHeight/10)/load_factor;

  
} 

function mouseClicked() {

  pause = !pause;

  if (firstClick)
  {
  network.update();
 
  network.feedforward(1, 1);
  newNode.fire();
  firstClick = false;
  }
 
  

}


function keyPressed(){
  if (key == ' '){ //this means space bar, since it is a space inside of the single quotes 
    restartNetwork();
    adjFrame = 0;
  }
}


function draw() { 
  background(255);
 
  timescale = 120;
  
  noStroke();
  fill(150);
  textSize((windowHeight/40)/load_factor);

  text(formatTime(round(exp(adjFrame/timescale),1)), (windowWidth/30)/load_factor, (windowHeight/10)/load_factor);
  textSize((windowHeight/60)/load_factor);
  
  text("Direct followers of original poster who engaged with tweet", (3/2)*(windowWidth/20)/load_factor, (2.1*windowHeight/10)/load_factor);
  text("Other accounts who engaged with tweet", (3/2)*(windowWidth/20)/load_factor, (3.1*windowHeight/10)/load_factor);
  text("Accounts who originally engaged with tweet, but would not under this level of demotion", (3/2)*(windowWidth/20)/load_factor, (4.1*windowHeight/10)/load_factor);
  text("Time", (3/2)*(windowWidth/20)/load_factor, (9.2*windowHeight/10)/load_factor);
 
  text("Number of Engagements", (windowWidth/30)/load_factor, (5.5*windowHeight/10)/load_factor);
  if(pause)
  {
    fill(200,200,200, 100);
    triangle((4.5/10)*windowWidth, (2/5)*windowHeight,(4.5/10)*windowWidth, (3/5)*windowHeight, (5.5/10)*windowWidth, (1/2)*windowHeight);
  }


  //text("Adjust Demotion", (windowWidth/30)/load_factor, (2*windowHeight/10)/load_factor);

 // text("Reset [SPACE]", (windowWidth/30)/load_factor, (3*windowHeight/10)/load_factor);

  makeKey();

  //image(tweetimg,(windowWidth/30)/load_factor, (3.5*windowHeight/10)/load_factor, 0.75*(windowWidth/3)/load_factor,0.75*(windowHeight/4)/load_factor );
  if (!pause)
  {
    adjFrame++;
  network.update();
  }
  //network.displayConnections();
  network.display();
  //demotionVal = slider.value();



  //histogram
  for (let i=0; i < cur_bar; i++){
    xpos = int(map(i,0,num_bars,histogram_x,histogram_x+histogram_width)) 
    y1 = histogram_y+histogram_height;
    y2 = int(map(hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
    y3 = int(map(hist_heights_pink[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
    y4 = int(map(hist_heights_grey[i]+hist_heights_pink[i]+hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
    //strokeWeight(10);
    

    stroke(200,200,200);
    line(xpos, y1, xpos, y4);
    stroke(29, 161, 242);
    line(xpos,y1,xpos,y2);
    stroke(65, 105, 225);
    y5 = y2-(y1-y3);
    line(xpos, y2, xpos, y5);
 

  }
  if ( (hist_times[cur_bar] - round(exp(adjFrame/timescale),1))  <= 0 ){
    cur_bar = cur_bar + 1
  }
}

function restartNetwork()
{
  //set everything to sum=0
  //unfired state
  //redo the setup function?
  //calculate distances

  scale(0.25);
  defaultradius = (windowHeight/20)/load_factor;
  timescale = 30;
  createCanvas(windowWidth/load_factor,windowHeight/load_factor);
  lastName = table.getString(1,0);

  network = new Network(0, 0);
  mainName = table.getString(0,1);
  minTime = 10000000;
  mainX = 1.4*(windowWidth/2)/load_factor;
  mainY = (windowHeight/2)/load_factor;
  veryfirstguy = nodes_table.getString(0, 0);

 var newNode = new Neuron(mainX, mainY, veryfirstguy, true, defaultradius*4);
 map1.set(veryfirstguy, newNode);

 
  for (let r = 0; r < info_table.getRowCount(); r++)
  {
    followerMap.set(info_table.getString(r, 0), info_table.getString(r,1));
    nameMap.set(info_table.getString(r, 0), info_table.getString(r,2))
  }
  for (let r = 0; r < table.getRowCount(); r++)
  {
     let id = table.getString(r,0);
     let parent = table.getString(r,1);
     parentMap.set(id, parent);
  }

  for (let r = 0; r < nodes_table.getRowCount(); r++)
  {
    id = nodes_table.getString(r,0);
    let time = int(parseFloat(nodes_table.getString(r,1)));
   // console.log(time);
    let angle = random(0, TWO_PI);
    let distance = random(40,windowHeight/2)/load_factor;
    if (parentMap.get(id) == veryfirstguy)
    {
     map1.set(id, new Neuron(mainX+cos(angle)*distance, mainY+sin(angle)*distance, id, true, defaultradius, time, "second"));
    }
    else if (parentMap.get(id)!=veryfirstguy)
    {
      map1.set(id, new Neuron(mainX+cos(angle)*distance, mainY+sin(angle)*distance, id, true, defaultradius, time, "other"));
    }
    timeMap.set(nodes_table.getString(r, 0), nodes_table.getString(r,1));
    timeToNode.set(nodes_table.getString(r, 1), nodes_table.getString(r,0));
    names.push(id);
  }

  map1.set(veryfirstguy, new Neuron(mainX, mainY, veryfirstguy, true, defaultradius, timeMap.get(veryfirstguy), "first"));

 




  //connect neurons using edges
  for (let r = table.getRowCount()-1; r >=0; r--)
  {
   network.connect(map1.get(table.getString(r,1)), map1.get(table.getString(r,0)), 2);
  }
  for (let i = 0; i < names.length; i++)
  {
    network.addNeuron(map1.get(names[i]));
  }


  first = map1.get(names[0]);
  console.log(first);



  network.displayConnections();
  network.display();


  //normalize distances (iterate through and make everything within a certain radius from another)

  console.log(table.getRowCount() + ' total rows in table');
  
  for (i=0; i<100;i++)
  {
  //network.orient();
  }
  
  //fill(200,200,200);
  //rect(200, 600, 700, 700);

  cur_bar = 0
  hist_heights_blue = new Array(num_bars).fill(0)
  hist_heights_pink = new Array(num_bars).fill(0)
  hist_heights_grey = new Array(num_bars).fill(0)

}

function Connection(from, to,w) {
  
  this.a = from;
  this.b = to;
  this.weight = w;
  this.sending = false;
  this.sender = null;
  this.output = 0;
  this.activate = true;
  
  
  this.feedforward = function(val) {
    this.output = val*this.weight;
    this.sender = this.a.position.copy();
    this.sending = true;
    this.b.feedforward(val);
  
  }

  //make a note of when DOJA retweeted it and the big boom
  
  this.update = function() {
    if (this.sending) {
      this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
      var d = p5.Vector.dist(this.sender, this.b.position);
      if (d < 1) {
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }

  this.displayLine = function() {
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

  }
  
  this.display = function() {
    
    if (this.sending) {
      hasSent = true;
      
      if (this.activate)
      {
        
        ellipse(this.sender.x, this.sender.y, 2, 2);
      }
      
    }
  }

  this.deactivate = function()
  {
    this.activate = false;
  }
}

function formatTime (seconds)
{
  hours = round(seconds/3600,0);
  minutes = round((seconds%3600)/60, 0); 
  finseconds = round((seconds%3600)%60, 1);
  return (nf(hours, 2, 0) + " hours, " + nf(minutes, 2, 0) + " min, "  + nf(finseconds, 2, 1) + " seconds after tweet");
}

function makeKey()
{
  fill(65, 105, 225, 200);
  ellipse((windowWidth/20)/load_factor, (2*windowHeight/10)/load_factor, 0.75*windowWidth/20);
  fill(29, 161, 242, 200);
  ellipse((windowWidth/20)/load_factor, (3*windowHeight/10)/load_factor, 0.75*windowWidth/20);
  fill(220,220, 220, 120);
  ellipse((windowWidth/20)/load_factor, (4*windowHeight/10)/load_factor, 0.75*windowWidth/20);

}

function Network(x, y) {
  
  this.neurons = [];
  this.connections = [];
  this.position = createVector(x, y);
  
  this.addNeuron = function(n) {
    this.neurons.push(n);
  }
  
  this.connect = function(a, b, weight) {
    if (typeof a !== 'undefined' && typeof b !== 'undefined')
    {
    var c = new Connection(a, b, weight);
    a.addConnection(c);
    this.connections.push(c);
    }
  }
  
  this.feedforward = function() {
    for (var i = 0; i < arguments.length; i++) {
        var n = this.neurons[i];
        n.feedforward(arguments[i]);
    }
  }

  this.orient =function() {
    for(i=0; i< this.neurons.length; i++)
    {
      this.neurons[i].orient();
    }

  }
  
  this.update = function() {
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
    
    
    for (var i = 0; i < this.neurons.length; i++)
    {
      check = log(this.neurons[i].time)*120 - adjFrame;
     // console.log(check);
      if ( check <= 0)
      {
        //console.log("true");
        this.neurons[i].fire();
      }
    }
  }

  this.displayConnections = function() {
    push();
    translate(this.position.x, this.position.y);
    stroke(220);
    strokeWeight(2*0.4);
   
    
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].displayLine();
    }

  }
  
  this.display = function() {
    push();
    translate(this.position.x, this.position.y);
    fill(0);
    //strokeWeight(1);
    for (var i = 0; i < this.connections.length; i++) {
      //maybe make it a function of the follower count
     if (this.connections[i].a.isSending)//(followerMap.get((this.connections[i].a.name)) >= 0.5*(followerMap.get(veryfirstguy)))
       {
        if (random() < 0.18)
        {
          this.connections[i].deactivate();
        }
      }
      this.connections[i].display();
    }

    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].display();
    }
    pop();
  }
}



function Neuron(x, y, name, active, radius, time, isFirst) {
  
  this.position = createVector(x, y);
  this.connections = [];
  this.sum = (isFirst == 'first'? 1: 0);
  this.r = 1;
  this.isTouched = false;
  this.name = name;
  this.active = active;
  this.seen = false;
  this.time = time;
  this.isSending = false;
  this.isFirst = isFirst;
  
  this.addConnection = function(c) {
    this.connections.push(c);
  }
  
  this.feedforward = function(input) {
  //  console.log(input);
    this.sum += input;
   
  /*  if (this.sum > 0) {
      //this.fire();
      this.sum = 0;
      this.isTouched = true;

    }*/
  }

  this.orient = function() {
    var sumx = 0;
    var sumy = 0;
    for (j=0; j<this.connections.length; j++)
    {
      sumx = sumx+this.connections[j].b.position.x;
      sumy = sumy+this.connections[j].b.position.y;
    }
    if (sumx != 0 && sumy != 0)
    {
    this.position = createVector(sumx/this.connections.length, sumy/this.connections.length);
    }
  }
  
  this.fire = function() {
    if (!this.isSending && this.sum <=0 && demotionVal>0)
    {
      if (!this.seen)
      {
       hist_heights_grey[cur_bar] = hist_heights_grey[cur_bar] + 1;
      }
      this.seen = true;

    }

    if (!this.isSending && this.sum > 0)
    {
    //popsound.play();
    //console.log("fire!!");
    //this.r = 64;
    this.isSending = true;
    if (isFirst == 'second')
    {
       hist_heights_pink[cur_bar]  = hist_heights_pink[cur_bar] + 1
    }
    if (isFirst == 'other')
    {
      hist_heights_blue[cur_bar]  = hist_heights_blue[cur_bar] + 1

    }
    for (var i = 0; i < this.connections.length; i++) {
      let rand = random(demotionDen);
      if (this.active)
      {
        if (rand>=demotionVal)
        {
          this.connections[i].feedforward(this.sum);
        }

      }
      
     //  this.connections[i].isTouched = true;
    }
  }
  }
  
  this.display = function() {
    //console.log(followerMap.get(this.name));
   
    let scaler = (int(followerMap.get(this.name))/4000+10)/load_factor;
   
   // console.log(scaler);
    //console.log(this.isTouched);
    if (this.active)
    {

   /*   if (this.isTouched)
      {
        fill(29, 161, 242);
      }*/
      noStroke();
      if (this.isSending)
      {
        fill(29, 161, 242, 100);
      if (this.isFirst =='first')
      {
        fill(220, 208, 255, 100);
        scaler = 200/load_factor;

      }
      if (this.isFirst == 'second')
      {
        fill(65, 105, 225, 150);

      }

     
      ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);
      //console.log(this.r);
     


      this.r = lerp(this.r, 0.7,0.1);


      }

    }

    //state without demotion
    if (this.seen)
    {
      fill(220,220,220, 50);
      ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);

    }
  
  
   
  }
}
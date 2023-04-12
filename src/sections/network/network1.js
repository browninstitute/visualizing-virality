import {selection_network} from '../selection'
import {ReactP5Wrapper} from 'react-p5-wrapper';
// import sketch from './sketchv2.js';
import t1 from './links2.csv';
import t2 from './nodes_tb.csv';
import t3 from './users_tb.csv';

function sketch(p5) {
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
  var newNode;
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

  let table = 0;
  let nodes_table = 0;
  let info_table = 0;


  let cur_bar = 0
  let tweetimg;
  let bradyMap = new Map([
    ['table', 'links2.csv'],
    ['nodes_table', 'nodes_tb.csv'],
    ['info_table', 'users_tb.csv'],
    ['key_accounts', ['a','b', 'c']]
  ]);

  p5.preload = () => {
    infoToLoadMap.set("Brady", bradyMap);

    table = p5.loadTable(t1, 'csv', 'header');
    nodes_table = p5.loadTable(t2, 'csv', 'header');
    info_table = p5.loadTable(t3, 'csv', 'header');

    //ok first node may not necessarily be author watch out for that
    
  }

  p5.setup = () => {
    restartNetwork();
  
    //histogram
    end_time = 0;
    for (let r = 0; r < nodes_table.getRowCount(); r++)
    {
      let n_time = p5.int(parseFloat(nodes_table.getString(r,1)))
      if (end_time < n_time){
        end_time  = n_time
      }
    }
  

    bar_times = p5.int( end_time/num_bars )
    hist_times = Array.from({ length: num_bars}, (_, i) => bar_times + (i * bar_times))
    histogram_x = (p5.windowWidth/30)/load_factor;
    histogram_y = (8*p5.windowHeight/10)/load_factor;
    histogram_width = (8*p5.windowWidth/30)/load_factor;
    histogram_height = (1*p5.windowHeight/10)/load_factor;
  }

  p5.mouseClicked = () => {

    pause = !pause;
    if (firstClick)
    {
    network.update();
   
    network.feedforward(1, 1);
    newNode.fire();
    firstClick = false;
    }
  }

  p5.keyPressed = () =>{
    if (p5.key == ' '){ //this means space bar, since it is a space inside of the single quotes 
  
  
      pause = !pause;
      if (firstClick)
      {
      network.update();
     
      network.feedforward(1, 1);
      newNode.fire();
      firstClick = false;
      }
    }
  }

  p5.draw = () => {
    p5.background(255);
 
    let timescale = 120;
    
    p5.noStroke();
    p5.fill(150);
    p5.textSize((p5.windowHeight/40)/load_factor);
  
    p5.text(formatTime(p5.round(p5.exp(adjFrame/timescale),1)), (p5.windowWidth/30)/load_factor, (p5.windowHeight/10)/load_factor);
    p5.textSize((p5.windowHeight/60)/load_factor);
    
    p5.text("Direct followers of original poster who engaged with tweet", (3/2)*(p5.windowWidth/20)/load_factor, (2.1*p5.windowHeight/10)/load_factor);
    p5.text("Other accounts who engaged with tweet", (3/2)*(p5.windowWidth/20)/load_factor, (3.1*p5.windowHeight/10)/load_factor);
    p5.text("Accounts who originally engaged with tweet, but would not under this level of demotion", (3/2)*(p5.windowWidth/20)/load_factor, (4.1*p5.windowHeight/10)/load_factor);
    p5.text("Time", (3/2)*(p5.windowWidth/20)/load_factor, (9.2*p5.windowHeight/10)/load_factor);
   
    p5.text("Number of Engagements", (p5.windowWidth/30)/load_factor, (5.5*p5.windowHeight/10)/load_factor);
    if(pause)
    {
      p5.fill(200,200,200, 100);
      p5.triangle((4.5/10)*p5.windowWidth, (2/5)*p5.windowHeight,(4.5/10)*p5.windowWidth, (3/5)*p5.windowHeight, (5.5/10)*p5.windowWidth, (1/2)*p5.windowHeight);
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
      let xpos = p5.int(p5.map(i,0,num_bars,histogram_x,histogram_x+histogram_width)) 
      let y1 = histogram_y+histogram_height;
      let y2 = p5.int(p5.map(hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
      let y3 = p5.int(p5.map(hist_heights_pink[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
      let y4 = p5.int(p5.map(hist_heights_grey[i]+hist_heights_pink[i]+hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
      //strokeWeight(10);
      
  
      p5.stroke(200,200,200);
      p5.line(xpos, y1, xpos, y4);
      p5.stroke(29, 161, 242);
      p5.line(xpos,y1,xpos,y2);
      p5.stroke(65, 105, 225);
      var y5 = y2-(y1-y3);
      p5.line(xpos, y2, xpos, y5);
   
  
    }
    if ( (hist_times[cur_bar] - p5.round(p5.exp(adjFrame/timescale),1))  <= 0 ){
      cur_bar = cur_bar + 1
    }
  };

  
function restartNetwork()
{
  //set everything to sum=0
  //unfired state
  //redo the setup function?
  //calculate distances

  p5.scale(0.25);
  let defaultradius = (p5.windowHeight/20)/load_factor;
  let timescale = 30;
  p5.createCanvas(p5.windowWidth/load_factor,p5.windowHeight/load_factor);
  let lastName = table.getString(1,0);

  network = new Network(0, 0);
  let mainName = table.getString(0,1);
  let minTime = 10000000;
  let mainX = 1.4*(p5.windowWidth/2)/load_factor;
  let mainY = (p5.windowHeight/2)/load_factor;
  veryfirstguy = nodes_table.getString(0, 0);

  newNode = new Neuron(mainX, mainY, veryfirstguy, true, defaultradius*4);
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
    let id = nodes_table.getString(r,0);
    let time = p5.int(parseFloat(nodes_table.getString(r,1)));
   // console.log(time);
    let angle = p5.random(0, p5.TWO_PI);
    let distance = p5.random(40,p5.windowHeight/2)/load_factor;
    if (parentMap.get(id) == veryfirstguy)
    {
     map1.set(id, new Neuron(mainX+p5.cos(angle)*distance, mainY+p5.sin(angle)*distance, id, true, defaultradius, time, "second"));
    }
    else if (parentMap.get(id)!=veryfirstguy)
    {
      map1.set(id, new Neuron(mainX+p5.cos(angle)*distance, mainY+p5.sin(angle)*distance, id, true, defaultradius, time, "other"));
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


  // first = map1.get(names[0]);
  // console.log(first);



  network.displayConnections();
  network.display();


  //normalize distances (iterate through and make everything within a certain radius from another)

  // console.log(table.getRowCount() + ' total rows in table');
  
  for (let i=0; i<100;i++)
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
      this.sender.x = p5.lerp(this.sender.x, this.b.position.x, 0.1);
      this.sender.y = p5.lerp(this.sender.y, this.b.position.y, 0.1);
      var d = this.sender.dist(this.b.position);
      if (d < 1) {
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }

  this.displayLine = function() {
    p5.line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

  }
  
  this.display = function() {
    
    if (this.sending) {
      var hasSent = true;
      
      if (this.activate)
      {
        
        p5.ellipse(this.sender.x, this.sender.y, 2, 2);
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
  let hours = p5.round(seconds/3600,0);
  let minutes = p5.round((seconds%3600)/60, 0); 
  let finseconds = p5.round((seconds%3600)%60, 1);
  return (p5.nf(hours, 2, 0) + " hours, " + p5.nf(minutes, 2, 0) + " min, "  + p5.nf(finseconds, 2, 1) + " seconds after tweet");
}

function makeKey()
{
  p5.fill(65, 105, 225, 200);
  p5.ellipse((p5.windowWidth/20)/load_factor, (2*p5.windowHeight/10)/load_factor, 0.75*p5.windowWidth/20);
  p5.fill(29, 161, 242, 200);
  p5.ellipse((p5.windowWidth/20)/load_factor, (3*p5.windowHeight/10)/load_factor, 0.75*p5.windowWidth/20);
  p5.fill(220,220, 220, 120);
  p5.ellipse((p5.windowWidth/20)/load_factor, (4*p5.windowHeight/10)/load_factor, 0.75*p5.windowWidth/20);

}

function Network(x, y) {
  
  this.neurons = [];
  this.connections = [];
  this.position = p5.createVector(x, y);
  
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
    for(var i=0; i< this.neurons.length; i++)
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
      let check = p5.log(this.neurons[i].time)*120 - adjFrame;
     // console.log(check);
      if ( check <= 0)
      {
        //console.log("true");
        this.neurons[i].fire();
      }
    }
  }

  this.displayConnections = function() {
    p5.push();
    p5.translate(this.position.x, this.position.y);
    p5.stroke(220);
    p5.strokeWeight(2*0.4);
   
    
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].displayLine();
    }

  }
  
  this.display = function() {
    p5.push();
    p5.translate(this.position.x, this.position.y);
    p5.fill(0);
    //strokeWeight(1);
    for (var i = 0; i < this.connections.length; i++) {
      //maybe make it a function of the follower count
     if (this.connections[i].a.isSending)//(followerMap.get((this.connections[i].a.name)) >= 0.5*(followerMap.get(veryfirstguy)))
       {
        if (p5.random() < 0.18)
        {
          this.connections[i].deactivate();
        }
      }
      this.connections[i].display();
    }

    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].display();
    }
    p5.pop();
  }
}



function Neuron(x, y, name, active, radius, time, isFirst) {
  
  this.position = p5.createVector(x, y);
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
    for (var j=0; j<this.connections.length; j++)
    {
      sumx = sumx+this.connections[j].b.position.x;
      sumy = sumy+this.connections[j].b.position.y;
    }
    if (sumx != 0 && sumy != 0)
    {
    this.position = p5.createVector(sumx/this.connections.length, sumy/this.connections.length);
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
      let rand = p5.random(demotionDen);
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
   
    let scaler = (p5.int(followerMap.get(this.name))/4000+10)/load_factor;
   
   // console.log(scaler);
    //console.log(this.isTouched);
    if (this.active)
    {

   /*   if (this.isTouched)
      {
        fill(29, 161, 242);
      }*/
      p5.noStroke();
      if (this.isSending)
      {
        p5.fill(29, 161, 242, 100);
      if (this.isFirst =='first')
      {
        p5.fill(220, 208, 255, 100);
        scaler = 200/load_factor;

      }
      if (this.isFirst == 'second')
      {
        p5.fill(65, 105, 225, 150);

      }

     
      p5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);
      //console.log(this.r);
     


      this.r = p5.lerp(this.r, 0.7,0.1);


      }

    }

    //state without demotion
    if (this.seen)
    {
      p5.fill(220,220,220, 50);
      p5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);

    }
  
  
   
    }
  }


}

export function NETWORK1(){



  return(
    <div className="network_section" id="network_non_demotion">
      <div className='sketch_sec'><ReactP5Wrapper sketch={sketch} ></ReactP5Wrapper></div>
      
      
    </div>
  )
     
  }
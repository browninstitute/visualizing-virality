export default function sketch(p5){

    var network;
    const map1 = new Map();
    const timeMap = new Map();
    const timeToNode = new Map();
    const nameMap = new Map();
    const followerMap = new Map();
    const parentMap = new Map();
    let nodes_table;
    let table;
    let info_table;
    let slider;
    var names = [];
    var startpopint = 0;
    let pause = false;
    let adjFrame = 0;
    let popsound;
    let demotionVal = 1;
    let demotionDen = 10;
    //make restart
    //pause
    //click to end
    //histogram
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
    let hist_times = new Array(num_bars).p5.fill(0);
    let hist_heights_blue = new Array(num_bars).p5.fill(0);
    let hist_heights_pink = new Array(num_bars).p5.fill(0);

    let cur_bar = 0
    let tweetimg;
    p5.setup = () => {
        slider = p5.createSlider(0, 10, 0, 1);
        slider.position((p5.windowWidth/30)/load_factor, (p5.windowHeight/20)/load_factor);
        slider.style('width', '500px');
        slider.style('height', '300px');
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
    p5.draw = () => {
        p5.background(255);
        let timescale = 120;
        
        p5.noStroke();
        p5.fill(150);
        p5.textSize((p5.windowHeight/40)/load_factor);
      
        p5.text(formatTime(p5.round(p5.exp(adjFrame/timescale),1)), (p5.windowWidth/30)/load_factor, (p5.windowHeight/10)/load_factor);
      
        p5.text("Adjust Demotion", (p5.windowWidth/30)/load_factor, (2*p5.windowHeight/10)/load_factor);
      
        p5.text("Reset [SPACE]", (p5.windowWidth/30)/load_factor, (3*p5.windowHeight/10)/load_factor);
      
        p5.image(tweetimg,(p5.windowWidth/30)/load_factor, (3.5*p5.windowHeight/10)/load_factor, 0.75*(p5.windowWidth/3)/load_factor,0.75*(p5.windowHeight/4)/load_factor );
        if (!pause)
        {
          adjFrame++;
        network.update();
        }
        //network.displayConnections();
        network.display();
        demotionVal = slider.value();
      
      
      
        //histogram
        for (let i=0; i < cur_bar; i++){
          let xpos = p5.int(p5.map(i,0,num_bars,histogram_x,histogram_x+histogram_width)) 
          let y1 = histogram_y+histogram_height
          let y2 = p5.int(p5.map(hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y))
          let y3 = p5.int(p5.map(hist_heights_pink[i],0,max_bar_height,histogram_y+histogram_height,histogram_y))
          //p5.p5.strokeWeight(10);
          p5.stroke(29, 161, 242);
          p5.line(xpos,y1,xpos,y2)
          p5.stroke(200,154,222);
          p5.line(xpos, y2, xpos, y2-(y1-y3))
        }
        console.log(hist_heights_blue[cur_bar])
        if ( (hist_times[cur_bar] - p5.round(p5.exp(adjFrame/timescale),1))  <= 0 ){
          cur_bar = cur_bar + 1
        }
    }
    p5.preload = () => {
        table = p5.loadTable('links2.csv', 'csv', 'header');
        nodes_table = p5.loadTable('nodes_tb.csv', 'csv', 'header');
        info_table = p5.loadTable('users_tb.csv', 'csv', 'header');

        tweetimg = p5.loadImage('brady_tweet.png');
    }
    p5.mouseClicked = () => {pause = !pause;}
    p5.keyPressed = () => {
        if (p5.keyTyped === ' '){ //this means space bar, p5.since it is a space inside of the p5.single quotes 
        p5.restartNetwork();
        adjFrame = 0;
        }
    }
    function restartNetwork() {
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
        let veryfirstguy = nodes_table.getString(0, 0);
      
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
          let id = nodes_table.getString(r,0);
          let time = p5.int(parseFloat(nodes_table.getString(r,1)));
         // console.log(time);
          let angle = p5.random(0, p5.TWO_PI);
          let distance = p5.random(40,p5.windowHeight/2)/load_factor;
          if (parentMap.get(id) === veryfirstguy)
          {
           map1.set(id, new Neuron(mainX+p5.cos(angle)*distance, mainY+p5.sin(angle)*distance, id, true, defaultradius, time, "second"));
          }
          else if (parentMap.get(id)!==veryfirstguy)
          {
            map1.set(id, new Neuron(mainX+p5.cos(angle)*distance, mainY+p5.sin(angle)*distance, id, true, defaultradius, time, "other"));
          }
          timeMap.set(nodes_table.getString(r, 0), nodes_table.getString(r,1));
          timeToNode.set(nodes_table.getString(r, 1), nodes_table.getString(r,0));
          names.push(id);
        }
      
        map1.set(veryfirstguy, new Neuron(mainX, mainY, veryfirstguy, true, defaultradius, timeMap.get(veryfirstguy), "first"));
      
       
      
      
      
      
        //connect neurons up5.sing edges
        for (let r = table.getRowCount()-1; r >=0; r--)
        {
         network.connect(map1.get(table.getString(r,1)), map1.get(table.getString(r,0)), 2);
        }
        for (let i = 0; i < names.length; i++)
        {
          network.addNeuron(map1.get(names[i]));
        }
      
      
        let first = map1.get(names[0]);
        console.log(first);
      
      
      
      
      
        //normalize distances (iterate through and make everything within a certain radius from another)
      
        console.log(table.getRowCount() + ' total rows in table');
        
        for (let i=0; i<100;i++)
        {
        //network.orient();
        }
        network.update();
       
        network.displayConnections();
        network.display();
        network.feedforward(1, 1);
        newNode.fire();
        //p5.fill(200,200,200);
        //rect(200, 600, 700, 700);
      
        cur_bar = 0
        hist_heights_blue = new Array(num_bars).p5.fill(0)
        hist_heights_pink = new Array(num_bars).p5.fill(0)
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
        var d = p5.Vector.dist(this.sender, this.b.position);
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
        let hasSent = true;
        
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
      p5.p5.strokeWeight(2*0.4);
     
      
      for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].displayLine();
      }
  
    }
    
    this.display = function() {
      p5.push();
      p5.translate(this.position.x, this.position.y);
      p5.fill(0);
      //p5.p5.strokeWeight(1);
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
    this.sum = (isFirst === 'first'? 1: 0);
    this.r = 1;
    this.isTouched = false;
    this.name = name;
    this.active = active;
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
      if (sumx !== 0 && sumy !== 0)
      {
      this.position = p5.createVector(sumx/this.connections.length, sumy/this.connections.length);
      }
    }
    
    this.fire = function() {
      if (!this.isSending && this.sum > 0)
      {
      //popsound.play();
      //console.log("fire!!");
      //this.r = 64;
      this.isSending = true;
      if (isFirst === 'second')
      {
         hist_heights_pink[cur_bar]  = hist_heights_pink[cur_bar] + 1
      }
      if (isFirst === 'other')
      {
        hist_heights_blue[cur_bar]  = hist_heights_blue[cur_bar] + 1
  
      }
      for (var i = 0; i < this.connections.length; i++) {
        let rand = p5.random(demotionDen);
        if (this.active && rand>demotionVal)
        {
         this.connections[i].feedforward(this.sum);
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
          p5.fill(29, 161, 242);
        }*/
        p5.noStroke();
        if (this.isSending)
        {
          p5.fill(29, 161, 242, 100);
        if (this.isFirst ==='first')
        {
          p5.fill(200,154,222, 150);
          scaler = 200/load_factor;
  
        }
        if (this.isFirst === 'second')
        {
          p5.fill(218,112,214, 150);
  
        }
        /*if (this.connections.length > 10)
        {
        p5.ellipse(this.position.x, this.position.y, this.r*3, this.r*3);
        }
        if (this.connections.length > 30)
        {
        p5.ellipse(this.position.x, this.position.y, this.r*7, this.r*7);
        }
        if (this.connections.length > 100)
        {
          p5.ellipse(this.position.x, this.position.y, this.r*9, this.r*9);
          p5.fill(200);
          // p5.stroke(200);
          p5.textSize(10);
          text(this.name, this.position.x, this.position.y);
    
        }*/
       
        p5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);
        //console.log(this.r);
       
  
  
        this.r = p5.lerp(this.r, 0.7,0.1);
  
  
        }
  
      }
    
    
     
    }
  }
}
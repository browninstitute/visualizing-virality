
import { P5CanvasInstance, ReactP5Wrapper, SketchProps} from 'react-p5-wrapper';
import brady_p from '../../assets/brady_profile.jpg';
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function sketch(fp5) {
    let selection_user = {
        name:"Tom Brady",
        username: "@TomBrady",
        category: "Sports",
        text: "Now that I’m retired I have time to go see @80forBrady four separate times today.",
        date: "02/03/2023",
        likes: "111.7K",
        rts: "4788",
        replies: "2923",
        image: brady_p,
        t_image: null,
        t_vid: null,
    };

    let canvas_second;
  let network;

  let network_initial = null;
  let map1 = null;
  let buildMap = true;
  let timeMap;
  let timeToNode;
  let nameMap;
  let followerMap;
  let parentMap;
  let hopMap;
  let finalTimeMap;
  let categoryMap;
  let kevinFactor = 1;
  let upFactor = fp5.displayHeight / 4;
  let names = [];
  let img = "";
  let startpoint = 0;
  let newNode;
  //pause value
  let pause = false;
  let adjFrame = -1;
  let onboardingText = "";
  let timesecs = 0;
  //tweetset input values
  let demotionVal = 3;
  let demotionDen = 10;
  let yAxisMax = 3000;
  let histogram_x = 0;
  let histogram_y = 0;
  let histogram_width = 0;
  let histogram_height = 0;
  const max_bar_height = 2000;
  const load_factor = 1;

  let retweetSum = 0;
  let replySum = 0;
  let likeSum = 0;

  let veryfirstguy = "";
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
  let first_eng = 20;
  let onboardingTextData = [];
  let defaultradius = (fp5.displayHeight * 0.9) / 20 / load_factor;
  let following_reset = false;
  let user_on_network = false;
  let cur_bar = 0;
  
  fp5.preload = () => {
      img = fp5.loadImage("./twitter_bird.png");
  }





    
    fp5.draw = () => {

        if (user_on_network ){
          fp5.background(255);
      
          let timescale = 120;
          
          fp5.noStroke();
          fp5.fill(100);
          fp5.textSize((fp5.displayWidth*0.9/30)/load_factor);
          timesecs = fp5.round(fp5.exp(adjFrame/timescale),1);
          fp5.text(formatTime(timesecs), (fp5.displayWidth/30)/load_factor, 1.5*(fp5.displayHeight*0.9/15)/load_factor);
          
          onboardingText = "";
          let onboardingTextX = 0.38*(fp5.displayWidth);
          let mainX = 0.5*(fp5.displayWidth);
          let onboardingTextY = 0.35*(fp5.displayHeight*0.9);
          
          if (1.5 < timesecs && timesecs < 3 )
          {
              
              onboardingText = "This is " + selection_user.name + ".";
              //onboardingTextX = 0.65*(fp5.displayWidth);
          // onboardingTextY = 0.35*(fp5.displayHeight*0.9);


          }
          if (2.5 <= timesecs  && timesecs < first_eng)
          {
              onboardingText = "After " + first_eng + " seconds, the first account will engage with his tweet. ";

          }

          if (first_eng <= timesecs  && timesecs < first_eng+4)
          {
              onboardingText = "There they go!";
              onboardingTextX = mainX - fp5.textWidth(onboardingText)/2;;

          }

          
      if (first_eng+4 <= timesecs  && timesecs < first_eng+9)
      {
          onboardingText = "Notice that time is passing here logarithmically.";

      }
      if (first_eng+9 <= timesecs  && timesecs < first_eng+16)
      {
          onboardingText = "That means it will start off slow and then speed up!";

      }
      if (first_eng+16 <= timesecs  && timesecs < first_eng+30)
      {
          onboardingText = "The size of the circles indicates how many followers the account has.";

      }
      onboardingTextX = mainX - fp5.textWidth(onboardingText)/2;;

          

          if (250 <= timesecs  && timesecs < 630)
          {
              onboardingText = "At around 18 minutes, this histogram will show\nhow many engagements happened over time.";
              onboardingTextX = 0.10*(fp5.displayWidth);
              onboardingTextY = 0.85*(fp5.displayHeight*0.9);
          }

          if (630 <= timesecs  && timesecs < 1260)
          {
              onboardingText = "It goes by pretty fast.";
              onboardingTextX = 0.10*(fp5.displayWidth);
              onboardingTextY = 0.85*(fp5.displayHeight*0.9);
          }

          if (1260 <= timesecs  && timesecs < 2000)
          {
              onboardingText = "The lighter blue bar are direct followers of " + selection_user.name + "\nthe darker is everyone else.";
              onboardingTextX = 0.10*(fp5.displayWidth);
              onboardingTextY = 0.85*(fp5.displayHeight*0.9);
          }

          if (2000 <= timesecs  && timesecs < 3000)
          {
              onboardingText = "Watch the distribution as time goes by.";
              onboardingTextX = 0.10*(fp5.displayWidth);
              onboardingTextY = 0.85*(fp5.displayHeight*0.9);
          }

          fp5.text(onboardingText, onboardingTextX, onboardingTextY);
          fp5.text(selection_user.username + "\n\n" + retweetSum + " RTs " + likeSum + "  ♡s  " + replySum  + " 💬s",  fp5.displayWidth/30+(fp5.displayWidth/60)+(fp5.displayWidth/30), (fp5.displayHeight*0.9/7) );

          fp5.textSize((fp5.displayHeight*0.9/60)/load_factor);
          let yAxTop = fp5.int(fp5.map(3000,0,max_bar_height,histogram_y+histogram_height,histogram_y));

          
          fp5.text("Direct followers and unknown", 12*(fp5.displayWidth/23)/load_factor, yAxTop+1*0.75*fp5.displayHeight/40);
          fp5.text("2 degrees of separation ", 12*(fp5.displayWidth/23)/load_factor, yAxTop+2*0.75*fp5.displayHeight/40);
          fp5.text("3 or more degrees of separation " , 12*(fp5.displayWidth/23)/load_factor, yAxTop+3*0.75*fp5.displayHeight/40);
          fp5.text("Accounts who wouldn't engage, \n under demotion", 12*(fp5.displayWidth/23)/load_factor, yAxTop+4*0.75*fp5.displayHeight/40);
          
          // fp5.text("Time", (7)*(fp5.displayWidth/20)/load_factor, (9.3*fp5.displayHeight*0.9/10)/load_factor);
          
          // fp5.text("Number of Engagements", 1.3*(fp5.displayWidth/30)/load_factor, (7*fp5.displayHeight*0.9/10)/load_factor);
          fp5.text("Time", (((4)*(fp5.displayWidth/25)))/load_factor, (9.45*fp5.displayHeight*0.9/10)/load_factor);
          
          fp5.text("Number of Engagements", (1.3*(fp5.displayWidth/12)-35)/load_factor,  ((6.4*fp5.displayHeight*0.9/9))/load_factor );
          
          //fp5.text(selection_user.username, fp5.displayWidth/30+(fp5.displayWidth/60)+(fp5.displayWidth/30), (fp5.displayHeight*0.9/2.5+1.5*fp5.displayHeight*0.9/40));
          fp5.fill(0,0,0,0);
          fp5.stroke(200,200,200);
          fp5.rect(fp5.displayWidth/30, (fp5.displayHeight*0.9/8), (fp5.displayWidth/2), (fp5.displayHeight*0.9/16), 20);
         // img.resize((fp5.displayWidth/40),(fp5.displayHeight*0.9/24));
         // fp5.image(img, fp5.displayWidth/30+(fp5.displayWidth/60), (fp5.displayHeight*0.9/2.5+fp5.displayHeight*0.9/40))


      
          //text("Adjust Demotion", (displayWidth/30)/load_factor, (2*displayHeight*0.9/10)/load_factor);
      
          // text("Reset [SPACE]", (displayWidth/30)/load_factor, (3*displayHeight*0.9/10)/load_factor);
      
          makeKey();
      
          if (timesecs < 144000)
          {
              if (!pause)
          {
              adjFrame++;
              network.update();
          }
          network.display();

          }

          if (timesecs >= 144000)
          {
              network.display();
          }
          //network.displayConnections();
          //selection_user.demotion = slider.value();
      
      
      
          //histogram
          for (let i=0; i < cur_bar; i++){
          let xpos = fp5.int(fp5.map(i,0,num_bars,histogram_x+1.75,histogram_x+histogram_width)) 
          let y1 = histogram_y+histogram_height;
          let y2 = fp5.int(fp5.map(hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
          let y3 = fp5.int(fp5.map(hist_heights_pink[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
          let y4 = fp5.int(fp5.map(hist_heights_grey[i]+hist_heights_pink[i]+hist_heights_blue[i],0,max_bar_height,histogram_y+histogram_height,histogram_y));
          //strokeWeight(10);
          
      
          fp5.stroke(200,200,200);
          fp5.line(xpos, y1, xpos, y4);
          fp5.stroke(29, 161, 242);
          fp5.line(xpos,y1,xpos,y2);
          fp5.stroke(65, 105, 225);
          var y5 = y2-(y1-y3);
          fp5.line(xpos, y2, xpos, y5);
      
      
          }
          if ( (hist_times[cur_bar] - fp5.round(fp5.exp(adjFrame/timescale),1))  <= 0 ){
          cur_bar = cur_bar + 1
          }
            
        }
    };
    function Connection(from, to,w) {
      
      this.a = from;
      this.b = to;
      this.weight = w;
      this.sending = false;
      this.sender = null;
      this.output = 0;
      this.activate = true;
      this.initial = {
        a: from,
        b: to,
        w: w,
      };
  }

  Connection.prototype.reset = function () {
    this.a = this.initial.a;
    this.b = this.initial.b;
    this.weight = this.initial.w;
    this.sending = false;
    this.sender = null;
    this.output = 0;
    this.activate = true;
  };
        
    Connection.prototype.feedforward = function(val) {
        this.output = val*this.weight;
        this.sender = this.a.position.copy();
        this.sending = true;
        this.b.feedforward(val);
    
    }

    //make a note of when DOJA retweeted it and the big boom
    
    Connection.prototype.update = function() {
        if (this.sending) {
        this.sender.x = fp5.lerp(this.sender.x, this.b.position.x, 0.1);
        this.sender.y = fp5.lerp(this.sender.y, this.b.position.y, 0.1);
        var d = this.sender.dist(this.b.position);
        if (d < 1) {
            this.b.feedforward(this.output);
            this.sending = false;
        }
        }
    }

    Connection.prototype.displayLine = function() {
        fp5.line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

    }
    
    Connection.prototype.display = function() {
        
        if (this.sending) {
        var hasSent = true;
        
        if (this.activate)
        {
            
            fp5.ellipse(this.sender.x, this.sender.y, 2, 2);
        }
        
        }
    }

    Connection.prototype.deactivate = function()
    {
        this.activate = false;
    }
        

    function formatTime (seconds)
    {
        let hours = fp5.round(seconds/3600,0);
        let minutes = fp5.round((seconds%3600)/60, 0); 
        let finseconds = fp5.round((seconds%3600)%60, 1);
        return (fp5.nf(hours, 2, 0) + " hours, " + fp5.nf(minutes, 2, 0) + " min, "  + fp5.nf(finseconds, 2, 1) + " seconds after tweet");
    }

    function makeKey()
    {
      let yAxTop = fp5.int(fp5.map(3000,0,max_bar_height,histogram_y+histogram_height,histogram_y));

      fp5.fill(50, 120, 242, 150);
      fp5.rect(11*(fp5.displayWidth/23.5)/load_factor, yAxTop+3, 0.75*fp5.displayHeight/40);
      fp5.fill(102, 0, 153, 150);
      fp5.rect(11*(fp5.displayWidth/23.5)/load_factor, yAxTop+3+0.75*fp5.displayHeight/40, 0.75*fp5.displayHeight/40);
      fp5.fill(153, 0, 102, 150);
      fp5.rect(11*(fp5.displayWidth/23.5)/load_factor, yAxTop+3+1.5*fp5.displayHeight/40, 0.75*fp5.displayHeight/40);
      fp5.fill(200,200,200, 150);
      fp5.rect(11*(fp5.displayWidth/23.5)/load_factor,  yAxTop+3+2.25*fp5.displayHeight/40, 0.75*fp5.displayHeight/40);
      let yAxBot = histogram_y+histogram_height;

      fp5.stroke(10,10,10,150);
      fp5.line(histogram_x, yAxBot, histogram_x, yAxTop);
      fp5.line(histogram_x, histogram_y+histogram_height, histogram_x+histogram_width, histogram_y+histogram_height);
      fp5.stroke(150,150,150,150);
     // fp5.line(3.5*(fp5.displayWidth/20), histogram_y+histogram_height-10, 3.5*(fp5.displayWidth/20), histogram_y+histogram_height+10);
      //fp5.line(2.15*(fp5.displayWidth/20), histogram_y+histogram_height-10, 2.15*(fp5.displayWidth/20), histogram_y+histogram_height+10);
      fp5.text("12h", 2.1*(fp5.displayWidth/20), histogram_y+histogram_height+15);
      fp5.text("1d", 3.5*(fp5.displayWidth/20), histogram_y+histogram_height+15);
      fp5.text("3000", histogram_x-13, yAxTop-5);
    }

    function Network(x, y) {
      
      this.neurons = [];
      this.connections = [];
      this.position = fp5.createVector(x, y);
    }

    Network.prototype.reset = function () {
      for (let i = 0; i < this.connections.length; i++) {
        this.connections[i].reset();
      }
      for (let i = 0; i < this.neurons.length; i++) {
        this.neurons[i].reset();
      }
    };
    Network.prototype.addNeuron = function(n) {
        this.neurons.push(n);
    }
    Network.prototype.connect = function(a, b, weight) {
        if (typeof a !== 'undefined' && typeof b !== 'undefined')
        {
        
        var c = new Connection(a, b, weight);
        a.addConnection(c);
        this.connections.push(c);
        }
    }
    
    Network.prototype.feedforward = function() {
        for (var i = 0; i < arguments.length; i++) {
            var n = this.neurons[i];
            n.feedforward(arguments[i]);
        }
    }

    Network.prototype.orient =function() {
        for(var i=0; i< this.neurons.length; i++)
        {
        this.neurons[i].orient();
        }

    }
    
    Network.prototype.update = function() {
        for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].update();
        }
        
        
        for (var i = 0; i < this.neurons.length; i++)
        {
        let check = fp5.log(this.neurons[i].time)*120 - adjFrame;

        if ( check <= 0)
        {

            this.neurons[i].fire();
        }
        }
    }

    Network.prototype.displayConnections = function() {
        fp5.push();
        fp5.translate(this.position.x, this.position.y);
        fp5.stroke(220);
        fp5.strokeWeight(2*0.4);
    
        
        for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].displayLine();
        }

    }
    
    Network.prototype.display = function() {

        fp5.push();
      fp5.translate(this.position.x, this.position.y);
      fp5.fill(0);
      //strokeWeight(1);
      for (var i = 0; i < this.connections.length; i++) {
      //maybe make it a function of the follower count
      if (this.connections[i].a.isSending)//(followerMap.get((this.connections[i].a.name)) >= 0.5*(followerMap.get(veryfirstguy)))
      {
          if (fp5.random() < 0.18*kevinFactor)
          {
          this.connections[i].deactivate();
          }
      }
      this.connections[i].display();
      }

      for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].display();
      }
      fp5.pop();
    }
    



    function Neuron(x, y, name, active, radius, time, isFirst) {
  
      this.position = fp5.createVector(x, y);
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
      this.opacity = 255;
      this.initial = {
        x: x,
        y: y,
        time: time,
        sum: isFirst === "first" ? 1 : 0,
        active: active,
        name: name,
      };
    }

    Neuron.prototype.reset = function () {
      this.position.x = this.initial.x;
      this.position.y = this.initial.y;
      this.time = this.initial.time;
      this.sum = this.initial.sum;
      this.active = this.initial.active;
      this.name = this.initial.name;
      this.isSending = false;
      this.opacity = 255;
    };
    Neuron.prototype.addConnection = function(c) {
        this.connections.push(c);
    }
    
    Neuron.prototype.feedforward = function(input) {
    
        this.sum += input;
    
    /*  if (this.sum > 0) {
        //this.fire();
        this.sum = 0;
        this.isTouched = true;
        }*/
    }

    Neuron.prototype.orient = function() {
        var sumx = 0;
        var sumy = 0;
        for (var j=0; j<this.connections.length; j++)
        {
        sumx = sumx+this.connections[j].b.position.x;
        sumy = sumy+this.connections[j].b.position.y;
        }
        if (sumx != 0 && sumy != 0)
        {
        this.position = fp5.createVector(sumx/this.connections.length, sumy/this.connections.length);
        }
    }
    
    Neuron.prototype.fire = function() {
        
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
            //this.r = 64;
            this.isSending = true;
            let type = categoryMap.get(this.name);
            if (type=="retweet")
            {
                retweetSum++;
            }
            if (type=="reply")
            {
                replySum++;
            }
            if (type=="like")
            {
                likeSum++;
            }
            if (this.isFirst == 'second')
            {
                hist_heights_pink[cur_bar]  = hist_heights_pink[cur_bar] + 1
            }
            if (this.isFirst == 'other')
            {
                hist_heights_blue[cur_bar]  = hist_heights_blue[cur_bar] + 1

            }
            for (var i = 0; i < this.connections.length; i++) {
                let rand = fp5.random(demotionDen);
                if (this.active)
                {
                    if (rand>=demotionVal)
                    {
                    
                    this.connections[i].feedforward(this.sum);
                    }

                }
            
            }
        }
    }
    
    Neuron.prototype.display = function() {
        
        //first check if final child is gone


        if (kevinFactor >1 && fp5.int(followerMap.get(this.name)) < 200)
        {
            return;
        }
        
          let checkFinalChild = fp5.log(fp5.int(parseFloat(finalTimeMap.get(this.name))))*120 - adjFrame;
          if ( checkFinalChild <= 0)
          {
              return;
          }
          //then brute force go away if too long
        /*  let timeSince = fp5.log(this.time)*120 - adjFrame;
          if (timeSince < -500 && this.isFirst != 'first')
          {
            return;
          }*/
        
          let scaler = (fp5.min(fp5.int(followerMap.get(this.name))/15000+5,335))/load_factor;
        
        // console.log(scaler);
            //console.log(this.isTouched);
            if (this.active)
            {

        /*   if (this.isTouched)
            {
                fill(29, 161, 242);
            }*/
            fp5.noStroke();
            if (this.isSending)
            {
            if (this.isFirst =='first')
            {
                fp5.fill(29, 161, 242, 100);
               // fp5.text(nameMap.get(this.name), 500,500)
                scaler = 100/load_factor;

            }
            if ( hopMap.get(this.name) ==1|| hopMap.get(this.name)==0)
            {
                fp5.fill(50, 120, 242, 150);

            }
            if ( hopMap.get(this.name) == 2)
            {
                fp5.fill(102, 0, 153, 150);

            }

            if ( hopMap.get(this.name) >= 3)

            {
                fp5.fill(153, 0, 102, 150);

            }

            
            fp5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);
            //console.log(this.r);
            if (fp5.int(followerMap.get(this.name)) > 100000 && this.isFirst != 'first'){
                let w = fp5.textWidth(categoryMap.get(this.name) + " by @"+nameMap.get(this.name));
                let h = fp5.textAscent(categoryMap.get(this.name) + " by @"+nameMap.get(this.name));
                fp5.fill(255,255,255, this.opacity);
                fp5.rect(this.position.x-10, this.position.y-h, w+20, h+5, 10);
                fp5.fill(0, 0, 0, this.opacity);
                fp5.text(categoryMap.get(this.name) + " by @"+nameMap.get(this.name), this.position.x, this.position.y);//fp5.displayWidth/5, 0.39*fp5.displayHeight);
                this.opacity = this.opacity-7.5;

            }
            

            this.r = fp5.lerp(this.r, 0.7,0.1);


            }

            }

            //state without demotion
            if (this.seen)
            {
            fp5.fill(220,220,220, 50);
            fp5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);

            }
        
        
        
        }
    
    
        

    function restartNetwork()
        {
            

            if (!canvas_second) {
              canvas_second = fp5.createCanvas(
                fp5.displayWidth,
                fp5.displayHeight * 0.9
              );
              canvas_second.id("network_demotion_canvas");
            }
        
            if (!nodes_table.length) {
              return;
            }
        
            defaultradius = (fp5.displayHeight * 0.9 / 20 )/ load_factor;
            if (buildMap) {
              map1 = new Map();
            }
        

            let mainX = (fp5.displayWidth)/2*load_factor;
          let mainY = (fp5.displayHeight/2.5)/load_factor;
            veryfirstguy = nodes_table[0].id;
        
            if (buildMap) {
              newNode = new Neuron(mainX, mainY, veryfirstguy, true, defaultradius * 4);
              map1.set(veryfirstguy, newNode);
        
              for (let r = 0; r < nodes_table.length; r++) {
                let id = nodes_table[r].id;
                let time = fp5.int(parseFloat(nodes_table[r].time));
                if (time < 153442) {
                  let angle = fp5.random(0, fp5.TWO_PI);
                  let distance =
                    fp5.random(40, (fp5.displayHeight * 0.9) / 4) / load_factor;
                    

                  if (parentMap.get(id) == veryfirstguy && buildMap) {
                    map1.set(
                      id,
                      new Neuron(
                        mainX + Math.cos(angle) * distance,
                        mainY + Math.sin(angle) * distance,
                        id,
                        true,
                        defaultradius,
                        time,
                        "second"
                      )
                    );
                  } else if (parentMap.get(id) != veryfirstguy && buildMap) {
                    map1.set(
                      id,
                      new Neuron(
                        mainX + Math.cos(angle) * distance,
                        mainY + Math.sin(angle) * distance,
                        id,
                        true,
                        defaultradius,
                        time,
                        "other"
                      )
                    );
                  }
                }
              }
              map1.set(
                veryfirstguy,
                new Neuron(
                  mainX,
                  mainY,
                  veryfirstguy,
                  true,
                  defaultradius,
                  timeMap.get(veryfirstguy),
                  "first"
                )
              );
              buildMap = false;
            }
        


            end_time = 0;
            for (let r = 0; r < nodes_table.length; r++) {
              let type = nodes_table[r].type;
              let time = fp5.int(parseFloat(nodes_table[r].time));
              if (time < 153442) {
                if (parseInt(time) < first_eng && parseInt(type) !== 0) {
                  first_eng = parseInt(time);
                }
        
                let n_time = parseInt(time);
                if (end_time < n_time) {
                  end_time = n_time;
                }
              }
            }
            if (!network) {
              network = new Network(0, 0);
        
              for (let entry of parentMap.entries()) {
                let source = entry[0];
                let target = entry[1];
                network.connect(map1.get(target), map1.get(source), 2);
              }
        
              let names = Array.from(map1.keys());
        
              for (let i = 0; i < names.length; i++) {
                network.addNeuron(map1.get(names[i]));
              }
            } else {
              network.reset();
            }
            retweetSum = 0;
            likeSum = 0;
            replySum = 0;
            cur_bar = 0;
        
            hist_heights_blue.fill(0);
            hist_heights_pink.fill(0);
            hist_heights_grey.fill(0);
        
            timesecs = 0;
            adjFrame = -1;
            network.display();
            
            
      }

    fp5.updateWithProps = props => {

        if (props.network_reset) {            
            if (canvas_second) {
              restartNetwork();
              props.network_reset_set(false);
              props.network_pause_set(false);
            }
          }

        if (props.network_pause !== pause) {
            if (canvas_second) {
                pause = props.network_pause;
            }
        }
    
        if (canvas_second) {
            if (user_on_network != props.network_visible){
                user_on_network = props.network_visible;
            }
        }
        if (!nodes_table && props.maps) {
          ({
            timeMap,
            names,
            parentMap,
            followerMap,
            nameMap,
            finalTimeMap,
            hopMap,
            categoryMap,
            hist_times,
            bar_times,
            nodes_table,
          } = props.maps);
          selection_user = props.selection_user;
          user_on_network = props.network_visible;
          demotionVal = props.user_demotion;
        } else if (
          props.selection_user &&
          props.selection_user.username !== selection_user.username
        ) {
          if (canvas_second) {
            nodes_table = null;
            network = null;
            ({
              timeMap,
              parentMap,
              followerMap,
              nameMap,
              finalTimeMap,
              hopMap,
              categoryMap,
              hist_times,
              bar_times,
              nodes_table,
            } = props.maps);
    
            selection_user = props.selection_user;
            let username = props.selection_user.username;
            switch (username) {
              case "@TomBrady":
                kevinFactor = 1;
                yAxisMax = 3000;
    
                break;
              case "@6lack":
                kevinFactor = 1;
                yAxisMax = 3000;
                break;
              case "@SpeakerMcCarthy":
                kevinFactor = 3;
                yAxisMax = 7000;
                break;
              default:
                break;
            }
            restartNetwork();
            props.network_reset_set(false);
            props.network_pause_set(false);
          }
        }
      
        
        
    };
    fp5.setup = () => {
        fp5.scale(0.25);
        histogram_x = fp5.displayWidth / 30 / load_factor;
        histogram_y = (8 * fp5.displayHeight * 0.9) / 10 / load_factor;
        histogram_width = (8 * fp5.displayWidth) / 30 / load_factor;
        histogram_height = (1 * fp5.displayHeight * 0.9) / 10 / load_factor;
        restartNetwork();
    };
    

  }


export function NETWORK2_M({
  UserDemotion,
  UserSelection,
  NetworkPause,
  SetterNetworkPause,
  NetworkReset,
  SetterNetworkReset,
  maps,
  isinView,
    }){




  return(
    <>
    <div className="network_section" id="network_demotion" >

    <div className="play_pause_container">
         
        <div className="network_button_container">
            <button className="network_button" style={{backgroundColor:"#a7dbfa"}} onClick={() => {
                SetterNetworkPause(!NetworkPause)
            }}>Play/Pause</button>
        </div>
        <div className="network_button_container">
            <button className="network_button" style={{backgroundColor:"#44b8fc"}} onClick={() => {
                SetterNetworkReset(true)
            }}>Reset</button>
        </div>
        
    </div>
      <div className='sketch_sec' >

      
      <ReactP5Wrapper
            sketch={sketch}
            user_demotion={UserDemotion}
            selection_user={UserSelection}
            network_pause={NetworkPause}
            network_pause_set={SetterNetworkPause}
            network_reset={NetworkReset}
            network_reset_set={SetterNetworkReset}
            maps={maps}
            network_visible={isinView}
          ></ReactP5Wrapper>
    </div>
    </div>
    </>
  )
  }
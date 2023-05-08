import { P5CanvasInstance, ReactP5Wrapper, SketchProps} from 'react-p5-wrapper';
import brady_p from '../../assets/brady_profile.jpg';


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
    let author;

    let map1 = null;
    let buildMap = true;
    let timeMap;
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

    let pause = false;
    let adjFrame = -1;
    let onboardingText = "";
    let timesecs = 0;
    let demotionVal = 3;
    let demotionDen = 10;
    let yAxisMax = 3000;
    let histogram_x = 0;
    let histogram_y = 0;
    let histogram_width = 0;
    let histogram_height = 0;
    const max_bar_height = 1000;
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
    let hist_heights_pink = [...Array(5)].map(_=>Array(num_bars).fill(0))
    let hist_heights_grey = new Array(num_bars).fill(0);

    let defaultradius = (fp5.displayHeight * 0.9) / 20 / load_factor;

    let user_on_network = false;
    let cur_bar = 0;
    
    fp5.preload = () => {
      img = fp5.loadImage("./twitter_bird.png");
  }




    
    fp5.draw = () => {

        if (user_on_network ){
            
            fp5.background(255);
            fp5.fill(255);
            fp5.noStroke();
            fp5.rect(0,0, fp5.displayWidth, fp5.displayHeight);
        
            let timescale = 120;
            
            
            fp5.fill(100);
            fp5.textSize((fp5.displayHeight*0.9/40)/load_factor);
            timesecs = fp5.round(fp5.exp(adjFrame/timescale),1);
            fp5.text(formatTime(timesecs), (fp5.displayWidth/30)/load_factor, 1.5*(fp5.displayHeight*0.9/15)/load_factor);
            
            onboardingText = "";
            let onboardingTextX = 0.66*(fp5.displayWidth);
            let onboardingTextY = 0.35*(fp5.displayHeight*0.9);
            let mainX = 1.4*(fp5.displayWidth/2);
            if (1.5 < timesecs && timesecs < 2.5 )
            {
                
              onboardingText = "Heres " + selection_user.name + " again.";
              onboardingTextX = mainX - fp5.textWidth(onboardingText)/2;
          
            }
        


            if (2.5 <= timesecs  && timesecs < 4)
            {
                onboardingText = "Now the tweet is experiencing demotion.";
                onboardingTextX = mainX - fp5.textWidth(onboardingText)/2;;

            }
            if (4 <= timesecs  && timesecs < 9)
            {
                onboardingText = "That means some accounts won't see the tweet this time.";
                onboardingTextX = mainX - fp5.textWidth(onboardingText)/2;;

            }
            if (9 <= timesecs  && timesecs < 16)
            {
                onboardingText = "They will be shown in gray.";
                onboardingTextX = mainX - fp5.textWidth(onboardingText)/2;;

            }
          

            if (250 <= timesecs  && timesecs < 630)
            {
                onboardingText = "Now there's a gray section in the histogram too.";
                onboardingTextX = 0.10*(fp5.displayWidth);
                onboardingTextY = 0.75*(fp5.displayHeight*0.9);
            }

            if (630 <= timesecs  && timesecs < 1260)
            {
                onboardingText = "It shows the proportion of people who didn't get to see the tweet this time.";
                onboardingTextX = 0.10*(fp5.displayWidth);
                onboardingTextY = 0.75*(fp5.displayHeight*0.9);
            }

      

            fp5.text(onboardingText, onboardingTextX, onboardingTextY);
            fp5.text(retweetSum + " retweets " + likeSum + " likes " + replySum  + " replies",  fp5.displayWidth/30+(fp5.displayWidth/60)+(fp5.displayWidth/30), (fp5.displayHeight*0.9/2.5+ fp5.displayHeight*0.9/12)-upFactor );
            let rectWidth = fp5.textWidth(retweetSum + " retweets " + likeSum + " likes " + replySum  + " replies");
            fp5.textSize((fp5.displayHeight*0.9/60)/load_factor);
            
            fp5.text("1 degree of separation from " +selection_user.name +" (including direct followers)", (3/2)*(fp5.displayWidth/20)/load_factor, (1.632*fp5.displayHeight*0.9/10)/load_factor+upFactor/2);

            fp5.text("6 degrees of separation from " + selection_user.name, (3/2)*(fp5.displayWidth/20)/load_factor, (2.33*fp5.displayHeight*0.9/10)/load_factor+upFactor/2);
            fp5.text("Accounts who originally engaged with tweet, \n but would not under this level of demotion", (3/2)*(fp5.displayWidth/20)/load_factor, (2.7*fp5.displayHeight*0.9/10)/load_factor+upFactor/2);
            fp5.text("Time", (3/2)*(fp5.displayWidth/11)/load_factor, (9.3*fp5.displayHeight*0.9/10)/load_factor);
            
            fp5.text("Number of Engagements", 1.3*(fp5.displayWidth/12)/load_factor,  ((6.4*fp5.displayHeight*0.9/10)-60)/load_factor );
            fp5.text(selection_user.username, fp5.displayWidth/30+(fp5.displayWidth/60)+(fp5.displayWidth/30), (fp5.displayHeight*0.9/2.5+1.5*fp5.displayHeight*0.9/40)-upFactor);
            fp5.fill(0,0,0,0);
            fp5.stroke(200,200,200);
            fp5.rect(fp5.displayWidth/30, (fp5.displayHeight*0.9/2.5)-upFactor, rectWidth*1.4, (fp5.displayHeight*0.9/8), 20);
            img.resize((fp5.displayWidth/40),(fp5.displayHeight*0.9/24));
            fp5.image(img, fp5.displayWidth/30+(fp5.displayWidth/60), (fp5.displayHeight*0.9/2.5+fp5.displayHeight*0.9/40)-upFactor)


        
                    
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
            
            for (let i=0; i < cur_bar; i++){
              let xpos = fp5.int(fp5.map(i,0,num_bars,histogram_x+3,histogram_x+histogram_width)) 
              let y1 = histogram_y+histogram_height;
              
              let total_len = hist_heights_grey[i] + hist_heights_blue[i] + hist_heights_pink.map(function(value,index) { return value[i];}).reduce((psum, cv) => psum + cv, 0);;
              fp5.stroke(200,200,200);
              fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
              
              let prev_height = hist_heights_grey[i]
              for (var j=4; j >= 0;j--){
                
                switch (j){
                  case 0:
                    fp5.stroke(72,36,158);
                    fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len-prev_height,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
                    break;
                  case 1:
                    fp5.stroke(116,0,151);
                    fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len-prev_height,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
                    break;
                  case 2:
                    fp5.stroke(139,0,136);
                    fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len-prev_height,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
                    break;
                  case 3:
                    fp5.stroke(149,0,116);
                    fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len-prev_height,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
                    break;
                  case 4:
                    fp5.stroke(152,0,91);
                    fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len-prev_height,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
                    break;
                    
                }
                prev_height = prev_height + hist_heights_pink[j][i]
              } 
              
              
              fp5.stroke(50, 160, 242);
              fp5.line(xpos, y1, xpos, fp5.int(fp5.map(total_len-prev_height,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y)));
                    
  
              
          
          
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
        fp5.noStroke();
        fp5.fill(50, 120, 242, 150);
        fp5.rect((fp5.displayWidth/20)/load_factor, (3*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40, 0.4*(0.75*fp5.displayWidth/40));
        
        fp5.fill(72,36,158,180);
        fp5.rect((fp5.displayWidth/20)/load_factor, (3.28*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40, 0.4*(0.75*fp5.displayWidth/40));
        fp5.fill(116,0,151,180);
        fp5.rect((fp5.displayWidth/20)/load_factor, (3.56*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40, 0.4*(0.75*fp5.displayWidth/40));
        fp5.fill(139,0,136,180);
        fp5.rect((fp5.displayWidth/20)/load_factor, (3.84*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40, 0.4*(0.75*fp5.displayWidth/40));
        fp5.fill(149,0,116,180);
        fp5.rect((fp5.displayWidth/20)/load_factor, (4.12*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40, 0.4*(0.75*fp5.displayWidth/40));
        fp5.fill(152,6,91,180);
        fp5.rect((fp5.displayWidth/20)/load_factor, (4.4*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40, 0.4*(0.75*fp5.displayWidth/40));
       
        fp5.fill(200,200,200, 150);
        fp5.rect((fp5.displayWidth/20)/load_factor, (5.1*fp5.displayHeight*0.9/20)/load_factor+upFactor/2, 0.75*fp5.displayWidth/40);

        let yAxBot = histogram_y+histogram_height;
        let yAxTop = fp5.int(fp5.map(yAxisMax,0,max_bar_height*kevinFactor,histogram_y+histogram_height,histogram_y));

        fp5.stroke(10,10,10,150);
        fp5.line(histogram_x, yAxBot, histogram_x, yAxTop);
        fp5.line(histogram_x, histogram_y+histogram_height, histogram_x+histogram_width, histogram_y+histogram_height);
        fp5.fill(150,150,150,150);
        fp5.stroke(150,150,150,150);
        fp5.text("12h", 2.1*(fp5.displayWidth/20), histogram_y+histogram_height+15);
        fp5.text("1d", 3.5*(fp5.displayWidth/20), histogram_y+histogram_height+15);
        fp5.text(yAxisMax , histogram_x-35, yAxTop+8);
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
        for (var i = 0; i < this.connections.length; i++) {
        if (this.connections[i].a.isSending)
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
      this.seen = false;
      this.isTouched = false;
      this.opacity = 255;
      this.r = 1;
    };
    Neuron.prototype.addConnection = function(c) {
        this.connections.push(c);
    }
    
    Neuron.prototype.feedforward = function(input) {
    
        this.sum += input;
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
            
            if (this.isFirst === 1 || this.isFirst === 0 )
            {
                hist_heights_blue[cur_bar]  = hist_heights_blue[cur_bar] + 1
            }
            if (this.isFirst >= 2)
            { 
              hist_heights_pink[this.isFirst-2][cur_bar] = hist_heights_pink[this.isFirst-2][cur_bar] + 1
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

        if (kevinFactor >1 && fp5.int(followerMap.get(this.name)) < 200)
        {
        return;
        }
    
        let checkFinalChild = fp5.log(fp5.int(parseFloat(finalTimeMap.get(this.name))))*120 - adjFrame;
        if ( checkFinalChild <= 0)
        {
            return;
        }
        let scaler = ( fp5.min( fp5.int(followerMap.get(this.name)) / 4000 + 10,660)) / load_factor;
    

        if (this.active)
        {

       
        fp5.noStroke();
        if (this.isSending)
        {
          if (this.isFirst ==='first')
          {
              fp5.fill(29, 161, 242, 100);
              scaler = 200/load_factor;
  
          }
          if ( this.isFirst === 1 || this.isFirst === 0)
          {
              fp5.fill(50, 140, 242,150);
  
          }
          
          else if ( this.isFirst >= 2)
          {
            switch (this.isFirst-2){
              case 0:
                fp5.fill(72,36,158,180);
                break;
              case 1:
                fp5.fill(116,0,151,180);
                break;
              case 2:
                fp5.fill(139,0,136,180);
                break;
              case 3:
                fp5.fill(149,0,116,180);
                break;
              case 4:
                fp5.fill(152,6,91,180);
                break;
            }
          }

        
        fp5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);

        if (fp5.int(followerMap.get(this.name)) > 100000 && this.isFirst !=='first'){
            let w = fp5.textWidth(categoryMap.get(this.name) + " by @"+nameMap.get(this.name));
            let h = fp5.textAscent(categoryMap.get(this.name) + " by @"+nameMap.get(this.name));
            fp5.fill(255,255,255, this.opacity);
            fp5.rect(this.position.x-10, this.position.y-h, w+20, h+5, 10);
            fp5.fill(0, 0, 0, this.opacity);
            fp5.text(categoryMap.get(this.name) + " by @"+nameMap.get(this.name), this.position.x, this.position.y);//fp5.displayWidth/5, 0.39*fp5.displayHeight);
            this.opacity = this.opacity-5.5;

            }
        

        this.r = fp5.lerp(this.r, 0.7,0.1);


        }

        }

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
      
          if (!timeMap.size) {
            return;
          }
      
          if (buildMap) {
            map1 = new Map();
          }
      
          let mainX = (1.4 * (fp5.displayWidth / 2)) / load_factor;
          let mainY = (fp5.displayHeight * 0.9) / 2 / load_factor;
          veryfirstguy = author;
      
          if (buildMap) {

      
            for (let entry of timeMap.entries()) {
              let id = entry[0];
              let time = entry[1];
              if (time < 153442) {

                let angle = fp5.random(0, fp5.TWO_PI);
                let distance =
                  fp5.random(40, (fp5.displayHeight * 0.9) / 2) / load_factor;
      
                  map1.set(
                        id,
                        new Neuron(
                          mainX + Math.cos(angle) * distance,
                          mainY + Math.sin(angle) * distance,
                          id,
                          true,
                          defaultradius,
                          time,
                          hopMap.get(id)
                        )
                      );
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
      
          end_time = 153442;
          
      
          if (!network) {
            network = new Network(0, 0);
      
            for (const entry of parentMap.entries()) {
              let source = entry[0];
              let targets = entry[1];
              
              var i = targets.length; 
              while (i--) {
                network.connect(map1.get(targets[i]), map1.get(source), 2);
              }
            }

            let names = Array.from(timeMap.keys());
    
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
          hist_heights_pink=null;
          hist_heights_pink = [...Array(5)].map(_=>Array(num_bars).fill(0))   
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
        if (props.user_demotion != demotionVal){
            if (canvas_second){
                demotionVal = props.user_demotion;     
                restartNetwork();    
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
        if (!parentMap && props.maps) {
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
            author
          } = props.maps);
          selection_user = props.selection_user;
          demotionVal = props.user_demotion; 
          let username = props.selection_user.username;

            switch (username) {
              case "@TomBrady":
                kevinFactor = 2;
                yAxisMax = 6000;
                break;
              case "@6lack":
                kevinFactor = 0.666;
                yAxisMax = 2000;
                break;
              case "@SpeakerMcCarthy":
                kevinFactor = 1.666;
                yAxisMax = 5000;
                break;
              default:
                break;
            }
          user_on_network = props.network_visible;



        } else if (
          props.selection_user &&
          props.selection_user.username !== selection_user.username
        ) {
          if (canvas_second) {
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
              author
            } = props.maps);
            demotionVal = props.user_demotion; 
            selection_user = props.selection_user;
            let username = props.selection_user.username;

            switch (username) {
              case "@TomBrady":
                kevinFactor = 2;
                yAxisMax = 6000;
                break;
              case "@6lack":
                kevinFactor = 0.666;
                yAxisMax = 2000;
                break;
              case "@SpeakerMcCarthy":
                kevinFactor = 1.666;
                yAxisMax = 5000;
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

export function NETWORK2({

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
            <button className="network_button" style={{backgroundColor:"#44b8fc"}} onClick={() => {
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
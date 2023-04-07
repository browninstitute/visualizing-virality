function Connection(from, to,w) {
  
    this.a = from;
    this.b = to;
    this.weight = w;
    this.sending = false;
    this.sender = null;
    this.output = 0;
    
    
    this.feedforward = function(val) {
      this.output = val*this.weight;
      this.sender = this.a.position.copy();
      this.sending = true;
    }
    
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
    
    this.display = function() {
      stroke(0);
      strokeWeight(this.weight*4);
      line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
      
      if (this.sending) {
        fill(0);
        strokeWeight(1);
        ellipse(this.sender.x, this.sender.y, 16, 16);
      }
    }
  }
  
  function Network(x, y) {
    
    this.neurons = [];
    this.connections = [];
    this.position = createVector(x, y);
    
    this.addNeuron = function(n) {
      this.neurons.push(n);
    }
    
    this.connect = function(a, b, weight) {
      var c = new Connection(a, b, weight);
      a.addConnection(c);
      this.connections.push(c);
    }
    
    this.feedforward = function() {
      for (var i = 0; i < arguments.length; i++) {
          var n = this.neurons[i];
          n.feedforward(arguments[i]);
      }
    }
    
    this.update = function() {
      for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].update();
      }
    }
    
    this.display = function() {
      push();
      translate(this.position.x, this.position.y);
      for (var i = 0; i < this.neurons.length; i++) {
        this.neurons[i].display();
      }
      
      for (var i = 0; i < this.connections.length; i++) {
        this.connections[i].display();
      }
      pop();
    }
  }
  
  function Neuron(x, y) {
    
    this.position = createVector(x, y);
    this.connections = [];
    this.sum = 0;
    this.r = 32;
    
    this.addConnection = function(c) {
      this.connections.push(c);
    }
    
    this.feedforward = function(input) {
      this.sum += input;
      if (this.sum > 1) {
        this.fire();
        this.sum = 0;
      }
    }
    
    this.fire = function() {
      this.r = 64;
      
      for (var i = 0; i < this.connections.length; i++) {
         this.connections[i].feedforward(this.sum);
      }
    }
    
    this.display = function() {
      stroke(0);
      strokeWeight(1);
      var b = map(this.sum,0,1,255,0);
      fill(b);
      ellipse(this.position.x, this.position.y, this.r, this.r);
      
      this.r = lerp(this.r,32,0.1);
    }
  }
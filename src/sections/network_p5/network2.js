import { P5CanvasInstance, ReactP5Wrapper, SketchProps} from 'react-p5-wrapper';
// import sketch from './sketchv2.js';
import t1 from './links_tb.csv';
import t2 from './nodes_tb.csv';
import t3 from './users_tb.csv';
import b1 from './links_b.csv';
import b2 from './nodes_b.csv';
import b3 from './users_b.csv';
import m1 from './links_mc.csv';
import m2 from './nodes_mc.csv';
import m3 from './users_mc.csv';
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
    let tweetSet = 'BRADY';
    let demotionVal = 3;
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
    let key_accounts = 0;

    let table_tb = 0;
    let nodes_table_tb = 0;
    let info_table_tb = 0;
    let key_accounts_tb = 0; //this is defined manually here
    let table_b = 0;
    let nodes_table_b = 0;
    let info_table_b = 0;
    let key_accounts_b = 0; //this is defined manually here
    let table_mc = 0;
    let nodes_table_mc = 0;
    let info_table_mc = 0;
    let key_accounts_mc = 0; //this is defined manually here

    let cur_bar = 0
    fp5.preload = () => {
        table_tb = fp5.loadTable(t1, 'csv', 'header');
        nodes_table_tb = fp5.loadTable(t2, 'csv', 'header');
        info_table_tb = fp5.loadTable(t3, 'csv', 'header');

        table_b = fp5.loadTable(b1, 'csv', 'header');
        nodes_table_b = fp5.loadTable(b2, 'csv', 'header');
        info_table_b = fp5.loadTable(b3, 'csv', 'header');

        table_mc = fp5.loadTable(m1, 'csv', 'header');
        nodes_table_mc = fp5.loadTable(m2, 'csv', 'header');
        info_table_mc = fp5.loadTable(m3, 'csv', 'header');        
    }





    
    fp5.draw = () => {
        fp5.background(255);
    
        let timescale = 120;
        
        fp5.noStroke();
        fp5.fill(150);
        fp5.textSize((fp5.windowHeight/40)/load_factor);
    
        fp5.text(formatTime(fp5.round(fp5.exp(adjFrame/timescale),1)), (fp5.windowWidth/30)/load_factor, (fp5.windowHeight/10)/load_factor);
        fp5.textSize((fp5.windowHeight/60)/load_factor);
        
        fp5.text("Direct followers of original poster who engaged with tweet", (3/2)*(fp5.windowWidth/20)/load_factor, (2.1*fp5.windowHeight/10)/load_factor);
        fp5.text("Other accounts who engaged with tweet", (3/2)*(fp5.windowWidth/20)/load_factor, (3.1*fp5.windowHeight/10)/load_factor);
        fp5.text("Accounts who originally engaged with tweet, but would not under this level of demotion", (3/2)*(fp5.windowWidth/20)/load_factor, (4.1*fp5.windowHeight/10)/load_factor);
        fp5.text("Time", (3/2)*(fp5.windowWidth/20)/load_factor, (9.2*fp5.windowHeight/10)/load_factor);
    
        fp5.text("Number of Engagements", (fp5.windowWidth/30)/load_factor, (5.5*fp5.windowHeight/10)/load_factor);
        if(pause)
        {
        fp5.fill(200,200,200, 100);
        fp5.triangle((4.5/10)*fp5.windowWidth, (2/5)*fp5.windowHeight,(4.5/10)*fp5.windowWidth, (3/5)*fp5.windowHeight, (5.5/10)*fp5.windowWidth, (1/2)*fp5.windowHeight);
        }
    
    
        //text("Adjust Demotion", (windowWidth/30)/load_factor, (2*windowHeight/10)/load_factor);
    
    // text("Reset [SPACE]", (windowWidth/30)/load_factor, (3*windowHeight/10)/load_factor);
    
        makeKey();
    
        if (!pause)
        {
        adjFrame++;
        network.update();
        }
        //network.displayConnections();
        network.display();
        //selection_user.demotion = slider.value();
    
    
    
        //histogram
        for (let i=0; i < cur_bar; i++){
        let xpos = fp5.int(fp5.map(i,0,num_bars,histogram_x,histogram_x+histogram_width)) 
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
    };
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
            this.sender.x = fp5.lerp(this.sender.x, this.b.position.x, 0.1);
            this.sender.y = fp5.lerp(this.sender.y, this.b.position.y, 0.1);
            var d = this.sender.dist(this.b.position);
            if (d < 1) {
                this.b.feedforward(this.output);
                this.sending = false;
            }
            }
        }

        this.displayLine = function() {
            fp5.line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

        }
        
        this.display = function() {
            
            if (this.sending) {
            var hasSent = true;
            
            if (this.activate)
            {
                
                fp5.ellipse(this.sender.x, this.sender.y, 2, 2);
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
        let hours = fp5.round(seconds/3600,0);
        let minutes = fp5.round((seconds%3600)/60, 0); 
        let finseconds = fp5.round((seconds%3600)%60, 1);
        return (fp5.nf(hours, 2, 0) + " hours, " + fp5.nf(minutes, 2, 0) + " min, "  + fp5.nf(finseconds, 2, 1) + " seconds after tweet");
    }

    function makeKey()
    {
        fp5.fill(65, 105, 225, 200);
        fp5.ellipse((fp5.windowWidth/20)/load_factor, (2*fp5.windowHeight/10)/load_factor, 0.75*fp5.windowWidth/20);
        fp5.fill(29, 161, 242, 200);
        fp5.ellipse((fp5.windowWidth/20)/load_factor, (3*fp5.windowHeight/10)/load_factor, 0.75*fp5.windowWidth/20);
        fp5.fill(220,220, 220, 120);
        fp5.ellipse((fp5.windowWidth/20)/load_factor, (4*fp5.windowHeight/10)/load_factor, 0.75*fp5.windowWidth/20);

    }

    function Network(x, y) {
        
        this.neurons = [];
        this.connections = [];
        this.position = fp5.createVector(x, y);
        
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
            let check = fp5.log(this.neurons[i].time)*120 - adjFrame;
            // console.log(check);
            if ( check <= 0)
            {
                //console.log("true");
                this.neurons[i].fire();
            }
            }
        }

        this.displayConnections = function() {
            fp5.push();
            fp5.translate(this.position.x, this.position.y);
            fp5.stroke(220);
            fp5.strokeWeight(2*0.4);
        
            
            for (var i = 0; i < this.connections.length; i++) {
            this.connections[i].displayLine();
            }

        }
        
        this.display = function() {
            fp5.push();
            fp5.translate(this.position.x, this.position.y);
            fp5.fill(0);
            //strokeWeight(1);
            for (var i = 0; i < this.connections.length; i++) {
            //maybe make it a function of the follower count
            if (this.connections[i].a.isSending)//(followerMap.get((this.connections[i].a.name)) >= 0.5*(followerMap.get(veryfirstguy)))
            {
                if (fp5.random() < 0.18)
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
            this.position = fp5.createVector(sumx/this.connections.length, sumy/this.connections.length);
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
        
        this.display = function() {
            //console.log(followerMap.get(this.name));
        
            let scaler = (fp5.int(followerMap.get(this.name))/4000+10)/load_factor;
        
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
                fp5.fill(29, 161, 242, 100);
            if (this.isFirst =='first')
            {
                fp5.fill(220, 208, 255, 100);
                scaler = 200/load_factor;

            }
            if (this.isFirst == 'second')
            {
                fp5.fill(65, 105, 225, 150);

            }

            
            fp5.ellipse(this.position.x, this.position.y, scaler*this.r, scaler*this.r);
            //console.log(this.r);
            


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
        }

    function restartNetwork()
        {
            console.log('restarting')
            fp5.scale(0.25);
            let defaultradius = (fp5.windowHeight/20)/load_factor;
            let timescale = 30;
            canvas_second = null
            canvas_second = fp5.createCanvas(fp5.windowWidth/load_factor,fp5.windowHeight/load_factor);

    
            let lastName = table.getString(1,0);
            network = new Network(0, 0);
            let mainName = table.getString(0,1);
            let minTime = 10000000;
            let mainX = 1.4*(fp5.windowWidth/2)/load_factor;
            let mainY = (fp5.windowHeight/2)/load_factor;
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
            end_time = 0;
            for (let r = 0; r < nodes_table.getRowCount(); r++)
            {
                let id = nodes_table.getString(r,0);
                let time = fp5.int(parseFloat(nodes_table.getString(r,1)));
                let angle = fp5.random(0, fp5.TWO_PI);
                let distance = fp5.random(40,fp5.windowHeight/2)/load_factor;
                if (parentMap.get(id) == veryfirstguy)
                {
                map1.set(id, new Neuron(mainX+fp5.cos(angle)*distance, mainY+fp5.sin(angle)*distance, id, true, defaultradius, time, "second"));
                }
                else if (parentMap.get(id)!=veryfirstguy)
                {
                map1.set(id, new Neuron(mainX+fp5.cos(angle)*distance, mainY+fp5.sin(angle)*distance, id, true, defaultradius, time, "other"));
                }
                timeMap.set(nodes_table.getString(r, 0), nodes_table.getString(r,1));
                timeToNode.set(nodes_table.getString(r, 1), nodes_table.getString(r,0));
                names.push(id);

                let n_time = fp5.int(parseFloat(nodes_table.getString(r,1)))
                if (end_time < n_time){
                    end_time  = n_time
                }
            }
            bar_times = fp5.int( end_time/num_bars )
            hist_times = Array.from({ length: num_bars}, (_, i) => bar_times + (i * bar_times))
    
            map1.set(veryfirstguy, new Neuron(mainX, mainY, veryfirstguy, true, defaultradius, timeMap.get(veryfirstguy), "first"));
            for (let r = table.getRowCount()-1; r >=0; r--)
            {
            network.connect(map1.get(table.getString(r,1)), map1.get(table.getString(r,0)), 2);
            }
            for (let i = 0; i < names.length; i++)
            {
                network.addNeuron(map1.get(names[i]));
            }
    
            network.displayConnections();
            network.display();
    
            cur_bar = 0;
            adjFrame = -1;
            hist_heights_blue = new Array(num_bars).fill(0)
            hist_heights_pink = new Array(num_bars).fill(0)
            hist_heights_grey = new Array(num_bars).fill(0)      

            console.log('finished restarting')  
    
    }

    fp5.updateWithProps = props => {
        console.log(props)
        console.log(selection_user)
        if (props.selection_user && props.selection_user.username != selection_user.username) {
            if (canvas_second){
                Object.assign(selection_user, props.selection_user);
                console.log(selection_user)
                switch (props.selection_user.username){
                    case "@TomBrady":
                        table=table_tb;
                        nodes_table=nodes_table_tb;
                        info_table=info_table_tb;
                        break;
                    case "@6lack":
                        table=table_b;
                        nodes_table=nodes_table_b;
                        info_table=info_table_b;
                        break;
                    case "@SpeakerMcCarthy":
                        table=table_mc;
                        nodes_table=nodes_table_mc;
                        info_table=info_table_mc;
                        break;
                }

                restartNetwork();
                props.network_pause_set(true);
            }
        }

        if (props.network_reset) {
            if (canvas_second){
                restartNetwork();
                props.network_reset_set(false);
                props.network_pause_set(true);
                
            }
        }
        if (props.network_pause != pause) {
            if (canvas_second){
                pause = props.network_pause;                
            }
        }
        if (props.user_demotion != demotionVal){
            if (canvas_second){
                demotionVal = props.user_demotion;     
                restartNetwork();    
                props.network_pause_set(true);       
            }
        }
    };
    fp5.setup = () => {

        table=table_tb;
        nodes_table=nodes_table_tb;
        info_table=info_table_tb;



        histogram_x = (fp5.windowWidth/30)/load_factor;
        histogram_y = (8*fp5.windowHeight/10)/load_factor;
        histogram_width = (8*fp5.windowWidth/30)/load_factor;
        histogram_height = (1*fp5.windowHeight/10)/load_factor;

        restartNetwork();
    }


}
export function NETWORK2({UserSelection, NetworkPause,UserDemotion, SetterNetworkPause, NetworkReset, SetterNetworkReset }){

  return(
    <>
    <div className="network_section" id="network_demotion">
    <div className="container play_pause_con">
    <div className="row demotionText">
        <div className="col-8"></div>
        <div className="col-2 demo_but_sec">
        <button className="demo_but" style={{backgroundColor:"#a7dbfa"}} onClick={() => {
            SetterNetworkPause(!NetworkPause)
        }}>Pause/Play</button>
        </div>
        <div className="col-2 demo_but_sec">
        <button className="demo_but" style={{backgroundColor:"#44b8fc"}} onClick={() => {
            SetterNetworkReset(true)
        }}>Reset</button>
        </div>
    </div>
    </div>
      <div className='sketch_sec'>
        <ReactP5Wrapper sketch={sketch}  selection_user={UserSelection} user_demotion={UserDemotion} network_pause={NetworkPause} network_pause_set={SetterNetworkPause} network_reset={NetworkReset} network_reset_set={SetterNetworkReset}  ></ReactP5Wrapper>
    </div>
    </div>
    </>
  )
  }
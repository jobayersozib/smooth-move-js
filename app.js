var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x =10;
var y =5;
var dx = 2;
var dy = -2;
var i=0;
var inter;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x+9, y+7, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x+7, y-5, 10, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
     ctx.beginPath();
    ctx.arc(x-5, y+5, 10, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    
   
    if(i>=5){
        i=0;
        clearInterval(inter);
       
        
       
    }
        
    else{
        i+=1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x +=1;
        //y +=1; 
        console.log(i);
        
    }
   
    
}


addEventListener("keydown",function(e){
    if(inter){
    clearInterval(inter);
    inter=setInterval(draw,10);
    }
    else{
        inter=setInterval(draw,10);
    }
},true);


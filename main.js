status="";
function preload(){

}
function setup(){
    c=createCanvas(700,350)
    c.center()
    v=createCapture(VIDEO)
    v.hide()
}
function start(){
objdetector=ml5.objectDetector('cocossd' , model);
document.getElementById("fill").innerHTML="DETECTING OBJECTS";
input=document.getElementById("blah").value;

}

function model(){
console.log("``````````````````modle loaded``````````````")
status=true;
}
function draw(){
    image(v,0,0,700,350)
}
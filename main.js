alarm="";
objects=[];
console.log("what is this");
function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    
}

function draw() {
    image(video,0,0,500,500);
    objectDetector.detect(video,gotResults);
    for ( i = 0; i < objects.length; i++) {
        if (objects[i].label=="person") {
            document.getElementById("status").innerHTML="Object Detected";
            document.getElementById("statusbaby").innerHTML="Baby Found"
        } else {
            alarm.play();
            document.getElementById("status").innerHTML="Object Not Found";
            document.getElementById("babystatus").innerHTML="Baby Not Found";
        } 
        
    }
    
}

function preload() {
    alarm=loadSound("alarm sound2.mp3");
}

function modelLoaded() {
    console.log("MODEL LOADED");
}

function gotResults(reuslts) {
    if (results[0].label!=0) {
        console.log(results);
        objects=results;
    }
}
    noseX=0;
    noseY=0;

function preload () {
    clowny_head = loadImage('https://i.postimg.cc/6QnWSyvC/lpmoknijuhbygtvfvcrxedzwsazq.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is activated');
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clowny_head, noseX, noseY, 100, 100);
}

function take_snapshot(){
    save('Youre a clown :).png');                   
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.rightEar.x - 15;
        noseY = results[0].pose.rightEar.y - 45;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
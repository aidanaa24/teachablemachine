let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/90yKn2Oje/';
let video;
let flippedVideo;
let label = "";

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  video = createCapture() (VIDEO);
  video.size(320, 240);
  video.hide();
  flippedVideo = ml5.flipImage(video)
  classifyVideo();
}
function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {

  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;

  classifyVideo();
}

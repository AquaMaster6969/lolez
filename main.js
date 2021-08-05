var SpeechRecognition = window.webkitSpeechRecognition;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content=="take my selfie")
    {
        console.log("taking selfie...")
        speak()
    }
    
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    Webcam.attach(camera);
    setTimeOut(function ()
    {
        take_snapshot();
    },5000);
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri+'">';
    });
}

function setTimeOutButton()
{
    setTimeOut(function (){
        alert("set time out button");
    },3000);
}
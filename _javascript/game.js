const TIMER = 30;

function start() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("info").style.display = "flex";
    document.getElementById("scoreNumber").innerHTML = 0;
    document.getElementById("timeNumber").innerHTML = TIMER;
    document.getElementById("game").style.borderRadius = "0 0 10px 10px";
    var circle = document.getElementById("circle");
    circle.style.display = "inline";
    document.getElementById("game").style.paddingLeft = circle.offsetWidth + "px";
    document.getElementById("game").style.paddingTop = circle.offsetHeight + "px";
    makeCircle();
    timer();
}

function makeCircle() {
    var circle = document.getElementById("circle");
    var top = Math.random() * 100;
    var left = Math.random() * 100;
    circle.style.top = "calc(" + top + "% - " + circle.offsetHeight + "px)";
    circle.style.left = "calc(" + left + "% - " + circle.offsetWidth + "px)";
}

document.getElementById("circle").onclick = function() {
    var scoreNumber = parseInt(document.getElementById("scoreNumber").textContent);
    scoreNumber++;
    document.getElementById("scoreNumber").innerHTML = scoreNumber;
    makeCircle();
};

function timer(){
    var sec = parseInt(document.getElementById("timeNumber").textContent);
    sec--;
    var timer = setInterval(function(){
        document.getElementById('timeNumber').innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    document.getElementById("circle").style.display = "none";
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("game").style.paddingLeft = "0px";
    document.getElementById("game").style.paddingTop = "0px";
}
function start() {
    document.getElementById("startButton").style.display = "none";
    var circle = document.getElementById("circle");
    circle.style.display = "inline";
    document.getElementById("game").style.paddingLeft = circle.offsetWidth + "px";
    document.getElementById("game").style.paddingTop = circle.offsetHeight + "px";
    makeCircle();
}

function makeCircle() {
    var circle = document.getElementById("circle");
    var top = Math.random() * 100;
    var left = Math.random() * 100;
    circle.style.top = "calc(" + top + "% - " + circle.offsetHeight + "px)";
    circle.style.left = "calc(" + left + "% - " + circle.offsetWidth + "px)";
}

document.getElementById("circle").onclick = function() {
    makeCircle();
};
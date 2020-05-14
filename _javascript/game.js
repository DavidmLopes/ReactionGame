function start() {
    document.getElementById("startButton").style.display = "none";
    var circle = document.getElementById("circle");
    var top = Math.random() * 100;
    var left = Math.random() * 100;
    circle.style.display = "inline";
    circle.style.top = "calc(" + top + "% - " + circle.offsetHeight + "px)";
    circle.style.left = "calc(" + left + "% - " + circle.offsetWidth + "px)";
}
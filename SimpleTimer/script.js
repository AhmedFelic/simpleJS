var message = document.getElementById("txt");
var colors = ["red", "green", "blue", "pink", "yellow", "brown"];
var counter = 0;
var stop = document.getElementById("stop");
function f1() {
    if (counter >= colors.length) {
        counter = 0;
    }
    message.style.background = colors[counter];
    counter++;

}
var time = setInterval(f1, 2000);

message.onclick = function () {
    clearInterval(time);
    stop.innerHTML = "Color slide stopped";
}

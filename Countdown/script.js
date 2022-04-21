var countDown = new Date("Jan 3, 2050 17:33:22").getTime();


// updejt svake sekunde
var x = setInterval(function () {
    var now = new Date().getTime();

    //distanca izmedju sad i countdowna

    var distance = countDown - now;

    //vrijeme dan sati min sec

    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);

    //ispis rezultata
    document.getElementById("countdown").innerHTML = day + "D : " + hrs + "H : " + min + "M : " + sec + "S";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Countdown Expired";
    }

}, 1000);
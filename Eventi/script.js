function dodaj2() {
    document.getElementById("prviDiv").addEventListener("click", () => { alert("OnClick Alert") });
    document.getElementById("drugiDiv").addEventListener("wheel", () => { alert("scroll misa") });

}

function dodajListener() {

    window.addEventListener("resize", () => { document.getElementById("velicinaEkrana").innerHTML = window.innerWidth });
    window.addEventListener("resize", () => { document.getElementById("visinaEkrana").innerHTML = window.innerHeight });
    document.getElementById("pracenjeSve").addEventListener("mousemove", () => {
        document.getElementById("novi").innerHTML = window.event.screenX + " " + window.event.screenY + "<br>"
        document.getElementById("pracenje1").style.top = window.event.clientY + 15 + "px";
        document.getElementById("pracenje1").style.left = window.event.clientX + 15 + "px";
        document.getElementById("pracenje2").style.top = window.event.clientY + 35 + "px";
        document.getElementById("pracenje2").style.left = window.event.clientX + 35 + "px";
        document.getElementById("pracenje3").style.top = window.event.clientY + 50 + "px";
        document.getElementById("pracenje3").style.left = window.event.clientX + 50 + "px";
    })
}


document.addEventListener("load", dodajListener());
document.addEventListener("load", dodaj2());
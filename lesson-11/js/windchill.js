
function output(){
    let tempF = parseFloat(document.getElementById("high").innerHTML);
    let speed = parseFloat(document.getElementById("speed").innerHTML);

    let output = windChill(tempF, speed);
    document.getElementById("windChill").innerHTML = output.toFixed(2);

}

function windChill(tempF,speed) {
    if (tempF <= 50 && speed >= 3) {
        let t = tempF;
        let s = speed; 
        let f = 35.74 + (0.6215 *t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        return f;
    }
    else {
        let na="N/A";
        return na;
    }
}

output()
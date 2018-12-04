var canvas = document.getElementById("canvas");
var render = canvas.getContext("2d");

setInterval(function() {
    render.clearRect(0, 0, canvas.width, canvas.height);
}, 17);

console.log(canvas.width);
console.log(canvas.height);
console.log("finished running script");
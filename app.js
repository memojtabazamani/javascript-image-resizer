var element = document.getElementsByClassName('handle')[0];
var imgBox = document.getElementsByClassName('imgBox')[0];
var holded = false;
element.onmousedown = function (event) {
    console.log(event.x + " -- " + event.y);
    console.log(event.clientX + " -- " + event.clientY);
    console.log(event.layerX + " -- " + event.layerY);
    console.log(event.offsetX + " -- " + event.offsetY);
    holded = true;
}
element.onmouseup = function() {
    holded = false;
}
element.onmouseleave = function() {
    holded = false;
}

element.onmousemove = function (event) {
    if(holded) {
        imgBox.style.width = event.offsetX + 5 + "px";
        imgBox.style.height = event.offsetY + 5 + "px";
    }
}

function changeFontSize(step) {
    var currentFontSize = parseFloat (getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + "px";
}

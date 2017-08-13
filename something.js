
var TopImageDragging = false;
var TopImageY;
$("#HeaderImageMove").mousedown(function (e) {
    TopImageDragging = true;
    TopImageY = e.clientY - this.offsetTop;
    return false;
});
document.onmousemove = function (e) {
    if (TopImageDragging) {
        var e = e || window.event;
        var NewTopImageY = e.clientY - TopImageY;
        if (NewTopImageY < -340) { NewTopImageY = -340 }
        if (NewTopImageY > 0) { NewTopImageY = 0 }
        $("#HeaderImageMove").css({ "top": NewTopImageY + "px" });
        return false;
    }
};
$(document).mouseup(function (e) {
    TopImageDragging = false;
    e.cancelBubble = true;
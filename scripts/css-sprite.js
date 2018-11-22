var myDiv = document.getElementById("mydiv"),
y = 0,
yTwo,
myInterval;

function smile() {
    if(y == -7680) {
        yTwo += 480;
        myDiv.style.cssText = "background: url(../images/css-sprite/smile.jpg) no-repeat 50%" + yTwo + "px; width: 480px; height: 480px; margin: 0 auto;"
        if(yTwo == 0) {
            y = 0;
        }
    } else {
        y -= 480;
        myDiv.style.cssText = "background: url(../images/css-sprite/smile.jpg) no-repeat 50%" + y + "px; width: 480px; height: 480px; margin: 0 auto;"
        if(y == -7680) {
            yTwo = -7680;
        }
    }
}
myInterval = setInterval(smile, 200);
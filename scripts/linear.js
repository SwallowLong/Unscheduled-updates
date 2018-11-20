var fade = document.getElementById("fade-obj"),
    btn = document.getElementById("fade-btn"),
    myOpacity = 1;

    function goIn() {
        if(myOpacity>0) {
                myOpacity -= 0.1;
                fade.style.opacity = myOpacity;
                btn.disabled = true;
                setTimeout(goIn, 1000);          
        } else {
                myOpacity = 0;
                btn.disabled = false;
                btn.textContent = "淡入"; 
                // clearInterval(goInterval);      
        }
    }

    function goOut() {
        if(myOpacity<1) {
                myOpacity += 0.1;
                fade.style.opacity = myOpacity;
                btn.disabled = true; 
                setTimeout(goOut, 1000);
        } else {
                myOpacity = 1;
                btn.disabled = false;
                btn.textContent = "淡出"; 
                // clearInterval(outInterval)
            } 
    }

// btn.addEventListener("click", function(){
//     if(btn.textContent == "淡出") {
//             goInterval = setInterval(goIn,1000);
//     } else {
//         outInterval = setInterval(goOut, 1000)
//     }
// }, false)

btn.addEventListener("click", function(){
    if(btn.textContent == "淡出") {
            setTimeout(goIn, 1000);
    } else {
        setTimeout(goOut, 1000);
    }
}, false)
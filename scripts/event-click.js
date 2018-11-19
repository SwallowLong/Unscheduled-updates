var btn = document.getElementById("submit-btn"),
    myName = document.getElementById("name");

btn.addEventListener("click", function(){
    console.log(myName.value);
    alert(myName.value)
}, false);

btn.addEventListener("keydown", function(){
    if(event.keyCode == 27) {
        myName.value = '';
    }
}, false);

myName.addEventListener("keydown", function(){
    if(event.keyCode == 27) {
        myName.value = '';
    }
}, false);
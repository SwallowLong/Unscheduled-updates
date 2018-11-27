var radioA = document.getElementById("radio-a"),
    strA = document.getElementById("str-a"),
    radioB = document.getElementById("radio-b"),
    strB = document.getElementById("str-b"),
    numA = document.getElementById("num-a"),
    numB = document.getElementById("num-b"),
    btn = document.getElementsByTagName("button"),
    result = document.getElementById("result");

// 第一步 将输入框和单选按钮相对应
(function() {
    radioA.addEventListener("click", function() {
        strA.focus();
    },false);

    radioB.addEventListener("click", function() {
        strB.focus();
    },false);

    strA.addEventListener("focusin", function(){
        radioA.checked = "ture";
    }, false)

    strB.addEventListener("focusin", function(){
        radioB.checked = "ture";
    }, false)
})();

// 第二步将相应要求添加到对应按钮
btn[0].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.value.length;
    } else {
        result.textContent = strB.value.length;
    }
}, false)

btn[1].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.value[2];
    } else {
        result.textContent = strB.value[2];
    }
}, false)

btn[2].addEventListener("click", function(){
    result.textContent = strA.value + strB.value;
}, false)

btn[3].addEventListener("click", function(){
    result.textContent = strA.value.indexOf(strB.value);
}, false)

btn[4].addEventListener("click", function(){
    result.textContent = strB.value.lastIndexOf(strA.value);
}, false)

btn[5].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.value.slice(numA.value, numB.value);
    } else {
        result.textContent = strB.value.slice(numA.value, numB.value);
    }
}, false)

btn[6].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.rows;
    } else {
        result.textContent = strB.rows;
    }
}, false)

btn[7].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.value.substr(numA.value, numB.value);
    } else {
        result.textContent = strB.value.substr(numA.value, numB.value);
    }
}, false)

btn[8].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.value.toUpperCase();
    } else {
        result.textContent = strB.value.toUpperCase();
    }
}, false)

btn[9].addEventListener("click", function(){
    if(radioA.checked) {
        result.textContent = strA.value.toLowerCase();
    } else {
        result.textContent = strB.value.toLowerCase();
    }
}, false)

btn[10].addEventListener("click", function(){
    if(radioA.checked) {
        var arrayA = strA.value.split('');
        for(var i=0; i<arrayA.length; i++) {
            if(arrayA[i] == " ") {
                arrayA.splice(i, 1); 
                i--;   
            }
        }
        result.textContent = arrayA.join('');
    } else {
        var arrayB = strB.value.split('');
        for(var i=0; i<arrayB.length; i++) {
            if(arrayB[i] == " ") {
                arrayB.splice(i, 1);  
                i--;  
            }
        }
        result.textContent = arrayB.join(''); 
    }
}, false)

btn[11].addEventListener("click", function(){
    if(radioA.checked) {
        var arrayA = strA.value.split('');
        for(var i=0,len=arrayA.length; i<len; i++) {
            if(strA.value[i] == "a") {
                arrayA.splice(i, 1, strB.value);    
            }
        }
        result.textContent = arrayA.join('');
    } else {
        var arrayB = strB.value.split('');
        for(var i=0,len=arrayB.length; i<len; i++) {
            if(strB.value[i] == "a") {
                arrayB.splice(i, 1, strA.value);    
            }
        }
        result.textContent = arrayB.join('');
    }
}, false)
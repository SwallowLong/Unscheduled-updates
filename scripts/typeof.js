var radioA = document.getElementById("radio-a"),
    radioB = document.getElementById("radio-b"),
    numA = document.getElementById("num-a"),
    numB = document.getElementById("num-b"),
    btn = document.getElementsByTagName("button"),
    result = document.getElementById("result");

// 第一步将单选按钮和相应文本框对应起来

(function() {
    radioA.addEventListener("click", function() {
        numA.focus();
    },false);

    radioB.addEventListener("click", function() {
        numB.focus();
    },false);

    numA.addEventListener("focusin", function(){
        radioA.checked = "ture";
    }, false)

    numB.addEventListener("focusin", function(){
        radioB.checked = "ture";
    }, false)
})();

// 第二步：判断输入框的内容是否为数字（包括小数）并将结果赋予btn[0]的点击事件

function myNum() {
    if(radioA.checked) {       
        result.textContent = (isNaN(numA.value) || numA.value == "") ? "Noa" : "Yesa" ; 
    } else {
        if((radioB.checked)) {
            result.textContent = (isNaN(numB.value) || numB.value == "") ? "Nob" : "Yesb" ;
        } else {
            result.textContent = "请选择一项";
        }         
    }
}

btn[0].addEventListener("click", myNum, false);

//第三步：把A四舍五入为B个小数位数的数字
// 检测b是否存在 存在且为正数则四舍五入得到整数作为a的小数位的长度Math.round()

btn[1].addEventListener("click", function(){
    if(!isNaN(numB.value) && numB.value != "") {
        var bLen = Math.round(numB.value*1);
    
    // 检测a是否存在 存在且为数字则将 a四舍五入为bLen长度的小数位的数字 toFixed()
            if(!isNaN(numA.value) && numA.value != "") {
                if(bLen<=20) {
                    numA.value = (numA.value*1).toFixed(bLen);    
                } else{
                        bLen = 20;
                        numA.value = (numA.value*1).toFixed(bLen);
                    }
                }
            } else {
                alert("请在B中输入正数");
            }   
}, false)

// 第四步：点击按钮时输出当前选中数字的绝对值 Math.abs();

btn[2].addEventListener("click", function(){
    //点击按钮 当前选中数字 即checked为true的值

    if(radioA.checked) {
        numA.value = Math.abs(numA.value);
        result.textContent = numA.value;
    }
    if(radioB.checked) {
        numB.value = Math.abs(numB.value);
        result.textContent = numB.value;
    }
}, false)

//第五步：对选中值分别运用 ceil()、floor()、round()、min()、max()

btn[3].addEventListener("click", function(){
    if(radioA.checked) {
        numA.value = Math.ceil(numA.value);
        result.textContent = numA.value;
    }
    if(radioB.checked) {
        numB.value = Math.ceil(numB.value);
        result.textContent = numB.value;
    }
}, false)

btn[4].addEventListener("click", function(){
    if(radioA.checked) {
        numA.value = Math.floor(numA.value);
        result.textContent = numA.value;
    }
    if(radioB.checked) {
        numB.value = Math.floor(numB.value);
        result.textContent = numB.value;
    }
}, false)

btn[5].addEventListener("click", function(){
    if(radioA.checked) {
        numA.value = Math.round(numA.value);
        result.textContent = numA.value;
    }
    if(radioB.checked) {
        numB.value = Math.round(numB.value);
        result.textContent = numB.value;
    }
}, false)

btn[6].addEventListener("click", function(){
        var maxMy = Math.max(numA.value, numB.value);
        result.textContent = maxMy;
}, false)

btn[7].addEventListener("click", function(){
        var minMy = Math.min(numA.value, numB.value);
        result.textContent = minMy;
}, false)

//用到的方法：isNaN toFixed Math{abs min max floor ceil round rasdom}
// 函数命名规则不要和关键字重复
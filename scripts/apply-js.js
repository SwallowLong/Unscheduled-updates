    function createParagraph() {
        var para = document.createElement('p');
        para.textContent = "你点击了这个按钮！";
        document.body.appendChild(para);
    }
    var buttons = document.querySelectorAll("button");
    for(var i=0, len=buttons.length; i<len; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }

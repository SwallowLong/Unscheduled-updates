/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
*/
function diyTrim(str) {
    var result = "";

    //去除头是检测出非空字符的index
    
    var myArray = str.split(''),
        myCount = 0,
        countJ = 0,
        topIndex, bottomIndex;
    for(var i=0, len=myArray.length; i<len; i++) {
        if(myArray[i] != " " && myArray[i] != "　" && myCount == 0) {
            topIndex = i;
            myCount++;
        }
    }

    //检测尾部将字符串倒过来同上操作 然后length-index得到lastIndex后一个索引
    //由于slice截取时不包括lastIndex so取得lastIndex后一个索引最好

    var arr = myArray.reverse();
    for(var j=0, jLen = arr.length; j<jLen; j++) {
        if(arr[j] != " " && myArray[i] != "　" && countJ == 0) {
            bottomIndex = jLen - j;
            countJ++;
        }
    }

    //将数组倒转回来然后将头尾的空白格去除
    myArray.reverse();
    result = myArray.slice(topIndex, bottomIndex).join('');
    return result
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    //连续重复即说明index和index+1相等 使用splice(index,1)
    
    var myArray = str.split('');
    for(var i=0; i<myArray.length; i++) {
        if(myArray[i] ==myArray[i+1]) {
            myArray.splice(i, 1);
            i--;
        }
    }
    result = myArray.join('');
    return result;
}
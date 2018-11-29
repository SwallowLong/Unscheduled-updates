var list = document.getElementsByClassName('output')[0];
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
var products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'
]
for (var i = 0; i < products.length; i++) {
    // 注意此处不能等于products.length 不然将有一个不存在的undefined 所以products[i].split()方法将有一个报错
    // shift + alt + F全代码对齐
    var newArr = products[i].split(":");
    total += (+newArr[1]);
    itemText = newArr[0] + '-$' + newArr[1];

    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
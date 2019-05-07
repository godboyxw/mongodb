"use strict";
function add() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        sum += items[i];
    }
    console.log(sum);
    return sum;
}
console.log(add(1, 2, 3, 4, 5)); //剩余参数  ts独有,js不支持
//将这些实参以数组形式存为定义好的数组items,再利用扩展运算符将其转为参数序列

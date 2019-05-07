// 扩展运算符（spread）是三个点（...）。
// 它好比 rest 参数的逆运算，将一个数组/伪数组转为用逗号分隔的参数序列。
console.log(...[1,2,3]); //1 2 3
console.log(1,2,...[3,4,5],6); //1 2 3 4 5 6

//伪数组也可以使用扩展运算符
console.log(...document.querySelectorAll('div')); //<div></div> <div></div> <div></div> <div></div>
console.log([...document.querySelectorAll('div')]); //[div, div, div, div]


// 该运算符主要用于函数调用。
function sum(x,y,z){
    return x + y + z
}
console.log(sum(...[1,2,3])); //6

function push(array, ...items) {
    array.push(...items);
    console.log(array); //[1, 2, 3, 4]
}
push([1,2],...[3,4])

function add(a,b,c,d,e){
    sum = a+b+c+d+e
    return sum
}
console.log(add(...[1,2,3,4,5])); //15

function add2(){
    /*
    var items = []
    //arguments  //是一个对应于传递给函数的参数的类数组对象。 实参类数组
    console.log(arguments);//Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    for(var i=0;i<arguments.length;i++){ 
        items[i] = arguments[i]
    }
    var sum = 0
    for(var j=0;j<items.length;j++){
        sum +=items[j]
    }
    */
   
    var sum = 0
    for(var j=0;j<arguments.length;j++){
        sum +=arguments[j]
    }
    return sum
}
console.log(add2(...[1,2,3,4,5])) //15
var f1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("f1 ok!")
            resolve("f1 ok!");
        }, 1000)
    });
}

var f2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("f2 ok!")
            resolve("f2 ok!");
        }, 3000)
    });
}

var f3 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("f3 ok!")
            resolve("f3 ok!");
        }, 2000)
    });
}

// Promise.all([f1(),f2(),f3()]).then(res => {
//     console.log(res);
// })
/*
f1 ok!
f3 ok!
f2 ok!
[ 'f1 ok!', 'f2 ok!', 'f3 ok!' ]
 */

//  f1().then(f2).then(f3)
 /*
f1 ok!
f2 ok!
f3 ok!
*/

// f1().then(res=>{
//     return f2()
// }).then(res => {
//     return f3()
// })
/*
f1 ok!
f2 ok!
f3 ok!
*/
//then是按照顺序执行，参数既可以是一个普通函数，也可是是一个返回promise的函数

function fn(all){
    var promise = Promise.resolve()
    all.forEach(item=>{
        promise = promise.then(item)
    })
}
fn([f1,f2,f3])
/*
f1 ok!
f2 ok!
f3 ok!
*/
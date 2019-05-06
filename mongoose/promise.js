async function p1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    });
}
p1().then(res=>{
    console.log(res); //1
})

// async function getResult(){
//     const result = await p1()
//     console.log(result)
// }
// getResult() //1


function p1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    });
}

function p2(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(2 + value);
        }, 1000);
    });
}


// function p3() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(3);
//         }, 1000);
//     });
// }

// p3().then(function(res){
//     console.log(res); //3
// })


// p1().then(function (res) {
//     console.log(res); // 1000ms后输出1
//     return Promise.resolve(res); // 这句是为了使then返回的promise对象变成fulfilled状态，否则下面的then不会执行
// }).then(p2).then(function (res) {
//     console.log(res); // 再过1000ms后输出3
// });

// p1().then(res=>{
//     console.log(res) //1
//     return res //then返回新的promise(需要使用return关键字)
// }).then(p2).then(res=>{
//     console.log(res) //3
// })


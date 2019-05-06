var promise1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // console.log("f1 ok!")
            resolve("promise1 ok!");
        }, 1000)
    });
}

var promise2 = function (x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // console.log("f2 ok!")
            resolve("promise2 ok!" + x);
        }, 3000)
    });
}

var promise3 = function (x,y) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // console.log("f3 ok!")
            resolve("promise3 ok!" + x + y);
        }, 2000)
    });
}
// 业务场景:你很可能遇到过这样的场景，调用promise1，使用promise1返回的结果去调用promise2，然后使用两者的结果去调用promise3。

//使用promise
/** 
promise1().then(res1 => {
    console.log(res1); // promise1 ok! 
    // 第一个promise执行成功后resolve的结果即是链式调用then(接收函数或返回值为promise的函数的函数名为参数)
})

promise1().then(res1 => {
    console.log(res1); // promise1 ok! 
    return promise2(res1) //手动return下一个promise对象,并将res1作为promise2的实参
}).then(res2 => {
    console.log(res2); //promise2 ok!promise1 ok!  
    // promise2执行成功后resolve的结果(依赖promise1的结果)即是res2
})

let res1_result
promise1().then(res1 => {
    console.log(res1); // promise1 ok! 
    res1_result = res1 //存一下res1的结果
    return promise2(res1) 
}).then(res2 => {
    console.log(res2); //promise2 ok!promise1 ok!  
    return promise3(res1_result,res2)
}).then(res3 =>{
    console.log(res3); //promise3 ok!promise1 ok!promise2 ok!promise1 ok!
})
**/


/*
promise1().then(res1=>{
    console.log(res1); //promise1 ok!
    return Promise.all([res1,promise2(res1)])
}).then(([res1,res2])=>{
    console.log(res1,res2); //'promise1 ok!'      'promise2 ok!promise1 ok!' 
    return promise3(res1,res2)
}).then(res3=>{
    console.log(res3); //promise3 ok!promise1 ok!promise2 ok!promise1 ok!
})*/

// var str = '{name : "xw",age : 26}'
// function getJSON(){
//     return new Promise((resolve,reject)=>{
//         resolve(str)
//     })
// }

// //使用promise
// //在下面的promise示例中，try/catch不能处理JSON.parse的错误，因为它在Promise中。我们需要使用.catch，这样错误处理代码非常冗余。并且，在我们的实际生产代码会更加复杂。
// const makeRequest = ()=>{
//     try{
//         getJSON().then(res=>{
//             console.log(res); // {name : "xw",age : 26}
//             var data = JSON.parse(res)
//             console.log(data);
//         }).catch(err=>{ //处理异步代码的错误
//             console.log(err.message); //Unexpected token n in JSON at position 1
//         })
//     }catch(err){
//         console.log(err.message); //无法捕获错误,catch已经在Promise中使用了
//     }
    
// }
// makeRequest()



//使用async/await
// const makeRequest = async ()=>{ //await is only valid in async function
//     try{
//         var result1 = await getJSON()
//         console.log(result1);  //{name : "xw",age : 26}
//         var data = JSON.parse(result1)
//         console.log(11)
//     }catch(err){
//         console.log(err.message); // Unexpected token n in JSON at position 1
//     }
// }
// makeRequest()




const mongoose = require('mongoose')
// var db = mongoose.createConnection('mongodb://127.0.0.1:27017/NodeJS'); 
// // 链接错误
// db.on('error', function(error) {
//     console.log(error);
// });
var Schema = mongoose.Schema
var mongooseSchema = new Schema({
    name: String,
    age: Number

})
var url = 'mongodb://localhost:27017/NodeJS'
mongoose.connect(url)

mongoose.connection.on('connected', function () {
    console.log('连接成功')
})
mongoose.connection.on('error', function () {
    console.log('连接失败')
})
mongoose.connection.on('disconnected', function () {
    console.log('连接断开')
})
var mongooseModel = mongoose.model('mongoose', mongooseSchema)
// let data = new mongooseModel({
//     name : 'xw',
//     age :26
// })
// data.save()

function query() {
    return new Promise((resolve, reject) => {
        mongooseModel.findOne({})
            .exec(function (err, doc) {
                if (err) {
                    reject({
                        status: 'err',
                        data: err.message
                    })
                } else {
                    console.log(doc) //{ _id: 5cce5cc08c43804bc8cefd59, name: 'xw', age: 26, __v: 0 }
                    resolve({
                        status: 'OK',
                        data: doc
                    })
                }
            })
    })
}
var result
// query().then(res=>{
//   result = res
//   console.log(result);
//   /*
//   { 
//     status: 'OK',
//     data:{ _id: 5cce5cc08c43804bc8cefd59, name: 'xw', age: 26, __v: 0 } 
//   }
//    */
// })

async function fn(){
    result = await query()
    console.log(result);
    /*
      { 
        status: 'OK',
        data:{ _id: 5cce5cc08c43804bc8cefd59, name: 'xw', age: 26, __v: 0 } 
      }
    */
}
fn()
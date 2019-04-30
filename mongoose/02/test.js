var mongoose = require('mongoose') //在项目中包含mongoose
mongoose.connect('mongodb://localhost:27017/test') //在我们本地运行（localhost）的MongoDB实例上打开与数据库的连接
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log("连接成功") //与在localhost上运行的测试数据库有挂起的连接。如果我们成功连接或发生连接错误，我们现在需要收到通知
})
var Schema = mongoose.Schema //Schema: 相当于一个数据库的模板
var kittySchema = new Schema({ //使用Mongoose，一切都来自Schema。让我们来参考它并定义我们的小猫。
  name: String //我们有一个带有一个属性的模式name，它将是一个 String
})

/** 
var Kitty = mongoose.model('Kitty', kittySchema) //下一步是将模式编译为模型   Model可以通过mongoose.model 集成其基本属性内容. 当然也可以选择不继承
var silence = new Kitty({ //通过 new Model()初始化得到具体的实例instance
  name: 'Silence' //模型是用于构造文档的类。在这种情况下，每个文档都将是一个小猫，其属性和行为在我们的模式中声明。
})
console.log(silence.name) //Silence
silence.save(function (err, res) {
  if (err) return console.error(err)
  console.log(res) //{ _id: 5c6f5ac2f4ea3131044e7527, name: 'Silence', __v: 0 }
})
**/

//小猫可以喵喵叫，让我们来看看如何在我们的文档中添加“说话”功能
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name ? 'my name is' + this.name : 'i do not have a name'
  console.log(greeting)
}
var Kitten = mongoose.model('Kitten', kittySchema); //添加到methods模式属性的函数将编译到Model原型中并在每个文档实例上公开：
var fluffy = new Kitten({
  name: 'flutty'
})
fluffy.speak() //my name isflutty  speak函数执行，console.log(greeting)


//我们有说话的小猫！但是我们还没有向MongoDB保存任何内容。可以通过调用其save方法将每个文档保存到数据库中。回调的第一个参数如果发生任何错误将是一个错误。
/** fluffy.save(function (err, res) {
  if (err) return console.error(err)
  console.log(res) //{ _id: 5c6f5db620335c24e46117ce, name: 'flutty', __v: 0 }
  res.speak() //my name isflutty
})
**/

//时间流逝，我们想要显示我们见过的所有小猫。我们可以通过我们的Kitten 模型访问所有小猫文档
/** Kitten.find(function (err, res) {
  if (err) return console.error(err)
  console.log(res, '...') //数据的集合，数组
})
**/
//Kitten.find({ name: /^fluff/ }, callback);  按名称过滤我们的小猫查询 Mongoose支持MongoDB丰富的查询语法。
//这将搜索具有以“Fluff”开头的name属性的所有文档，并将结果作为一组kittens返回给回调。


// Kitten.update({'name' : 'flutty'},{'name' : 'dongmao'},function(err,res){ //Model.update(conditions, update, [options], [callback]) 更新一个
//   if(err) return console.error(err)
//   console.log(res) //{ n: 1, nModified: 1, ok: 1 }
// })

/** 
Kitten.updateMany({'name' : 'flutty'},{'name' : 'dongmao'},function(err,res){  //更新所有
  if(err) return console.error(err)
  console.log(res) //{ n: 5, nModified: 5, ok: 1 }
})
**/

Kitten.remove({'name' : 'dongmao'},function(err,res){ //删除所有满足条件的
  if(err) return console.error(err)
  console.log(res) //{ n: 6, ok: 1, deletedCount: undefined }
}) 
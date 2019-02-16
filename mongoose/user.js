/**
 * 
 * 定义好了Schema，接下就是生成Model。

　　model是由schema生成的模型，可以对数据库的操作

　　我们对上面的定义的user的schema生成一个User的model并导出，修改后代码如下
 **/
var mongoose = require('./db'),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  username : { type: String },                    //用户账号
  userpwd: {type: String},                        //密码
  userage: {type: Number},                        //年龄
  logindate : { type: Date}                       //最近登录时间
})

module.exports = mongoose.model('User',UserSchema);
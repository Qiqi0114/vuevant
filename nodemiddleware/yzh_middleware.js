/*
    NodeJs 中间件服务器
*/
var express = require('express');
var app = express();

// 设置允许跨域访问该服务
app.all('*',function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers","X-Requestd-With");
  res.header("X-Powered-By",'3.2.1')
  res.header("Content-Type","application/json;charset=utf-8");
  next()
});


app.get('/get_tabbtn_list',function(req,res){
  var tabBtnList=['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','全球特色']
  res.send( tabBtnList );
});

app.listen(8081,function(){
  console.log('8081,网易严选中间件，已经运行！');
});

var express = require('express');
var router = express.Router();
var conn = require('../db.js')		
/* GET home page. */
router.get('/', function(req, res, next) {
	
	//这地方还用调用 conn.connect() 方法吗？
	//再选中表之前还用 use stumanager 打开数据库吗？
	var use = "use stumanager";
  var  sql = 'SELECT * FROM users';
  conn.query(use);
  conn.query(sql,function(err,result){
  	if(err){
  		return console.log(err)
  	}
  	console.log(result);
  	res.render('userList',{rows: result,name:"yangshenling"})
  })
});
router.get('/addUserList1', function(req, res, next) {
  res.render('userAdd1', { title: 'Express',name:'陈文腾',age:18 });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express',name:'陈文腾',age:18 });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express',name:'陈文腾',age:18 ,callFarther:'hello',hello:'hello'});
});

router.get('/addUserList', function(req, res, next) {
  res.render('userAdd', { title: 'Express' });
});
router.post('/addUserList', function(req, res, next) {
 		//1.获取用户信息
 		console.log(req.body);
 		var uname=req.body.username123;
 		var upass=req.body.password123;
 		var uemail = req.body.email;
 		var usex=req.body.sex; 	
 		var utime = new Date();
 		
 		//2.数据进入users表
 		//var use="use stumanager"
 		var sql="insert into users(username,password,email,sex,time) value(?,?,?,?,?)";
 		var sqlarr=[uname,upass,uemail,usex,utime];
 		conn.query(sql,sqlarr,function(err,result){
 			if(err){
 				return console.log(err);
 			}
 			console.log("记录添加成功");
 			res.redirect("/");
 		})
});

//删除记录
router.get('/delete', function(req, res, next) {
	  var id=req.query.ididid  //获取地址栏参数
	  var sql="delete from users where uid=?"
	  var sqlarr=[id];
	  conn.query(sql,sqlarr,function(err,result){
		  	if(err){
		  		return console.log(err)
		  	}else{
		  		console.log("记录删除成功");
		  		res.redirect("/");
		  	}
	  })
});

//修改用户
//1.显示旧的值
router.get('/update', function(req, res, next) {
  
  var id = req.query.ididid; //获取地址栏参数
  var sql = "select * from users where uid=?";
  var sqlArr = [id];
  conn.query(sql,sqlArr,function(err,result){
  	if(err){
  		return console.log(err);
  	}
	console.log(result)
  	res.render('userUpdate.ejs', { oneRow: result });
  })
});

router.post('/update', function(req, res, next) {
 		//1.获取用户信息
 		console.log(req.body);
 		var uname=req.body.username;
 		var upass=req.body.password;
 		var uemail = req.body.email;
 		var usex=req.body.sex; 	
 		var utime = new Date();
 		
 		//2.数据进入users表
 		//var use="use stumanager"
 		var sql="update users set username=?,password=?,email=?,sex=? where uid=?";
 		var sqlarr=[uname,upass,uemail,usex,req.query.ididid];
 		conn.query(sql,sqlarr,function(err,result){
 			if(err){
 				return console.log(err);
 			}
 			console.log("记录添加成功");
 			res.redirect("/");
 		})
});


module.exports = router;

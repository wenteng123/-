//连接数据库
var mysql = require('mysql');
var conn=mysql.createConnection({//创建数据库连接对象
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'stumanager',
	port: '3306',
	insecureAuth: true,
})

conn.connect(function(err){
	if(err){
		return console.log(err)
	}
	console.log("连接ID"+conn.threadId);
})

module.exports=conn;
const UserDao = require("../../dao/user/user_dao.js");

const UserServices = {
	
	login(req, res, next) {
		const {username, password} = req.body;
		// 数据访问：根据用户名查找用户信息
		UserDao.find({username})
						.then((data)=>{
							// 判断密码
							if (data.length === 1) { // 存在与查找用户名相关的对象
								// 比较密码
								if (password === data[0].password) { // 密码一致
									
									req.session.loginUser = username;
								
									res.json({
										res_code: 1,
										res_error:"",
										res_body: {
											status: 1,
											message: "success",
											data: {
												username: data[0].username
											}
										}});
								} else { // 密码不一致
									res.json({
										res_code: 1,
										res_error:"",
										res_body: {
											status: 0,
											message: "密码错误",
											data: {}
										}});
								}
							res.json();
							} else { // 不存在与查找用户名相关的对象
							res.json({
									res_code: 1,
									res_error:"",
									res_body: {
										status: 0,
										message: "用户名不存在",
										data: {}
									}});
							}
						})
						.catch((err)=> {
						res.json({
							res_code: 0,
							res_error: err,
							res_body: {}
						});
						});
	},
	
	register(req, res, next) {
		const {username, password, email} = req.body;

		// 用户密码加密处理
		// TODO......

		// 将用户注册信息发送到数据访问层处理
		UserDao.save({username, password, email})
					  .then((data)=>{
						console.log(data);
						res.json({res_code:1, res_error:"", res_body:{status: 1, message:"success", data:{username: data.username}}});
						
						req.session.loginUser = username;
					  })
					  .catch((err)=>{
						console.log(err);
						res.json({res_code:1, res_error:"", res_body:{status: 0, message:"failed:" + err, data: {}}});
					  });
	},
	
	check(req, res, next) {

	},
	
	logout(req, res, next) {
		req.session.loginUser = null;
		res.json({
			res_code:1,
			res_error:"",
			res_body:{
				status:1
			}
		})
	}
	
}

module.exports = UserServices;

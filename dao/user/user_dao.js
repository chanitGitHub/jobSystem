// 引入 "User" 的 Model
const {User} = require("../model/model.js");

// 用户数据访问处理
const UserDao = {
	// 保存用户数据
	save(userinfo) { // {username:"xiaoming", password:"abc", email:"xiao@qq.com"}
		// 根据 Model 创建 "document(文档)"
		const user = new User(userinfo);
		// 保存到集合中，并返回保存结果的 Promise 对象
		return user.save();
	},
	// 查找用户数据
	find(condition) {
		return User.find(condition);
	}
}

module.exports = UserDao;
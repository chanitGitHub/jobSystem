// 引入 "mongoose" 依赖
const mongoose = require('mongoose');
// 连接数据库：html_stu
mongoose.connect('mongodb://localhost/html_stu');

// Schema-数据结构：用户
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	regTime: Date
});

// Schema-数据结构：职位
const positionSchema = new mongoose.Schema({
	companyLogo: String,
	positionName: String,
	companyName: String,
	workExperience: String,
	positionType: String,
	workAdders: String,
	money: Number
});

// Model-集合：用户集合
const User = mongoose.model('user', userSchema); // 对应 "users" 集合
// Model-集合：职位集合
const Position = mongoose.model('position', positionSchema); // 对应 "positions" 集合

module.exports = {User, Position};
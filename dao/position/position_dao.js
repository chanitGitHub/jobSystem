const {Position} = require("../model/model.js")

const PositionDao = {
	// 保存职位数据
	save(positionInfo) {
		const position = new Position(positionInfo);
		return position.save();
	},
	
	findByPage(page) {
		const pageSize = 5; // 默认每页显示5条数据
		return Position.find({}).limit(pageSize).skip((page - 1) * pageSize);
	}
	
}

module.exports = PositionDao;

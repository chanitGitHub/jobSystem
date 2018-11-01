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
	},
	
	remove(_src){
		return Position.remove({_id:_src});
	},
	
	findById(id){
		return Position.find({_id:id});
	},
	
	updata(positionId,upd){
		return Position.findOneAndUpdate({_id:positionId},upd); // update() 也可以
	}
	
}

module.exports = PositionDao;

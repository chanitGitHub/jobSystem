const PositionDao = require("../../dao/position/position_dao.js")

const PositionService = {
	// 添加职位
	add(req, res, next) {
		// 获取 POST 请求中传递的数据
		const {positionName, companyName, workExperience, positionType, workAdders, money} = req.body;
		// 上传的文件名
		let companyLogo = "";
		if (req.file) {
			companyLogo = "/images/upload/" + req.file.filename;
		}
		// 保存到数据库中
		PositionDao.save({positionName, companyName, workExperience, positionType, workAdders, money, companyLogo})
					.then((data) => {
						res.json({
							res_code: 1,
							res_error: "",
							res_body: {
								status: 1,
								data: data
							}
						});
					})
					.catch((err) => {
						res.json({
							res_code: 0,
							res_error: err,
							res_body: {}
						})
					});
	},

	findByPage(req, res, next) {
		// 获取查询的页码
		const {page} = req.query;
		// 查询指定页码的数据
		PositionDao.findByPage(page)
					.then((data) => {
						res.json({
							res_code: 1,
							res_error: "",
							res_body: {
								status: 1,
								list: data
							}
						});
					})
					.catch((err) => {
						res.json({
							res_code: 0,
							res_error: err,
							res_body: {}
						});
					});
	},
	
	delPosition(){}

};

module.exports = PositionService;
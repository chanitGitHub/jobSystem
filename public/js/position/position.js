function Position() {
	this.loadData();
	this.addListener();
}

Position.PositionRowTemplate = `
	<tr>
		<td><%= _id %></td>
		<td><img src="<%= companyLogo %>" style="width:40px;"/></td>
		<td><%= positionName %></td>
		<td><%= companyName %></td>
		<td><%= workExperience %></td>
		<td><%= positionType %></td>
		<td><%= workAdders %></td>
		<td><%= money %></td>
		<td><a href="#">修改</a> <a href="#">删除</a></td>
	</tr>
`;

$.extend(Position.prototype, {
	
	addListener() {
		$(".btn-add-pos").on("click", this.addPosHandler);
		$(".pagination").on("click", "a", $.proxy(this.loadDataHandler, this));
	},
	// 翻页处理
	loadDataHandler(event) {
		const $src = $(event.target);
		const page = Number($src.text());
		this.loadData(page);
		// 标签使用类名处理
		$src.parent("li").addClass("active").siblings("li").removeClass("active");
	},
	
	loadData(page) {
		page = page || 1;
		const url = "/api/positions/find_by_page?page=" + page;
		// get请求
		$.getJSON(url, (data) => {
			if (data.res_code === 1) {
				let html = "";
				data.res_body.list.forEach((curr)=>{
					html += ejs.render(Position.PositionRowTemplate, curr);
				});
				$(".table-position tbody").html(html);
			}
		});
	},
	
	addPosHandler() {
		// 获取表单中的数据
		const url = "/api/positions/add";
		// 向服务器发送的数据
		const data = new FormData($(".form-add-pos").get(0));
		// 发送请求
		$.ajax({
			type: "post",
			url: url,
			data: data,
			dataType: "json",
			processData: false, // 不将 data 数据转换为查询字符串，key—value
			contentType: false, // 不使用默认的 "application/x-www-form-urlencoded"
			success: function(data) {
				if (data.res_body.status === 1) { // 添加成功，使用 ejs 浏览器端模板渲染
					// data.res_body.data
					// 使用 ejs 模板渲染
					const html = ejs.render(Position.PositionRowTemplate, data.res_body.data)
					// 显示
					$(".table-position tbody").append(html);
					// 关闭模态框
					$("#addModal").modal("hide");
				} else { // 添加失败
					$(".add-pos-error").removeClass("hidden");
				}
			}
		});
	}
	
});

new Position();
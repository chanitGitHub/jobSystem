function LoginModal() {
	this.createDom();
	this.addListener();
	this.genCode();
}

// 模态框HTML模板
LoginModal.ModalTemplate = `<div class="modal fade" id="loginModal" tabindex="-1">
	  <div class="modal-dialog">
	    <div class="modal-content">
			
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	        <h4 class="modal-title" id="loginModalLabel">用户登录</h4>
				</div>
				
	      <div class="modal-body">
					<div class="alert alert-danger hidden login_error">用户名或密码错误</div>
	        <form class="form_login">
						<div class="form-group">
							<label for="loginUsername">用户名</label>
							<input type="text" class="form-control" name="username" id="loginUsername" placeholder="请输入用户名">
						</div>
						<div class="form-group">
							<label for="loginPassword">密码</label>
							<input type="password" class="form-control" name="password" id="loginPassword" placeholder="请输入密码">
						</div>
						<div class="form-group">
							<label for="loginCode">验证码</label>
							<input type="text" class="form-control input-code" id="loginCode" placeholder="请输入验证码">
							<div class="code"></div>
						</div>
					</form>
	      </div>
				
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary btn_login">登录</button>
	      </div>
				
	    </div>
	  </div>
	</div>`;

$.extend(LoginModal.prototype, {
	// 创建DOM
	createDom() {
		$("body").append(LoginModal.ModalTemplate);
	},
	
	addListener(){
		$(".btn_login").on("click",this.loginHandler);
		$(".code").on("click", this.genCode);
		$(".input-code").on("blur", this.codeHandler);
	},

	loginHandler(){
		// serialize()序列化方法，返回一个查询字符串，登录用户名和密码的数据
		const data = $(".form_login").serialize();
		
		const url = "/api/users/login";
		$.post(url, data, (data)=>{
			if(data.res_body.status === 1){
				sessionStorage.username = data.res_body.data.username;
				location.reload();
			}else{
				$(".login_error").removeClass("hidden");
				alert(data.res_body.message);
			}
		},"json")
	},
	
	// 生成验证码
	genCode() {
		$.getJSON("/api/captcha", (data) => {
			$(".code").html(data.res_body.data);
		})
	},
	
	// 校验验证码
	codeHandler(event) {
		const code = $(event.target).val();
		// ajax
		$.getJSON("/api/captcha/verify", {code}, (data)=>{
			if (!data.res_body.valid) {
				alert("验证码错误，请重试");
			}
		})
	}

});
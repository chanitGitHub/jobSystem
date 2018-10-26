function LoginModal() {
	this.createDom();
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
	        <form>
			  <div class="form-group">
			    <label for="loginUsername">用户名</label>
			    <input type="text" class="form-control" id="loginUsername" placeholder="请输入用户名">
			  </div>
			  <div class="form-group">
			    <label for="loginPassword">密码</label>
			    <input type="password" class="form-control" id="loginPassword" placeholder="请输入密码">
			  </div>
			</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary">登录</button>
	      </div>
	    </div>
	  </div>
	</div>`;

$.extend(LoginModal.prototype, {
	// 创建DOM
	createDom() {
		$("body").append(LoginModal.ModalTemplate);
	}
})
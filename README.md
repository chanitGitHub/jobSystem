# 职位管理系统

> 基于 Express + MongoDB 的后台职位管理系统

## 业务

1. 用户注册
2. 用户登录
3. 注销
4. 职位添加
5. 职位修改
6. 职位删除
7. 职位查询

## 前后端分离

前端：

	UI
	将前端UI放置到 public 目录下

后端：

	services目录：业务逻辑层
	dao目录：数据访问层

	API -- CRUD

	用户注册：
		URL: "/api/users/register"
		Method：'POST'
		Param：
			username
			password
			email
		Return：JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					data: {
						username: "xxx"
					}
				}
			}
	用户登录：
		URL: "/api/users/login"
		Method：'POST'
		Param：
			username
			password
		Return：JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					status: 1, -- 1表示登录成功    0表示登录失败（用户名或密码错误）
					message: "success",
					data: {
						username: "xxx"
					}
				}
			}
	用户注销：
		URL: "/api/users/logout"
		Method：'POST'
		Param：
		Return：JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					status: 1,
					message: "success"
				}
			}

	生成验证码：
		URL:"/api/captcha"
		Method: "GET"
		Return: JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					data: "<svg>..........</svg>"
				}
			}

	校验验证码：
		URL:"/api/captcha/verify"
		Method: "GET"
		Param:
			code
		Return: JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					valid: true
				}
			}

	添加职位：
		URL: "/api/positions/add"
		Method: "POST"
		Param:
			company
			logo
			name
			salary
		Return
			JSON {
				res_code: 1,
				res_error: "",
				res_ body: {
					status: 1,
					data: {
						_id,
						company,
						logo,
						name,
						salary
					}
				}
			}

## 数据存储

前端：

	cookie
		存储容量：4KB
		存储条数
		占用网络上传带宽
		有时效性   expires   max-age
		document.cookie = "key=value;expires=xx;path=xx;domain=xx;secure"
		document.cookie 返回以 "; " 串联的所有 cookie 字符串
	localStorage
		存储容量：5MB
		永久存储
		localStorage.setItem(key, value) 或 localStorage.<key> = value
		localStorage.getItem(key) 或 localStorage.<key>
	sessionStorage
		存储容量：5MB
		会话存储

## express-session

[express-session](https://www.npmjs.com/package/express-session)

服务器使用 session 会话跟踪

## 验证码：

[svg-captcha](https://www.npmjs.com/package/svg-captcha)

生成svg格式的验证码

## mongoose

[mongoose](https://mongoosejs.com/)

处理 MongoDB 数据库访问

## Multer 

[Multer](https://www.npmjs.com/package/multer)

上传文件
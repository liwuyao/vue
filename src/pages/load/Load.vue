<template>
	<div class="load">
		<div class="logintit">
			<div class="logintitcon">
				<span class="zuojian"><img src="../../../static/imags/load/fanhui.png"></span>
				<h4>登录</h4>
				<span class="register">注册</span>
			</div>
		</div>
<!--	中间-->
	<div class="startmain logpasswd curr">
		<form id="loginForm" method="post">
			<div class="input_phone input_value loginphone">
	  			<img src="../../../static/imags/load/phone.png">
				<input type="text" id="phoneNum" name="phoneNum" value="" placeholder=" 手机号码/邮箱">
			</div>
			<div class="input_mima input_value loginpwd">
	  			<img src="../../../static/imags/load/suo.png">
	  			<input type="password" id="password" name="password" value="" placeholder=" 密码">
	  			<span class="forgetma">忘记密码？</span>
	  		</div>
	  		
	  		<div class="btn_disable_ input_sub loginsub">
	  			登录
	  		</div>
		</form>
	</div>
	</div>
</template>

<script>
export default {
  name: 'load',
}
</script>

<style scoped>
.logintit {
    border-bottom: 1px solid #dbdbdb;
}
.logintit .logintitcon {
    /* width: 90%; */
    margin: 0 auto;
    font-size: 0.2rem;
	}
	.zuojian {
    position: absolute;
    color: #c9c9c9;
    line-height: 0.4rem;
    top: 0px;
    left: 20px;
}
.logintit h4 {
	font-weight: 100;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.2rem;
    color: #585858;
}
.logintit .logintitcon .register {
	font-weight: 100;
    right: 20px;
    top: 0px;
    color: #737373;
    font-size: 0.16rem;
    position: absolute;
    line-height: 0.4rem;
}
.zuojian img {
    display: inline-block;
    width: 12px;
}
/*中间*/
.startmain {
    width: 84%;
    margin: 0 auto;
    line-height: 0.26rem;
    font-size: 0.14rem;
    margin-top: 10%/*锟睫革拷2.23*/;
}
.startmain .input_value {
    border-bottom: 1px solid #ccc;
    padding: 6px 0;
    position: relative;
    margin-top: 0.16rem;
}
.startmain img {
    display: inline-block;
    height: 0.22rem;
    /* margin-right: 0.5rem; */
}
.startmain input {
	border: none;
	outline: none;
	height: 0.31rem;
    border: none;
    width: 80%;
    padding-left: 5px;
}
.startmain .input_value {
    border-bottom: 1px solid #ccc;
    padding: 6px 0;
    position: relative;
    margin-top: 0.16rem;
}
.startmain .input_sub {
    background-color: #ff7272;
    color: #fff;
    text-align: center;
    margin-top: 0.6rem;
    line-height: 40px;
    cursor: pointer;
}
.input_mima span {
    color: #a9a9a9;
    position: absolute;
    right: 0;
        line-height: 0.26rem;
    font-size: 0.14rem;
}
</style>
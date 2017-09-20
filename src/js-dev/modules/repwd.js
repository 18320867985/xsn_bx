/*重置密码*/ ;
(function($) {

	var repwd = {
			name:"242423",
			init: function() {
			repwd.pwd1 = false;
			repwd.pwd2 = false;

			//验证新密码
			$(".reg-list .pwd").on("keyup", function() {

				ch1(this);
			});

			//验证确认密码
			$(".reg-list .pwd2").on("keyup", function() {
				ch2(this);
			});

			//ff1
			function ch1(obj) {
				var p = $(obj).parents(".reg-list");
				var v = $(obj).val().trim();
				var v2 = $(".pwd2", p).val().trim();
				if(v === "") {
					isPwd(false);
					$(".reg-error").addClass("is-show");
					$(".reg-error .error-txt").text("密码不能为空！");
					return repwd.pwd1 = false;
				}
				if(v.length >= 8) {
					repwd.pwd1 = true;
					$(".reg-error").removeClass("is-show");

					//比较两次密码是否相同
					if(v2.length > 0) {

						if(v == v2) {
							repwd.pwd2 = repwd.pwd1 = true;
							$(".reg-error").removeClass("is-show");
						} else {
							repwd.pwd1 = true;
							repwd.pwd2 = false;

							$(".reg-error").addClass("is-show");
							$(".reg-error .error-txt").text("两次密码不相同！")
						}
					}

				} else {
					repwd.pwd1 = false;
					$(".reg-error").addClass("is-show");
					$(".reg-error .error-txt").text("密码长度不能少于8位！")
				}

				var bl = repwd.pwd1 && repwd.pwd2;

				isPwd(bl);

			}

			//ff2
			function ch2(obj) {
				var p = $(obj).parents(".reg-list");
				var v = $(obj).val().trim();
				var v2 = $(".pwd", p).val().trim();

				if(v == "") {
					isPwd(false);
					return repwd.pwd2 = false;

				}
				if(v == v2) {
					repwd.pwd2 = true;

				} else {
					repwd.pwd2 = false;

				}

				var bl = repwd.pwd1 && repwd.pwd2;
				if(bl) {
					$(".reg-error").removeClass("is-show");
				} else {
					$(".reg-error").addClass("is-show");
					$(".reg-error .error-txt").text("两次密码不相同！");
				}

				isPwd(bl);

			}

			//检测两次密码是否相同
			function isPwd(bl) {
				if(typeof bl === 'boolean') {

					if(bl) {
						$(".reg-submit .btn").addClass("active").removeAttr("disabled");

					} else {
						$(".reg-submit .btn").removeClass("active").attr("disabled", "disabled")

					}
				}
			}

		}
	}
	
	repwd.init();

})(window.Zepto)





var login = (function($) {

	var _init = function() {
		

		//change 验证
		$(".login-list input").on("keyup", function() {
			var ck = true;
			
			$(".login-list  input").each(function() {
				if($(this).val() == "" || !$(this).val()) {
					ck = false;
				}
			});

			if(ck) {


				$(".login-submit .btn").addClass("active").removeAttr("disabled");

			} else {
				$(".login-submit .btn").removeClass("active").attr("disabled", "disabled")

			}
		});

	}

	return {
		init: _init
	}
})(window.Zepto)

/*
 * requireJs amd 模块加载
 */

if(typeof define === "function" && define.amd) {
	define("login", [], function() {
		return login;
	});
}

/*
 * es6 模块加载
 */
//
if(typeof exports === 'object' && typeof module !== 'undefined') {

	module.exports.login = login;
}
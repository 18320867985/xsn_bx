
/*表单验证*/

var vd = (function($) {

	var obj = {
		arrs: [],

		checkObj: function(formName) {
			if(typeof formName === "undefined") {
				formName = "form";
			};
			$this = this;
			$("[name=" + formName + "] [name]").each(function() {
				var name = $(this).attr("name");
				
				var req_msg = $(this).attr("vd-req-msg");
				var pattern_msg = $(this).attr("vd-pattern-msg");
				var errorMsg = "";
				if(typeof req_msg !== "undefined") {
					errorMsg = req_msg;
				} else if(typeof pattern_msg !== "undefined") {
					errorMsg = pattern_msg;
				} else {
					errorMsg = "";

				}

				if(name !== ""||name!=="btn"||name!=="submit") {
					var obj = {};
					obj.pName = formName; //表单name
					obj.elName = name; // 元素name
					obj.errorMsg = errorMsg; // 验证错误提示信息
					obj.bl = false;
					$this.arrs.push(obj);

				}
			});

		},

		addVidation: function() {

			for(var i = 0; i < this.arrs.length; i++) {
				var _obj = this.arrs[i];
				var el = document.forms[_obj.pName][_obj.elName];

				$(el).on("keyup", _obj, function(event) {
					this.checkElement(event.data,event.target);
				}.bind(this));
				$(el).on("change", _obj, function(event) {
					this.checkElement(event.data,event.target);
				}.bind(this));

			}

		},

		checkElement: function(_obj2,el) {

			var v = el.value.trim();
			var _req = el.getAttribute("vd-req");
			var _req_msg = el.getAttribute("vd-req-msg");
			var _pattern = el.getAttribute("vd-pattern");
			var _pattern_msg = el.getAttribute("vd-pattern-msg");
			var _btn=document.forms[_obj2.pName]["submit"];

			// 非空验证
			if(_req != null) {
				if(v.trim() === "") {

					_obj2.bl = false;
					_obj2.errorMsg = _req_msg;
					var p=$(el).parents(".vd-box");
					$(p).addClass("vd-error vd-req ");
					$(el).addClass("vd-req");
					
					$(".dep-btn",p).addClass("error"); //依赖按钮
				
			
					return;
				} else {
					_obj2.errorMsg = "";
					var p=$(el).parents(".vd-box");
					$(p).removeClass("vd-error vd-req ");
					$(el).removeClass("vd-req");
					
					$(".dep-btn",p).removeClass("error"); //依赖按钮
					
				}
			}

			// 正则验证
			if(_pattern != null) {

				var reg = new RegExp(_pattern, "i");
				if(!reg.test(v)) {
					_obj2.errorMsg = _pattern_msg;
					_obj2.bl = false;
					var p=$(el).parents(".vd-box");
					$(p).addClass("vd-error vd-pattern");
					$(el).addClass("vd-pattern");
					
					$(".dep-btn",p).addClass("error"); //依赖按钮
				
					
					return;
				} else {
					_obj2.errorMsg = "";
					var p=$(el).parents(".vd-box");
					$(p).removeClass("vd-error vd-pattern");
					$(el).removeClass("vd-pattern");
					
					$(".dep-btn",p).removeClass("error"); //依赖按钮
					
				}
			}

			_obj2.bl = true;
			
			

		},

		isSuccess: function(successFun, errorFun) {

			// 添加错误样式
			//this.addErrorStyle();

			// 是否全部验证成功
			for(var i = 0; i < this.arrs.length; i++) {
				var _obj = this.arrs[i];
				if(!_obj.bl) {

					errorFun(_obj.errorMsg);
					return false;
				}

			}

			successFun();
			return true;

		},

		init: function(formName) {
			this.checkObj(formName);
			this.addVidation();
		},
		getObjs:function(){
			
			return this.arrs;
		}
	}

	return obj;

})(window.Zepto);
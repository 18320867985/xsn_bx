/*我要报修*/
var baoxiu = (function($) {


	var _init = function() {

		// 日期组件
		var btns = mui('#select-date');
		btns.each(function(i, btn) {

			btn.addEventListener('tap', function() {
				var optionsJson = this.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);

				/*
				 * 首次显示时实例化组件
				 * 示例为了简洁，将 options 放在了按钮的 dom 上
				 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
				 */
				var picker = new mui.DtPicker(options);
				picker.show(function(rs) {

					document.querySelector("#select-date").value = rs.text;

					//	alert( rs.text);

					picker.dispose();

				});

			}, false);
		});

		// h5 上传图片
		$(".btn-up").on("click", function() {

			$("#fileUp").click();

		});

		$("#fileUp").change(function() {
			fileupff(this);
		});

		var fileupff = function(obj) {

			$(obj).parents(".progress-box").find(".progress-all").show();
			var file = document.getElementById("fileUp").files[0];
			h5File.upload({
				data: file, //选择的文件
				url: "", //上传网址
				outTime: 30000,
				el: $(obj), //当前element
				size: 300000000, //1M=1000000
				seccess: function(data) {
					
					if( typeof data.url !=='undefined'){
						document.querySelector(".upload-img").src =data.url;
						document.querySelector(".progress-box .file-up").value=data.url;
					}
					
				}, //成功回调
				error: function(data) {
					alert("数据加载失败...");
					
					// 以下代码 测试使用  发布注释掉
					document.querySelector(".upload-img").src = "images/劲爆图片.png";
					document.querySelector(".progress-box .file-up").value="images/劲爆图片.png";

				} //错误回调

			}); //调用上传接口
		}

	}

	return {
		init: _init
	}
})(window.Zepto);
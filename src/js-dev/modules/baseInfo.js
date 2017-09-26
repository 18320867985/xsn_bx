
/*基本信息*/

var baseInfo = (function($) {
	var obj = {

		editor: function(fn) {
			// 修改信息框
			
			$(".editor a").on("tap", function() {
				
				$(".baseinfo-alert").show(); // 大框show
				var p = $(this).parents(".editor");
				var v = $(".xx-item",p);
				var filed = $(v).attr("data-filed");
				$(".baseinfo-alert").find(".txt-v").val(v.text());
				$(".baseinfo-alert").find(".txt-v").attr("data-filed", filed);

			});

			// 返回
			$(".baseinfo-alert .close").on("tap", function() {

				$(".baseinfo-alert").hide(); // 大框hide
			});
				
			// 修改保存
			$(".baseinfo-alert .btn").on("click",fn);
			
		}
	}

	return {
		editor: obj.editor
	}
})(window.Zepto);


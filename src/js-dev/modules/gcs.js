var gcs = (function($) {

	var _init=function() {
		
			// 星级
			$(".gcs .xing-box .iconfont").on("tap", function() {
	
				var _index = $(this).index();
	
				$(".gcs .xing-box .iconfont").each(function() {
	
					var _index2 = $(this).index();
	
					if(_index2 <= _index) {
	
						$(this).removeClass("icon-xing ").addClass("icon-xing-2 text-warning");
						
					} else {
						$(this).removeClass("icon-xing-2 text-warning").addClass("icon-xing");
					}
	
				});
				
				//点击触发自定义事件
				$(this).trigger("gcs_select_star",[this]);
	
			});
	
			//取消所有星
			$(".gcs .xing-box-btn").on("tap", function() {
	
				$(".gcs .xing-box .iconfont").removeClass("icon-xing-2 text-warning").addClass("icon-xing");
	
			});


	}

	return {
		init: _init
	}

})(window.Zepto);
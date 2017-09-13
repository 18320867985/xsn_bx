/*复选框
 * <ul>
 * 	<li class="checkbox-btn-box"> 
 * 		<a class="item">技术牛逼</a>
 * 	</li>
 * 	<li class="checkbox-btn-box"> 
 * 		<a class="item">信息大师</a>
 * 	</li>
 * </ul>
 * 
 * 		// 选中点击事件
		$(".checkbox-btn-box").on("checkbox-btn_select",function(event,element){			
			
			// element 当前点击的元素
			alert($(element));
		}
		
		// 取消点击事件
		$(".checkbox-btn-box").on("checkbox-btn_unselect",function(event,element){			
			
			// element 当前点击的元素
			alert($(element));
		}
 * 
 * */

;(function() {

	//技术标签
	$(".checkbox-btn-box .item").on("tap", function() {

		if(typeof $(this).attr("data-bl") == "undefined") {
			$(this).addClass("active");
			$(this).attr("data-bl", "true");

			//点击触发自定义事件
			$(this).trigger("checkbox-btn_select", [this]);

		} else {
			//点击触发自定义事件
			$(this).trigger("checkbox-btn_unselect", [this]);
			$(this).removeClass("active");
			$(this).removeAttr("data-bl");
		}

	});

})(window.jQuery || window.Zepto);
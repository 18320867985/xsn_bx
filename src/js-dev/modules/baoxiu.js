
/*我要报修*/
var baoxiu=(function($){
	
	var _init=function(){
		
		
		
	}
	
			var btns = mui('#select-date');
			
			btns.each(function(i, btn) {

				btn.addEventListener('tap', function() {
					var optionsJson = this.getAttribute('data-options') || '{}';
					var options = JSON.parse(optionsJson);
					var id = this.getAttribute('id');
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
	
	
})(window.Zepto);

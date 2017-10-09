
	mui.init({	
		swipeBack: true //启用右滑关闭功能
	});

	//页脚链接跳转
	$(".mui-bar.mui-bar-tab .mui-tab-item").on("tap", function() {
			
			window.location.href = $(this).attr("href");
		
	});
	

///*****置顶组件start*********/
//	$(window).scroll(function(){
//			
//			if($(window).scrollTop()>=500){
//				$(".zhiding").show();
//			}else{
//				$(".zhiding").hide();
//			}
//			
//			});
//		
//		//置顶点击
//		$(".zhiding").on("tap",function(){
//		mui.scrollTo(0,300);
//	});
//	
///*****置顶组件end*********/
	

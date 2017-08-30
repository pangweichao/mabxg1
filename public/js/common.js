
define(['jquery','template','cookie'],function($,template){
    // NProgress.start();

	// NProgress.done();
    //控制左边导航栏
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
     //退出功能
	 $("#logoutBtn").click(function(){
            $.ajax({
                type:'post',
                url:'/api/logout',
              
                dataType:'json',
                success:function(data){
                    if(data.code==200){
                       
                        location.href='/main/login';
                    }
                }
            })
            return false;
        })

	 var sessionId=$.cookie('PHPSESSID');
	 console.log(sessionId);
	 if(!sessionId&&location.pathname!='/main/login'){
	 	location.href='/main/login';
	 }

	 //获取用户登录信息，并填充页面
	 var cookie=$.cookie('loginInfo');
	 var loginInfo=cookie?JSON.parse(cookie):{};
	 // $('.profile img').attr('src',loginInfo.tc_avatar);
	 // $('.profile h4').html(loginInfo.tc_name);
	 // var tpl='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
	  var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
     var html=template.render(tpl,loginInfo);
     $('#profileId').html(html);
});

	

define(['jquery','cookie'],function($){

	//
     $("#loginBtn").click(function(){

            $.ajax({
                type:'post',
                url:'/api/login',
                data:$("#loginForm").serialize(),
                dataType:'json',
                success:function(data){
                	console.log(data)
                    if(data.code==200){
                        console.log('正确')
                       //存储用户信息到cookie
                       $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
                        location.href='/main/index';
                    }else{
                        alert("用户名或者密码错误");
                    }
                }
            })
            return false;
        })

})
define(['jquery','template','util','bootstrap'],function($,template,util){
    // var pathname=location.pathname;
    // $('.navs a[href="'+pathname+'"]').addClass('active');
     util.setMenu(location.pathname);

    $.ajax({
    	type:'get',
    	url:'/api/teacher',
    	dataType:'json',
    	success:function(data){
            //解析数据并渲染页面
            var html=template("teacherTpl",{list:data.result});
            $('#teacherInfo').html(html);
            $('.preveiw').click(function(){
            	console.log(123)
            	var tcId=$(this).closest('td').attr('data-tcId');
            	$.ajax({
            		type:'get',
            		url:'/api/teacher/view',
            		data:{tc_id:tcId},
            		dataType:'json',
            		success:function(data){
            			console.log(data);
            			var html=template('modalTpl',data.result);
            			$('#modalInfo').html(html);
            			$('#teacherModal').modal();
            		}
            	})
            })

            $('.eod').click(function(){

               var td=$(this).closest('td');
               var tcId=td.attr('data-tcId');
               var tcStatus=td.attr('data-status');
               var that=this;
               $.ajax({
               	   type:'post',
               	   url:'/api/teacher/handle',
               	   data:{tc_id:tcId,tc_status:tcStatus},
               	   dataType:'json',
               	   success:function(data){
                       console.log(data);
               	   	  td.attr('data-status',data.result.tc_status);
                      console.log(data.result.tc_status);
               	   	  if(data.result.tc_status==0){
               	   	  	$(that).html('注 销');
               	   	  }else{
               	   	  	$(that).html('启 用');
               	   	  }
               	   }

               })

            })
    	}
    })
})
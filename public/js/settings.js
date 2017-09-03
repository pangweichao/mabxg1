define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region','validate','form'],function($,template,util,CKEDITOR){
   //设置导航选中
   util.setMenu('/mian/index');
   $.ajax({
   	type:'get',
   	url:'/api/teacher/profile',
   	dataType:'json',
   	success:function(data){
   		// console.log(data)
        var html=template('settingsTpl',data.result);
        $('#settingsInfo').html(html);
        //头像上传
       $('#upfile').uploadify({
        width : 120,
        height : 120,
        buttonText : '',
        itemTemplate : '<span></span>',
        fileObjName : 'tc_avatar',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/avatar',
        onUploadSuccess : function(f,data){
        	console.log(data);
          var data = JSON.parse(data);
          // 修改图片的URL地址
          $('.preview img').attr('src',data.result.path);
        }
      });
       $('#pcd').region({
         url:'/public/assets/jquery-region/region.json'

       });
       //处理富文本
        CKEDITOR.replace('editor',{
        toolbarGroups : [
          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
        ]
      });
       //处理表单提交
       $('#settingForm').validate({
       	  sendForm:false,
       	  valid:function(){

       	  	 for(var instance in CKEDITOR.instances){
            CKEDITOR.instances[instance].updateElement();
          }

            var p=$('#p').find('option:selected').text();
            var p=$('#c').find('option:selected').text();
            var p=$('#d').find('option:selected').text();
            var hometown=p+'|'+c+'|'+d;
       	  	$(this).ajaxSubmit({
       	  		type:'post',
       	  		url:'/api/teacher/modify',
       	  		 data : {tc_hometown:hometown},
       	  		dataType:'json',
       	  		success:function(data){
       	  			console.log(data);
       	  			if(data.status==200){
       	  				location.reload();
       	  			}
       	  		}
       	  	})
       	  }
       })
   	}

   });

 
});
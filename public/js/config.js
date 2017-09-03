require.config({

    baseUrl:'/public/assets',
    paths:{
    	jquery:'jquery/jquery.min',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
    	common:'../js/common',
    	login:'../js/login',
    	index:'../js/index',
    	bootstrap:'bootstrap/js/bootstrap.min',
    	teacherlist:'../js/teacher-list',
    	teacheradd:'../js/teacher-add',
    	util:'../js/util',
    	datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate.min',
        form:'jquery-form/jquery.form',
        settings:'../js/settings',
        uploadify : 'uploadify/jquery.uploadify.min',
        region : 'jquery-region/jquery.region',
        ckeditor:'ckeditor/ckeditor',

    },
    shim:{
    	bootstrap:{
    		deps:['jquery']
    	},
    	language:{
    		deps:['datepicker','jquery']
    	},
    	validate:{
    		deps:['jquery']
    	},
    	uploadify:{
    		deps:['jquery']
    	},
    	ckeditor:{
    		exports : 'CKEDITOR'
    	}
    }
})
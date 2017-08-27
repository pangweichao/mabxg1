
<?php 

//include("./views/main/index.html")
//路由：根据URL的不同导航到不同的页面
//
 //var_dump("$_SERVER")
 //array_key_exists("PATH_INFO",$_SERVER)
 $dir='main';
 $filename='index';
 if(array_key_exists('PATH_INFO', $_SERVER)){
    //获取URL的路径
 	$path=$_SERVER['PATH_INFO'];
 	//   /main/index
 	//   去掉第一个斜杠
 	//$str=substr($path,1);
 	$str = substr($path,1);
 	//分割目录
 	$arr=explode('/', $str);
    if(count($arr)==2){
    	$dir=$arr[0];
    	$filename=$arr[1];
    }else{
    	$filename='login';
    }


 }
 
include('./views/'.$dir.'/'.$filename.'.html')


?>
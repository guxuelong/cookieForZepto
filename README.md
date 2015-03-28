Cookie For Zepto  
=================================== 
创建Cookie
----------------------------------- 
> 设置cookie非常简单。如：<br>
>  * $.cookie("example", "foo"); 

> 要设置cookie的有效期，可以设置expires值。如：<br>
>  * $.cookie("example","foo",{expires:"s10"}); <br>

> expires: 定义cookie的有效时间，默认""
>  *				 s是指秒，  如20秒就是s20
>  *				 h是指小时，如12小时是h12 
>  *				 d是指天数，如30天就是d30
>
> 要设置cookie的保存路径，可以设置path值。如：<br>
>  * $.cookie("example", "foo",{path:"/"}); 

获取Cookie
-----------------------------------
> 使用jQuery获取cookie的值的方法那是相当的简单。如：<br>
>  * $.cookie("example");

删除Cookie 
-----------------------------------
>  * $.cookie("example",null); 或者 $.cookie("example",undefined); 

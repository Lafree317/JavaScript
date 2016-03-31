# JavaScript
学习JavaScript笔记
> 直接在HTML标签中使用JS语法输出一行字

```
<script>
        document.write("Hello,world!");
</script>
```

>HTML调用JS文件

```
// html

<html>
<head>
    <title>My second script</title>
    // 在HTML标签中导入JS文件
    <script src="02-script.js"></script>

</head>
<body>
	// 获取JS文件中的helloMessage字符
    <h1 id="helloMessage">
    </h1>
</body>
</html>

// js 

// 当窗口加载完成时运行writeMessage
window.onload = writeMessage;
function  writeMessage() {
	// 获得字符串Hello, world!并将它放在文档中名为 helloMessage的元素中
	document.getElementById("helloMessage").innerHTML = "Hello wrold!";
}
```

>提示框

```
// html

<head>
    <title>My JavaScript page</title>
    // 导入JS文件
    <script src = "03-alert.js"></script>
</head>
<body>
<noscript>
    <h2>This page requeires JavaScript.</h2>
</noscript>
</body>

// js

alert("Welcome to my JavaScript page!")
// 直接提示框 然后根据点击yes 或no 进行处理
//if(confirm("Are you sure you want to do that?")){
//    alert("You said yes");
//}else {
//    alert("you said no");
//}

// 创建一个变量存储用户输入
var ans = prompt("Are you sure you want to do that?","")
if (ans) {
    alert("You said" + ans)
}else {
    alert("You refused to answer")

}
```

>跳转

```
// html1

<!DOCTYPE html>
<html lang="en">
<head>

    <title>Welcome to our site</title>
    <script src = "04-Link.js"></script>
</head>
<body>
	<h2 class ="centered">
		// 链接另一个html文件 两个a标签中的是链接的显示文字
		<a href = "04-LinkTo.html" id = "redirect" > Welcome to 		our site.. c'mon inl</a>
	</h2>
</body>
</html>

// html2 跳转到的文件

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Our site</title>
</head>
<body>
	<h1>Welcome to our web site, which features lots of cutting-edge JavaScript
	</h1>
</body>
</html>

// js

// 当加完成时执行initAll方法
window.onload = initAll;
function initAll(){
// 点击时执行initRedirect
    document.getElementById("redirect").onclick = initRedirect;
}
// 跳转页面
function initRedirect(){
    window.location = "04-LinkTo.html"
    return false
}
```

>跳转网站

```
// html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome to our site</title>
    // 链接js文件
    <script src="05-RectLink.js"></script>
</head>
<body>
    <h2 class = "centered">
        // 普通展示               跳转地址                  跳转地址的链接显示文字
        Hey,check out <a href="http://www.baidu.com" id="redirect">my cat's web sote</a>
    </h2>
</body>
</html>

// js

// 加载完成时执行initAll方法
window.onload = initAll
function initAll(){
	// 点击时执行initRedirect
    document.getElementById("redirect").onclick = initRedirect
}
// 提示框,点击后执行跳转
function initRedirect(){
    alert("We are not responsible for the content of pages outside our site")
    // 这一行将浏览器窗口设置为关键字 this 指定的位置,this 包含这个链接。目前,只需将 this 看 做一个容器,本书后面会详细介绍它。
    window.location = this
    return false
}

```

>this:

```
JavaScript 关键字 this 使脚本能够根据使用这个关键字的上下文将值传递给函数。在这个示例 中,this 是在一个由标签的事件触发的函数中使用的,所以 this 是一个链接对象。在后面的示例 中,将看到在其他地方使用 this,你应该能够根据使用它的上下文判断出 this 是什么。
```




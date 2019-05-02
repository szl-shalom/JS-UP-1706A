// 1、正确的获取所有的span标签（10分）
var el = document.getElementsByTagName("span");
// 2、正确的提取span中的颜色值（10分）
var backgroundSpan1 = el[0].style.color;  //字符串
var backgroundSpan2 = el[1].style.color;  //数字
var backgroundSpan3 = el[2].style.color;  //布尔
var backgroundSpan4 = el[3].style.color;  //null
// 3、正确的查找到颜色所代表的数据类型DIV盒子，看DIV内容的数据类型（10分）


// 4、正确的设置DIV的背景色，一定要根据LI中所规定的颜色（10分）
document.getElementById("test1").style.background = backgroundSpan1;

document.getElementById("test2").style.background = backgroundSpan2;

document.getElementById("test3").style.background = backgroundSpan1;

document.getElementById("test4").style.background = backgroundSpan3;

document.getElementById("test5").style.background = backgroundSpan4;


// 5、正确的弹出输入框（5分）
// 6、正确的获取输入框的内容（10分）
var al = prompt("输出样式")

// 7、正确的获取P标签（10分）
var p = document.getElementById('box');

// 8、将用户输入的内容（CSS样式）设置到P标签上（10分）

p.style.cssText = al;


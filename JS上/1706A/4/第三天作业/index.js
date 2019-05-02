// 功能1：
//  （1）定义一个str变量并赋值为‘hello js’
     var str = "hello js"; 
     console.log(str)
// 	（2）获取id为box的元素，并且把str变量的数据类型放到box元素内
     var a = document.getElementById("box");
     console.log(a)
     a.innerHTML = typeof(str)
     console.log(a.innerHTML)
// 	（3）js设置box元素的背景色为#eee，	字体大小为20px
     a.style.background = "#eee"
     a.style.fontSize = "20px"
     console.log(a.style.background)
     console.log(a.style.fontSize)
// 	（4）需要有测试的过程

// 功能2：
// （1）定义5个变量，分别存字符串，数字，布尔，null和undefined
    var c = "123",d = 123,e = true, f = null, g = undefined;

// （2）分别测试其数据类型
    console.log(typeof c)
    console.log(typeof d)
    console.log(typeof e)
    console.log(typeof f)
    console.log(typeof g)
// （3）最终以‘xxxx的数据类型是xxxx’的形式放到id为results下对应的span标签内	
    var el = document.getElementById("results");
    el.innerHTML += `<span>${c}的数据类型是${typeof c}</span>`
    el.innerHTML += `<span>${d}的数据类型是${typeof d}</span>`
    el.innerHTML += `<span>${e}的数据类型是${typeof e}</span>`
    el.innerHTML += `<span>${f}的数据类型是${typeof f}</span>`

// 1、引入外部JS文件（10分） 
// 2、规范化的JS语法结构（10分）
// 3、合理的注释，中间的测试过程（10分）

// 4、创建str变量并赋值（功能1）（10分）
// 5、正确测试str的数据类型（功能1）（10分）
// 6、通过ID名获取元素，并给其赋值（功能1）（10分）
// 7、正确通过js给box的设置字体大小，背景色（功能1）（10分）

// 8、定义5个变量，分别存放字符串，数字，布尔，null 和undefined（功能2）（10分）

// 9、测试其数据类型（功能2）（10分）

// 10、完成进行字符串拼接，把对应的结果放到id为results下对应的span标签内（功能2）（10分）
// 系统弹框三种
// 1  alert(弹出内容)
// var a = alert(123)
// console.log(a)
// 2  confirm(弹出内容)

// var a = confirm("今天天不错")
//  点击取消是    返回false
// 点击确定是     返回true
// console.log(a)
// console.log(typeof a)

// 3  prompt(弹出美容)
// var a = prompt("今天天气不错")
// 取消  返回   null
// 确定  返回  用户输入的内容
// console.log(a)
// console.log(typeof a)

//  
// var a = 123;
// var b = "123";
// var c = true
// "        "
// var d = /1231231231/
// ()
// var aa = new Number(123)
// var bb = new String("123")
// var cc = new Boolean(true)

// a;
// null;
// {
//     var a =123;
//     var b = 123;
// }
// var a;
// function b(){

// }

//   if语句

// if (条件)
//   {
//   只有当条件为 true 时执行的代码
//   }
// var a = 2;
// var b = 1;

// if (a < b) {
//     console.log("a小于b")
// }

//   题1: 检测变量a的类型，是字符串返回true，不是返回false;



// var a = "123";
// var res;

// if(typeof a == "string"){
//     res = true
// }

// if(typeof a != "string"){
//     res = false
// }

// console.log(res)

// // if-else 语句


//   题1: 检测变量a的类型，是字符串返回true，不是返回false;
// var a = "123";
// var res;

// if (typeof a == "string") {
//     res = true
// } else {
//     res = false
// }

// console.log(res)



//     if (条件/表达式)
//   {
//   当条件为 true 时执行的代码
//   }
// else
//   {
//   当条件不为 true 时执行的代码
//   }



//  if...else if...else 语句



// if (条件 1)
//   {
//   当条件 1 为 true 时执行的代码
//   }
// else if (条件 2)
//   {
//   当条件 2 为 true 时执行的代码
//   }
// else
//   {
//   当条件 1 和 条件 2 都不为 true 时执行的代码
//   }
// 举个栗子
// 考试成绩   100  输出优秀

//   90-100   包括90  不包括100 优
//   80-90    包括80  不包括90 一般
//   70-80    包括70  不包括80  良
//   60-70    包括60  不包括70  及格
//   0-60     包括0  不包括60  不及格
// 获取用户输入的分数  控制太打印相应的评价

var a = prompt("请用户输入分数")
// if (a == 100) {
//     console.log("优秀")
// } else if (a >= 90 && a < 100) {
//     console.log("优")
// } else if (a >= 80 && a < 90) {
//     console.log("一般")
// } else {
//     console.log("用户输入不合法")
// }

switch (true) {
    case a == 100:
        console.log("优秀")
        break;
    case a >= 90 && a < 100:
        console.log("优")
        break;
    case a >= 80 && a < 90:
        console.log("一般")
        break;
    default:
        console.log("用户输入不合法")
}

// if (true) {
//     console.log(1)
// } else if (true) {
//     console.log(2)
// }

// <!--案例一-->
// *如果是数字再去验证手机号的长度，如果手机号长度不等于11则提示'手机格式错误',
// *否则提示输入正确
// *如果不是数字则提示用户输入数字。

// var a = prompt("请用户输入手机号")
// if (!isNaN(a))  //比较是不是NaN  是返回true  不是false
// {
//     if(a.length == 11){
//         alert("输入正确")
//     }else{
//         alert("手机格式错误")
//     }
// } else {
//     console.log("用户输入数字")
// }

// <!--案例二-->
// <!--根据用户输入的内容判断今天星期几,要求用户必须输入1-7之间的数字,否则弹出‘输入错误请重新输入’-->


// var a = prompt("今天星期几？")
// if (a == 1) {
//     console.log("今天星期1")
// } else if (a == 2) {
//     console.log("今天星期2")
// } else if (a == 3) {
//     console.log("今天星期3")
// } else if (a == 4) {
//     console.log("今天星期4")
// } else if (a == 5) {
//     console.log("今天星期5")
// } else if (a == 6) {
//     console.log("今天星期6")
// } else if (a == 7) {
//     console.log("今天星期天")
// } else {
//     console.log("输入错误请重新输入")
// }

// var b = prompt("今天星期几？")
// console.log(typeof b)
// switch(b){
//     case 1:
//         alert("今天星期1");
//         break;
//     case 2:
//         alert("今天星期2");
//         break;
//     default :
//         alert("输入错误请重新输入")
// }



// var a = 4;
// switch (a) {
//     case 1:
//         console.log("我的条件是传入的a的值为1");
//         break;
//     case 2:
//         console.log("我的条件是传入的a的值为2");
//         break;
//     case 3:
//         console.log("我的条件是传入的a的值为3");
//         break;
//     default :
//         console.log("我是不符合条件执行")
// }



// <!--案例三-->
        //  *  检测变量a的数据类型
        //  *  是字符串弹出'字符串'
        //  *  是数字: 再判断是正数弹出'正数',负数弹出'负数',否则弹出'NaN'
        //  *  是布尔值: 再判断是true弹出'真',false弹出'假'
        //  *  是undefined弹出'未定义'
        //  *  是对象:再判断是null弹出'空',否则弹出'对象'
// <!--案例四-->
        // 高(height)：180cm以上；富(money)：月薪2万；帅(face)：90以上；
        // 如果这三个条件同时满足，则：“确认过眼神，你是对的人”
        // 如果这三个条件有为真的情况，则：“嫁了吧，比上不足，比下有余。”
        // 如果这三个条件都不满足，则：“好的爱情不怕迟到，有缘再见！”




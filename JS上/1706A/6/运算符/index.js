// 逻辑运算符

// && ||  !

//  表达式1 && 2

//  &&
// 当表达式1的结果为真   返回表达式2的结果   （表达式）
// 当表达式1的结果为假   返回表达式1的结果   （表达式）


// 一假为假 全真则真  （条件判断）

//  ||
// 表达式1的结果为假   直接返回表达式2的结果
// 表达式1的结果为真  直接返回表达式1的结果


//  一真则真  全假为假

// 比较运算符
//  < > <= >= == ===  !=  
// / 题1: 检测变量a的类型，是字符串返回true，不是返回false;
// var a = "";

// var result = typeof a == "string" ? true : false

// console.log(result)


/* 题2: 检测变量a的类型
 *      是数字: 判断是否小于10,小于10在前面补0,大于10原样输出
 *      不是数字:返回false;
 */

// var a = '';

// var b = typeof a == "number" ? (a < 10 ? "0" + a : a) : false

// console.log(b)


// 题3: 如果ageC小于ageA和ageB，则res为true，否则为false

// var a = 3, b = 2, c = 2.5;

// var res = c < b && c < a ? true : false
// console.log(res)
// <!--案例五-->



// 排序


var n1 = +prompt('请输入数字:');
var n2 = +prompt('请输入数字:');
var n3 = +prompt('请输入数字:');

// 将n1 n2 n3 从小到大输出

// if (n1 < n2 && n1 < n3) {
//     n2 < n3 ? console.log(n1, n2, n3) : console.log(n1, n3, n2)
// } else if (n2 < n1 && n2 < n3) {
//     n1 < n3 ? console.log(n2, n1, n3) : console.log(n2, n3, n1)
// } else if (n3 < n2 && n3 < n1) {
//     n2 < n1 ? console.log(n3, n2, n1) : console.log(n3, n1, n2)
// }

// 
var max = Math.max(n1, n2, n3)
var min = Math.min(n1, n2, n3)
console.log(min,?,max)


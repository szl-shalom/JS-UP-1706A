//   逻辑运算符
// 逻辑与 &&
//   <!--只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;-->
//   <!--只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;-->
//   <!--假前后真-->

//    表达式1    &&  表达式2 
// true    &&   表示2   //表达式2的结果返回

//  （表达式1=》false  && 表达式2   //返回表达式1   

// var a = 1 && 2
// console.log(a)

// var a = null && 123
// console.log(a)

//  表达式的结果（变量）1 && 表达式的结果（变量）2
//  前面为真  返回后面
//  前面为假  返回前面
//  假前后真

//  当前面表示的的结果为假的  后面表达式根本不会执行 


// console.log(true && 10);//  
// console.log(false && console.log(123));//
// console.log(100 && false);//

// console.log(undefined && false);//  

// console.log(NaN && false);//   

// console.log(null && false);// 
// console.log('' && false);//

// console.log(0 && 100);//

// var a = console.log(123) && 234
//           undefined && 234
// console.log(a)

// function test(){
//     return 123
// }

// var a = test()
// console.log(a)

// 逻辑或 ||
// <!--只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。-->
// <!--只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。-->
// <!--真前假后-->

//    表达式1  ||  表达式2
//    当表达式1的结果为真    直接返回表达式1的结果   表达式2也不运行
//    当表达式1的结果为假    直接返回表示式2的结果

// console.log(true || 10);//
// console.log(true || b);//
// console.log(100 || false);// 100
// console.log(undefined || 9);// 9 
// console.log(NaN || false);// FALSE
// console.log(null || a);// 
// console.log('' || false);//  FALSE
// console.log(0 || 100);//  100

// 逻辑与的优先级比逻辑或的优先级高


// 逻辑非 !
//  !表达式的值取反

// var b = "hello";
// var d;

// console.log(!"");
// console.log(!d);
// console.log(!b);

// ！ > && > ||


// !!和 Boolean() 结果一样
// console.log(Boolean("123"))
// alert((1 && 3 || 0) && !4)  //   false

// (1 && 3 || 0) && !4

// 3 && !4

// 3 && false

// false













// (1 && 3 || 0) && !4
// (3 || 0) && !4
// 3 && !4
// 3 && false
// false
// alert(1 && !3 || 0 && 4)    // 
// 1 && !3 || 0 && 4
// 1 && false || 0 && 4
// false || 0
// 0
// alert(0 && 3 || !1 && 4)    // 

// 0 && 3 || !1 && 4

// 0 && 3 || false && 4

// 0 || false

// false

// 0 && 3 || !1 && 4
// 0 && 3 || false && 4
// 0 || false
// false

//  三元表达式

// 表达式1 ？ 表达式2 ：表示式3
// 表达式1结果为真  运行表达式2   不会运行表达式3  返回表达式2的结果
// 表达式1结果为假  运行表达式3   不会运行表达式2  返回表达式3的结果

// var a = 1 ? 2 : 3;
// var a = console.log(123) ? console.log(234) : console.log(345)
//         // undefined(false)                         undefined
// console.log(a)

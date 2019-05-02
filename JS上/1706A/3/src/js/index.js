// 基本数据类型
//  1 number  数字
//  特殊的NaN
//   console.log(NaN == NaN)  //false
//   console.log(NaN === NaN)  //false

//   1.1  Number(要转的值)   是一个构造函数  大驼峰
// var a = 123,  // 数字
//     b = '123',  // 字符串
//     bb = '123aaaa',
//     bbb = 'aaa123',
//     c = true,  //布尔
//     cc = false,
//     d = null,  // null
//     e;  //udnefined

// console.log(Number())  // 不传参数 默认返回0
// console.log(Number(a))   //本身是数字  直接返回
// console.log(Number(b))    //如果是字符串 里面的值为数字就返回该数字  如果不是数字返回NaN
// console.log(Number(bb))
// console.log(Number(bbb))
// console.log(Number(true))   //参数是布尔值true  返回 1    布尔值为false   返回0 
// console.log(Number(false))

// console.log(Number(d))      //值 null  返回 0
// console.log(Number(e))      //值 undefined 返回 NaN

// 1.2 parseInt(要转的值)  小驼峰 
// 计算方式  匹配到第一个非数字的字符结束    把前面的匹配到的数字返回 如果没有  返回NaN
// 一般用处小数点
// console.log(parseInt())   //不传参数  返回NaN
// console.log(parseInt(''))   //空字符串  返回NaN
// console.log(parseInt('123'))  //返回  123
// console.log(parseInt('345qaaa'))  //返回 345  
// console.log(parseInt('1234a123'))  //返回 1234
// console.log(parseInt('aaaaa'))  //返回NaN
// console.log(parseInt(true))   //返回NaN
// console.log(parseInt(false))  //返回NaN
// console.log(parseInt(null))    //返回NaN
// console.log(parseInt(undefined))//返回NaN
// console.log(parseInt(123.123))   //返回123

// 1.3 parseFloat(要转的值)
// 计算方式   匹配到第一个非数字的字符结束    把前面的匹配到的数字返回 如果没有  返回NaN  
//  注意  它可以匹配第一个小数点 
// console.log('----------------------------------------------------------')
// console.log(parseFloat())   //不传参数  返回NaN
// console.log(parseFloat(''))   //空字符串  返回NaN
// console.log(parseFloat('123'))  //返回  123
// console.log(parseFloat('345qaaa'))  //返回 345  
// console.log(parseFloat('1234a123'))  //返回 1234
// console.log(parseFloat('aaaaa'))  //返回NaN
// console.log(parseFloat(true))   //返回NaN
// console.log(parseFloat(false))  //返回NaN
// console.log(parseFloat(null))    //返回NaN
// console.log(parseFloat(undefined))//返回NaN
// console.log(parseFloat(123.123))   //返回123.123
// console.log(parseFloat('123.123.123'))  //返回 123.123
// 1.4  isNaN()   
//  默认调用 Number()方法 将 Number()之后的值和 NaN比较  如果是NaN 返回true   如果不是NaN 返回false
// console.log(isNaN(123))   // false
// console.log(isNaN(undefined))  // number(undefined) => NaN  isNaN(NaN) => true 
// console.log(isNaN('ab'))    //  number('ab') => NaN    isNaN(NaN) => true
// console.log(isNaN(null))    //  number(null) => 0      NaN == 0   =>  false


//  2 string  字符串
//   2.1   String(要转的值)  
//  直接在要转的两端加上引号

// console.log(String())   //
// console.log(String(''))   //
// console.log(String('123'))  //
// console.log(String('345qaaa')) 
// console.log(String('1234a123'))  
// console.log(String('aaaaa'))  //
// console.log(String(true))   //
// console.log(String(false))  //
// console.log(String(null))    //
// console.log(String(undefined))//
// console.log(String(123.123))   //
// console.log(String('123.123.123'))  //
// 2.2  要转的值.toString()  
//  注意 基本类型中 只有数字 字符串 布尔只可以调用toString()方法   调用结果和String()结果一致   undefined和null 不能调用

//  3 boolean  布尔
//  3.1 Boolean()
// 只有6个值转化为布尔值为false  其他都是true

// 返回值全部为false  其他的全部为true

// console.log(Boolean(NaN))
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(false))

// // 下面结果全部为true
// console.log(Boolean(1))
// console.log(Boolean("ab"))
// console.log(Boolean('1231'))
// console.log(Boolean('null'))



//  4 null 空指针  空对象  
// console.log(null == null)       //true    
// console.log(null == undefined)   //双等  null等于undefined  true
// console.log(null === null)      // true
// console.log(null === undefined)   //全等  null不等于undefined  false

// console.log(null == NaN)   // false
// console.log(null === NaN)  // false

// //  5 undefined  未定义
// console.log(undefined == undefined)  //true
// console.log(undefined === undefined)  //true
// console.log(undefined == NaN)  //false
// console.log(undefined === NaN)  //false






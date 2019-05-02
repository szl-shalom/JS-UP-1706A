// var fun = function () {
//     alert(x);
// };


// x = 10; 
// fun();


// function fn(a, b) {

// }

// fn([], [])


// ***************************************************************************************************************************************
// 1、封装一个findLongestWord函数，将一个句子作为该函数的参数，找到这个句子中最长的单词的长度
// 调用：findLongestWord("The quick brown fox jumped over the lazy dog") //返回值6





// 1、使用函数表达式来创建函数（5分）


// var findLongestWord = function (str) {
//     // 2、正确的提取字符串中的所有单词（10分）
//     var arr = str.split(" ")  //将字符串以空格为间隔转化为字符串   
//     var word = ""             //最长单词
//     // 3、正确找到长度最长的单词（10分）
//     arr.forEach(function (item) {    //循环 arr 数组  
//         if (word.length < item.length) {   //判断 最长单词的长度是否小于数组每个元素的长度  如果小于  重新赋值word
//             word = item
//         }
//     })

//     // 4、正确的输出最长单词的长度（10分）
//     return word.length
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")

// ***************************************************************************************************************************************

// 2、封装一个largestOfFour函数，将一个二维数组作为该函数的参数，
// 这个二维数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
// 调用：largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) //返回值[5,27,39,1001]

// 5、使用函数声明式来创建函数（5分）
// function largestOfFour(arr) {
//     // 6、正确的找取每个小数组的最大数（10分）
//     var arr1 = []
//     arr.forEach(function (item) {
//         // 开始循环小数组
//         var bigest = 0
//         // console.log("开始循环小数组")
//         item.forEach(function (item1) {
//             // console.log(item1)
//             if (bigest < item1) {
//                 bigest = item1
//             }
//         })
//         // 小数组循环完毕
//         // console.log("小数组循环完毕")

//         // 7、正确的将四个小数组的最大数存入一个数组（10分）
//         // 8、正确的输出存入最大数的数组（10分）
//         // console.log(bigest)
//         arr1.push(bigest)
//     })

//     return arr1

// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))










// ***************************************************************************************************************************************

// 3、封装一个confirmEnding函数，有两个参数，str和target,检查str字符串是否以指定的字符串(target)结尾，如果是，返回true;如果不是，返回false。
// 调用：confirmEnding("Bastian", "tian") //返回值 true


function confirmEnding(str, target) {
    // 9、正确比较str是否以target结尾（10分）
    // 10、正确的输出比较的结果，必须是布尔值（10分）
    // 11、规范代码，并有注释（10分）
    return str.slice(str.length - target.length) === target ? true : false


}

console.log(confirmEnding("Bastian", "ti11an"))




// ***************************************************************************************************************************************


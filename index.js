
console.log('********** LOGICAL QUESTIONS AND ANSWERS **********')

// QUESTION # 1
// we have an array=[3,5,67,4,7,23,43], find the greatest number and its index number?
// Answer:
let array = [3, 5, 67, 4, 7, 23, 43]
let maxNumber = array[0]
let numberIndex = 0
for (let i = 0; i <= array.length; i++) {
    if (array[i] > maxNumber) {
        maxNumber = array[i]
        numberIndex = i
    }
}
console.log('maxNumber = ', maxNumber)
console.log('numberIndex = ', numberIndex)
console.log('***************************************************')

// // QUESTION # 2
// // we have an array=[3,5,67,4,7,23,43], find the minimum number and its index number?
// // Answer:
// let array = [3, 5, 67, 4, 7, 23, 43]
// let minNumber = array[0]
// let numberIndex = 0
// for (let i = 0; i <= array.length; i++) {
//     if (array[i] < minNumber) {
//         minNumber = array[i]
//         numberIndex = i
//     }
// }
// console.log('minNumber = ', minNumber)
// console.log('numberIndex = ', numberIndex)
// console.log('***************************************************')

// // QUESTION # 3
// /* we have an array=[3,9,4,7], condition is that: at first iteration, 1st element is skipped and
// rest elements multiply each other and at second iteration, 2nd element is skipped and rest 
// elements multiply each other and at third iteration, 3rd element is skipped and rest elements 
// multiply each other and output should be come like as array=[252, 84, 189, 108].find the solution?*/
// // Answer:
// let array = [3, 9, 4, 7]
// var output = []
// for (let i = 0; i <= array.length; i++) {
//     let product = 1
//     for (let j = 0; j < array.length; j++) {
//         if (i !== j) {
//             product *= array[j]
//         }
//     }
//     output[i]=product
// }
// output.pop()
// console.log('output = ', output)
// console.log('***************************************************')

// // QUESTION # 4
// // how to multiply two numbers without using asteric (*) operator/arithmatic operator?
// // Answer:
// function mult(a, b) {
//     let output = a;
//     for (let i = 0; i < b - 1; i++) {
//         output += a
//     }
//     console.log('output = ', output)
// }
// mult(7, 5)
// console.log('***************************************************')


// // QUESTION # 5
// // find even number till 20 and insert into an array?
// // Answer:
// let array = []
// for (let i = 0; i <= 20; i += 2) {
//     array.push(i)
// }
// console.log('array = ', array)
// console.log('***************************************************')

// // QUESTION # 6
// // find odd number till 20 and insert into an array?
// // Answer:
// let array = []
// for (let i = 1; i <= 20; i += 2) {
//     array.push(i)
// }
// console.log('array = ', array)
// console.log('***************************************************')

// // QUESTION # 7
// // find asteric (*) triangle?
// // Answer:
// let trinagle = ''
// for (let i = 1; i < 15; i += 2) {
//     console.log(trinagle+='*')
// }
// console.log('***************************************************')

// // QUESTION # 8
// // how to swap two elemnts in an array=[5,8]?
// // Answer:
// // 1st method:
// let array = [5, 8]
// let output = []
// let [a, b] = [8, 5]
// output.push(a)
// output.push(b)
// console.log("output = ", output)
// // 2nd method:
// let array2 = [5, 8]
// let tempArray = []
// let value1 = array2[0]
// let value2 = array2[1]
// tempArray[0] = value2
// tempArray[01] = value1
// console.log('tempArray == ', tempArray)
// console.log('***************************************************')


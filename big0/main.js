//**exe 1 */
// const getBalance = function (bankOperations) {
//     let balance = 0
//         for (let op of bankOperations) {
//         balance += op
//     }
//     return balance
// }

// getBalance([-27, -43, -2400, -700, 15000, 58])

//O(n)

//**exe 2 */
// const printSome = function (complaints) {
//     for (let i = 1; i < complaints.length; i = i * 2)
//         console.log(complaints[i].text);
// }
// becouse of the i*2 it meants thats is 0(1)

//**exe 3 */
// const allSides = [
//     { a: 3, b: 4 },
//     { a: 15, b: 21 },
//     { a: 41, b: 8 },
//     { a: 12, b: 6 }
// ]

// const relevantSides = allSides.filter(s => s.a % 3 == 0)
// for (let sides of relevantSides) {
//     console.log(getHype(sides))
// }

// const getHype = function (sides) {
//     let a = sides.a
//     let b = sides.b
//     let sumOfSquares = a * a + b * b
//     return Math.sqrt(sumOfSquares)
// }

//0(1)

//**exe 4 */

// const studentAnswers = {
//     brBlds: {
//         1: "a",
//         2: "a",
//         3: "c"
//     },
//     dvOna: {
//         1: "a",
//         2: "c",
//         3: "c"
//     },
//     nmPrz: {
//         1: "a",
//         2: "b",
//         3: "a"
//     }
// }
// const studentGithubs = ["brBlds", "dvOna", "nmPrz"]

// const distributions = {
//     1: {},
//     2: {},
//     3: {}
// }

// const getDistributions = function (studentAnswers) {
//     studentGithubs.forEach(sg => {
//         let answers = studentAnswers[sg]

//         Object.keys(answers).forEach(questionNumber => {
//             let letterAnswer = answers[questionNumber]

//             distributions[questionNumber][letterAnswer] ?
//                 distributions[questionNumber][letterAnswer]++ :
//                 distributions[questionNumber][letterAnswer] = 1
//         })
//     })

//     return distributions
// }

// getDistributions(studentAnswers)

//0(nm)

//**exe 5 */
// const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))

// const emailManager = function () {
//     let email = generateEmail()

//     $.get('/recepients', function (recepients) {
//         sendEmails(email, recepients)
//     })
// }

//0(n)

//**exe 6 */

// const findDuplicates = function (ages) {
//     let agesObj = {}
//     for (let i = 0; i < ages.length; i++) {

//         if (agesObj[ages[i]]){
//             ages.splice(i,1)
//         } else {
//             agesObj[ages[i]] = 1
//         }
//         // for (let j = i + 1; j < ages.length; j++) {
//         //     if (ages[i] === ages[j]) {
//         //         console.log(`${ages[i]} has a duplicate`)
//         //     }
//         // }
//     }
// }

//**exe 7 */

//im going to store the info in an object !!!

// let info = {
//     id: "ax01",
//     info: {
//         name: "Ray",
//         age: 28,
//         salery: 1300
//     }
// }
// const findEmployeeSalary = function (employeeID) {

// }


//**exe 8 */
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
let numToFind = 2630
const findIndex = function (numbers, num) {
    let topIndex = numbers.length //100
    let bottomIndex = 0 //0
    let index = topIndex/2 // 50

    if (numbers[index]<num) {
        bottomIndex = index
        let temp = (topIndex-bottomIndex)/2
        index = topIndex - temp
        console.log(topIndex);
        console.log(bottomIndex);
        console.log(numbers[index]);
    } 
    
    if (numbers[index]<num) {
        bottomIndex = index
        let temp = (topIndex-bottomIndex)/2
        index = topIndex - temp
        console.log(topIndex);
        console.log(bottomIndex);
        console.log(numbers[index]);
    } 
    
  
    
}

findIndex(numbers,numToFind)

//**!ALGOS JS */

// let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

// let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123

// let numbers = [23, 23, 23, 23, 23] //should find 23

// let smallestNumber = 0

// for(let num of numbers){ //going over each number
//     let smallestNumber = numbers[0]
//     if(num < smallestNumber){

//         smallestNumber = num //forget the number stored in memory and store num instead
//   }
// }

// console.log("Smallest number is " + smallestNumber)

//**exe1 */

// const printStars = function (num) {
//     let starr = "*"
//     let toPrint = ''
//     for (let i = 0; i<num ; i++){
//         toPrint += starr
//         console.log(toPrint);
//     }
// }

// printStars(5)

//**exe 2 */

// const printBackwardsStars = function (num) {
//     let starr = "*"
//     let toPrint = ''
//     for (let i = 0; i<num ; i++){
//         toPrint += starr
//     }
//     for( let j = num ; j> 0; j--){
//         console.log(toPrint);
//         toPrint = toPrint.slice(0,-1)
//     }
// }

// printBackwardsStars(6)

//**exe 3 */
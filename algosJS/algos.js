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
// 	let starr = "*";
// 	let toPrint = "";
// 	for (let i = 0; i < num; i++) {
// 		toPrint += starr;
// 	}
// 	for (let j = num; j > 0; j--) {
// 		console.log(toPrint);
// 		toPrint = toPrint.slice(0, -1);
// 	}
// };

// printBackwardsStars(6);

//**exe 3 */

// const printDoubleStar = function (numOfStart, numOfRepeat) {
// 	for (let j = 0; j < numOfRepeat; j++) {
// 		let starr = "*";
// 		let toPrint = "";
// 		for (let i = 0; i < numOfStart; i++) {
//             toPrint += starr;
// 			console.log(toPrint);
// 		}
// 		for (let j = numOfStart; j > 0; j--) {
// 			console.log(toPrint);
// 			toPrint = toPrint.slice(0, -1);
// 		}
// 	}
// }

// printDoubleStar(5,3)

//**exe 4 */
//recursion!
// const reverse = function(str){
//     if (str === '') {
//         return ''
//     } else {
//         return reverse (str.substr(1)) + str.charAt(0)
//     }
// }

//regular loop
 

const reverse = function (str) {
    let reverse = ''
    for (let i = 1 ;i<=str.length ; i++) {
        reverse += str[str.length - i]

    } 
    return reverse
}


// console.log(reverse("dani"));
  

//**exe 5 */
// // my not full solution 
// const isPalindrome = function (str) {
//     for (let i = 1; i <= str.length; i++){
//         if (str[i-1] == str[str.length-i]) {
//             return false
//         } else return true
//     }
// }

// isPalindrome('bob')

//a good sol is 
const isPalindrome = function (str) {
    str = str.replace()
}

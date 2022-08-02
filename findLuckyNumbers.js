// Write your code below this line.

/*
Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:
luckyNumbers(2)
// returns (3, 7)
luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)

*/
let result = [];
let luckyArr = [];
const randomNumber = (n) => {
    result = [1,2,3,4,5,6,7,8,9,10]
    for(let i = 1; i < n; i++){
        const random = Math.floor(Math.random() * result.length);
    luckyArr.push(result[random]);
    result.splice(random, 1)
    }
    return luckyArr
    }

console.log(randomNumber(6))

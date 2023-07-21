
// Given an unsorted array of positive two digit integers A[], find the number which has the
// longest word length
// Example:
// Question: A[] = {10, 12, 38, 62, 90}
// Answer: 38
// Explanation:
// 10 - Ten - 3 letters
// 12 - Twelve - 6 letters
// 38 - Thirty eight - 11 letters
// 62 - Sixty two - 8 letters
// 90 - Ninety - 6 letters
const arr=[10, 12, 38, 62, 90]

function ConvertToWord(number) {
    
    let ones = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];
    let teens = [
      "tens", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
  
    let tens = [
      "", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
  
    // checking if number is less than 10 ,if yes then return value of ones of index number
    if (number < 10) {
      return ones[number];
    }
//    checking number is less than 20 if yes then return value of teens of index number-10 

    else if (number < 20) {
      return teens[number - 10];
    }
    //  if value is greater than 20
    const tensPlace = Math.floor(number / 10);
    const unitplace = number % 10;
  
    return tens[tensPlace] + (unitplace !== 0 ? " " + ones[unitplace] : "");
  }
  
//  longest word length 
 function LongestWordLength(arr){
    let max=0,num=arr[0]
    if(arr.length<1){
        return null
    }
    for(let el of arr){
        let word=ConvertToWord(el)
       if(max<word.length){
        max=word.length
        num=el
       }

    }
    return num
 }
  console.log(LongestWordLength(arr))
  
  
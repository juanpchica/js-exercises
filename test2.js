const reverseString = (str) => {
  //console.log(str.split("").reverse().join(""));

  let revString = "";
  //   for (let letter of str) {
  //     revString = letter + revString;
  //   }

  //str.split("").forEach((el) => (revString = el + revString));

  return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator); //=);
};
reverseString("hello juan"); //=

const doubleNumber = (numbers) => {
  // numbers.forEach((num,index) => {
  //     return  num*2; //=
  // });

  // return numbers //=

  return numbers.map((n) => {
    return n * 2; //=
  });

  numbers;
};

doubleNumber([2, 5, 6, 7]); //=

/////////////////*************************************** */

function isPalindrome(str) {
  let reverseStr = str.split("").reduce((acc, crr) => crr + acc); //=
  return str === reverseStr;
}

isPalindrome("racecar"); //=

/////////////////*************************************** */

function reverseInt(int) {
  let reverseInt = int.toString().split("").reverse().join(""); //=
  return parseInt(reverseInt) * Math.sign(int);
}

reverseInt(-154); //=

/////////////////*************************************** */

function capitalizeLetters(str) {
  return str
    .split(" ")
    .reduce((acc, currentValue) => {
      return (acc =
        acc + currentValue[0].toUpperCase() + currentValue.slice(1) + " ");
    }, "")
    .trim(); //=
}

capitalizeLetters("i love javascript"); //=

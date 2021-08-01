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
  //   return str
  //     .split(" ")
  //     .reduce((acc, currentValue) => {
  //       return (acc =
  //         acc + currentValue[0].toUpperCase() + currentValue.substr(1) + " ");
  //     }, "")
  //     .trim(); //=

  //   return str
  //     .toLowerCase()
  //     .split(" ")
  //     .map((word) => {
  //       return word[0].toUpperCase() + word.substr(1); //=
  //     })
  //     .join(" "); //=

  str.replace("i", "f"); //=
}

capitalizeLetters("i love javascript"); //=

/////////////////*************************************** */

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = 0;

  str.split("").map((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  //Iterate over object
  for (let char in charMap) {
    charMap[char]; //=
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]; //=
      maxChar = char; //=
    }
  }

  return maxChar;
}

maxCharacter("javascript"); //=

/////////////////*************************************** */

function fizzBuzz() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(); //=

const removeElement = (el) => {
  const cities = ["Pereira", "Cali", "Bogota", "Medellin"];
  return cities.filter((citie) => citie !== el); //=
};

removeElement("Pereira"); //=

/////////////////*************************************** */

const data = {
  user: {
    name: "juan",
    age: 25,
  },
};

data; //=

var name1 = data.user.name; //=
const {
  user: { name },
} = data;
console.log(name); //=

/////////////////*************************************** */
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

function normalLoop() {
  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]); //=
  }
}

normalLoop();

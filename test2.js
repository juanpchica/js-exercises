const reverseString = (str) => {
  //console.log(str.split("").reverse().join(""));

  let revString = "";
  for (let letter of str) {
    revString = letter + revString;
  }

  return revString;
};
reverseString("hello juan"); //=

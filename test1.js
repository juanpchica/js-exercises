function hi(name) {
  console.log("Hello " + name);
}

const hi2 = (name) => console.log("Hello " + name);

hi("juan pablo"); //=

hi2("Peter");

const user = {
  name: "Juan",
  age: 15,
  speak: function (name) {
    console.log("Hi " + name);
  },
  sleep: (name) => console.log("Sleep " + name),
};

user.speak("papa");
user.sleep("pepe");

//********************** */

const isPalindrom = (word) => {
  let rWord;

  for (let index = word.length; index == 0; index--) {
    rWord += word[index]; //=
  }

  return rWord;
};

isPalindrom("racecar"); //=

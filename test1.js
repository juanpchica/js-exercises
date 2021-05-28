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

const isPalindrom = (word) => word.trim().split("").reverse().join("") === word;

isPalindrom("racecar "); //=

function isPalindrome(word) {
  var letters = [];
  var rWord = "";

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]); //=
  }

  for (let i = 0; i < word.length; i++) {
    rWord += letters.pop(); //=
  }

  return rWord === word;
}

isPalindrome("racecar"); //=

//**********************************************//

var Stack = function () {
  this.storage = {};
  this.count = 0;

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];

    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
};

var stacka = new Stack();

stacka.push(5);
stacka.push(4);
stacka.push(6);
stacka.size(); //=
stacka.peek(); //=
stacka.pop(); //=
stacka.peek(); //=

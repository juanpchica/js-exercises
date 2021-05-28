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

//**********************************************//

class Set {
  collection = [];
  constructor(arr = []) {
    this.collection = arr;
  }

  has = function (el) {
    return this.collection.indexOf(el) !== -1;
  };

  add = function (el) {
    if (!this.has(el)) {
      this.collection.push(el);
      return true;
    }
    return false;
  };

  values = function () {
    return this.collection;
  };

  remove = function (el) {
    if (this.has(el)) {
      const index = this.collection.indexOf(el);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  size = function () {
    return this.collection.length;
  };

  union = function (otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((el) => {
      unionSet.add(el);
    });

    secondSet.forEach((el) => {
      unionSet.add(el);
    });

    return unionSet;
  };

  intersection = function (otherSet) {
    var intersectionSet = new Set();

    var secondSet = otherSet.values();
    secondSet.forEach((el) => {
      if (this.has(el)) {
        intersectionSet.add(el);
      }
    });

    return intersectionSet;
  };

  //Return the difference of two set as a new set
  difference = function (otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();

    firstSet.forEach((el) => {
      if (!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });

    return differenceSet;
  };

  //This method will test if the set is a subset of a different set
  subset = function (otherSet) {
    var firstSet = this.values();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new Set(["D", "Z"]);
var setB = new Set([1, 3]);
setA.add("A");
setA.add("B");
setA.add("C");

setA.has("D"); //=
setA.remove("B"); //=

setA.values(); //=

setA.size();

setA.union(setB); //=
setB.add("A");

setA.intersection(setB).collection; //=

setB.values(); //=

setA.difference(setB).collection; //=

setB.subset(setA); //=

//**********************************************//
const lessThen40 = () => {
  var numbers = [1, 5, 6, 7, 41];
  return numbers.every(function (el) {
    return el < 40;
  });
};

lessThen40(); //=

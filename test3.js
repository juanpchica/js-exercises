let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("this is in the catch " + message);
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("greeting");
  }, 3000);
});

myPromise.then((resp) => {
  console.log(resp); //=
});

const greetings = async (name) => {
  const greet = await myPromise(); //=

  console.log(`${greet} ${name}`); //=
};

greetings("Juan"); //=

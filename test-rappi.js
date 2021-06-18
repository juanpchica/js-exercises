const inventoryList = () => {
  let list = [];

  const actions = {
    add: (name) => {
      if (list.length <= 10 && name != "") {
        list.push({ name: name });
      }
    },
    remove: (name) => {
      if (name != "") {
        list = list.filter((item) => item.name != name); //=
      }
    },
    getList: () => {
      return list;
    },
  };
  return actions;
};

const inventory = inventoryList();
inventory.add("Juan");
inventory.add("Peter");
inventory.getList(); //=
inventory.remove("Juan");
inventory.getList(); //=

//////////////////////////

async function getMovieList(year) {
  // write your code here
  const response = await fetch(
    `https://jsonmock.hackerrank.com/api/movies?Year=${year}`
  );
  const data = await response.json();
  console.log(data); //=
}

getMovieList(2015); //=

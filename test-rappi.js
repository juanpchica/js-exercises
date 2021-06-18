const inventoryList = () => {
  let list = [];

  const actions = {
    add: (name) => {
      list.push({ name: name });
    },
    remove: (name) => {
      list = list.filter((item) => item.name != name); //=
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

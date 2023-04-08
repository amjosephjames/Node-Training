const fruits = ["Mango", "Pear", "Orange", "Apple"];

const allFruits = () => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
};

module.exports = { fruits, allFruits };

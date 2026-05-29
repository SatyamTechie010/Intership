// Pop push shift unshift Map Filter find sort.

// console.log('');

const products = [
  {
    id: 1,
    title: "Wireless Mouse",
    price: 499,
  },
  {
    id: 2,
    title: "Keyboard",
    price: 799,
  },
  {
    id: 3,
    title: "Laptop Stand",
    price: 1299,
  },
  {
    id: 4,
    title: "USB-C Cable",
    price: 299,
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 1499,
  },
  {
    id: 6,
    title: "Headphones",
    price: 999,
  },
  {
    id: 7,
    title: "Power Bank",
    price: 1199,
  },
  {
    id: 8,
    title: "Smart Watch",
    price: 2499,
  },
];

let result = products.sort(function (a, b) {
  return a.price - b.price;
});

console.log(result);

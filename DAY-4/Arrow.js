// setTimeout(() => {
//   console.log("hello");
// }, 5000);


// Spread Operator


let processPayment = (amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Processing payment...");

      if (amount > 0) {
        resolve("Payment successful");
      } else {
        reject("Payment failed: Invalid amount");
      }
    }, 2000);
  });
};

// processPayment(1500)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


async function handle()
{
    let msg = processPayment(2000);
    console.log(msg);
}
handle()
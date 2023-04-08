// console.log(global)
setTimeout(() => {
  console.log("Am Joseph");
  clearInterval(interval);
}, 5000);

let interval = setInterval(() => {
  console.log("i show up every 1 sec");
}, 1000);

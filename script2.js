// console.log(`Test start`);
// setTimeout(() => {
//   console.log(`Timer de 0 segundos`);
// }, 0);
// Promise.resolve("Resolve promise").then((res) => console.log(res));
// Promise.resolve("Resolve promise 2").then((res) => {
//   for (let i = 0; i < 100000000000; i++) {}
//   console.log(res);
// });
// console.log(`Test end`);

const promesaLoteria = new Promise(function (resolve, rejected) {
  console.log(`Promesa iniciada`);
  setTimeout(
    () =>
      Math.random() > 0.5
        ? resolve("ganaste")
        : rejected(new Error("Perdiste")),
    5000
  );
});
promesaLoteria.then((res) => console.log(res)).catch((err) => console.log(err));

//PROMISYFY
setTimeout(() => {
  console.log("1 segundo");
  setTimeout(() => {
    console.log("2 segundos");
    setTimeout(() => {
      console.log("3 segundos");
      setTimeout(() => {
        console.log("4 segundos");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

const wait = (segundos) => {
  return Promise((resolve) => {
    setTimeout(() => {
      console.log(`Ha pasado ${segundos} segundos`);
    }, segundos * 1000);
  });
};

wait(1)
  .then((data) => {
    console.log(data);
    return wait(2);
  })
  .then((data) => {
    console.log(data);
    return wait(3);
  })
  .then((data) => {
    console.log(data);
    return wait(4);
  })
  .then((data) => {
    console.log(data);
    return wait(5);
  });

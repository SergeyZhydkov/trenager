// let counter = 0;
if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}
function count() {
  let counter = localStorage.getItem("counter");
  counter++;
  document.querySelector("h2").innerHTML = counter;
  localStorage.setItem("counter", counter);
  // if (counter % 10 === 0) {
  //   alert(`Count is now ${counter}`);
  // }
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h2").innerHTML = localStorage.getItem("counter");
  document.querySelector("button").onclick = count;

  // document.querySelector('button').addEventListener('click', count);
});
// let base = prompt("Давай число");
// base = Number(base);
// console.log(base);
// let power = prompt("Давай степень");
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);
// let doc = prompt("Введи сложное число");
// doc = Number.parseFloat(doc);
// console.log(doc);
// let brand = "BoINg-737";
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);
// const x = 5;
// const y = 10;
// const z = 5;
// console.log(z < y);
// const valA = "737";
// const valB = "56 seconds";
// const resultA = Number(valA);
// const resA = typeof resultA;
// console.log(resultA);
// console.log(resA);
// const resultB = Number(valB);
// const resB = typeof resultB;
// console.log(resultB);
// console.log(resB);
// console.log(valA);
// console.log(valB);
// console.log(typeof valA);
// console.log(typeof valB);
// console.log(Number.parseInt("5px"));
// console.log(Number.parseInt("7654.33556pkjg"));
// console.log(parseInt("7654.33556pkjg"));
// console.log(Number.parseInt("7654.33556pkjg"));
// console.log(parseFloat("7654.33556pkjg"));
// console.log(0.1 + 0.2);

// const arr = "Сейчас  заканчивается 2023 год";
// console.log(arr.length);
// console.log(arr[0] + arr.slice(1).toUpperCase());
// let res = ((15 + 1.4 * 7.86) / 2).toFixed(4);
// console.log(res);
// console.log(Math.floor(res));
// console.log(Number.isNaN("57"));
// console.log(Number.isNaN(57));
// console.log(Number("hgcjhghjf"));

// const message = "Welcome to New York";
// console.log(message.indexOf("N"));
// console.log(message.slice(11));
// console.log(message.repeat(2));
// console.log(message.toLocaleUpperCase());
// console.log(message.toLowerCase());
// console.log(message.replace("New", "Old"));
// console.log(message.replace("Welcome", "Good bye"));
// console.log(message.indexOf("t"));
// console.log(message.slice(0, 8));
// console.log(message.slice(11, message.length));
// console.log(message.slice(0, message.length));
// console.log(1 && 5);
// console.log(5 && 2);
// console.log(0 && 8);
// console.log(-1 && 0);
// console.log("" && "Mango");
// console.log(null && 7);
// console.log(9 && -1);
// console.log(9 && "-1");
// console.log(NaN && 5);
// const value = "746";
// console.log(value.slice(0, 1));

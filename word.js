let str = "hello";

// export function greeting() {
//   console.log(1111);
// }

// export function plus(a, b) {
//   console.log(a + b);
// }

// //화살표 함수로
// export let add = (a, b) => a + b;

// export default str;

let promise = new promise((resolve, rejact) => {
  setTimeout(() => {
    rejact("error발생");
  }, 2000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err);
  });

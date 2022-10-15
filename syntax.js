// // //곱하기 함수 화살표 함수로 작성해보기
// // const num = (a, b) => a * b;
// // console.log(num(10, 100));

// // export function greeting() {
// //   console.log(1111);
// // }

// // let str = "gggg";
// // export default str;

// let promise = new Promise((resolve, rejact) => {
//   setTimeout(() => {
//     rejact("error발생");
//   }, 2000);
// });

// function double(arr) {
//   return arr.map((item) => item * 2)=];
// }

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

//   let num04 = 4;

let array = [1, 2, 3, 4];
// let num = []
//1. map과 filter의 콜백함수 화살표 함수로 바꾸기
console.log(array);

array.forEach((num) => console.log(num));
let array2 = array.map((num) => num * 2);

console.log(array2);

// userArr의 원소중 나이가 30이상인 사람의 이름가 나이를 하나의 문자열로 만들어서
//새로운 배열만들어서 출력
// => []
// 배열 고차함수 복합적으로 사용
let userArr = [
  { username: "seok", age: 30 },
  { username: "jeoncheol", age: 29 },
  { username: "gwanhoon", age: 40 },
];

let userVal = userArr
  .filter(function (users, idx) {
    return users.age >= 30;
  })
  .map((user) => `테스트 ${user.username} : ${user.age}`); 
console.log(userVal);

const numbers = [1, 2, 0, 4, 7, 10, 9, 4];

// duyen phan tu
// abc.forEach((item) => {

// });

// abc.concat

// () => { } // ~~ function() {}

// const x = () => { }
// const y = function() {}

// kiem tra tung phan tu -> boolean
// const result = numbers.every((value) => value > 5);

// loc ra -> array
// const result = numbers.filter((value) => value > 5);

// kiem tra phan tu co ton tai trong array
// const result = numbers.includes(10);

// !
// numbers = [1, 2, 0, 4, 7, 10, 9, 4]
// [1, 2, 0, 4, 7, 10, 9, 4]
// -> tra ve 1 mang, minh co kiem soat tung phan tu de thuc hien mot viec j do
// const result = numbers.map((value) => value * 2);

// [1, 2, 0, 4, 7, 10, 9, 4] -> {key: value}
// const result = numbers.reduce((preValue, currentValue) => {
//   preValue['key' + currentValue] = currentValue * 2;

//   return preValue;
// }, {});

// let sum = 0;
// numbers.forEach((item) => (sum += item));

// const sum = numbers.reduce((preSum, item) => (preSum += item), 0);
0;
// [1, 2, 0, 4, 7, 10, 9, 4] ->
// 1 2 0
// 4 7 10
// 9 4
// [[1,2,0], [4,7,10], [9, 4]]

// const matrix = numbers.reduce((matrix, item, index) => {
//   if (index % 3 === 0) {
//     matrix.push([]);
//   }

//   matrix[matrix.length - 1].push(item);

//   return matrix;
// }, []);

// noi choi
// const matrix = numbers.reduce((matrix, item, index) => (index % 3 === 0 ? matrix.push([item]) : matrix[matrix.length - 1].push(item)) && matrix, []);

// !
// so sanh
// &&
// true && abc => abc

// jsx -----------------------------------

// DOM document object model
const clickMeButton = document.createElement('button');
clickMeButton.innerText = 'Click me!!!';
clickMeButton.onclick = () => {
  console.log('Hello');
};
clickMeButton.style.color = 'blue';
//css-loader sass-loader

// -> y tuong -> library Virtual DOM, vue, angular, react

// library: thu vien, file -> project

// framework: khung lam viec // chuan -> library
// vue: lib -> nuxt -> framework
// react lib -> next ->
// angularJS lib -> angular

document.body.appendChild(clickMeButton);

// jsx -> javascript xml
const clickMeButton = (
  <button
    onclick={() => {
      console.log('hello');
    }}
  >
    Click me jsx
  </button>
);

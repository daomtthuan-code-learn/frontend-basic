const app = document.querySelector('#app'); // root

// component // //element
// const Button = () => {
//   // tên thẻ, props, children
//   return React.createElement(
//     'button',
//     {
//       onClick: () => {
//         console.log('hello');
//       },
//       style: {
//         color: 'red',
//         backgroundColor: 'white',
//       },
//     },
//     'Click me',
//   );
// };

{
  /* <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>; */
}

// const number = [1, 2, 3];

// const List = () => {
//   return React.createElement(
//     'ul',
//     null,
//     number.map((item, index) => {
//       return React.createElement(
//         'li',
//         {
//           key: index,
//         },
//         item,
//       );
//     }),
//   );
// };

{
  /* <form>
  <input />
  <div>ajsdjlasjdl</div>
</form>; */
}

const e = React.createElement;

const Form = () => {
  const [text, setText] = React.useState(''); // hook react

  return e(
    'form',
    null,
    e(
      'input',
      {
        onChange: (event) => {
          setText(event.target.value);
        },
      },
      null,
    ),

    e('div', null, text),

    text === 'hello' &&
      e(
        'div',
        {
          style: {
            color: 'green',
          },
        },
        'Valid',
      ),
  );
};

ReactDOM.render(React.createElement(Form), app);

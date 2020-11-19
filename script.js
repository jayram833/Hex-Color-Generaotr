'use strict';

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('button');
const color = document.querySelector('.color');

// Adding event listener to button
btn.addEventListener('click', function () {
  let hexcolor = '#';
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getRandNum()];
  }
//   Display color 
  color.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
//   console.log(hexcolor);
});

// Function to get random number
function getRandNum() {
  return Math.floor(Math.random() * hex.length);
}

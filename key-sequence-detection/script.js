const arr = [];
const secretCode = 'keyword';
let sequence = document.querySelector('.sequence');
sequence.addEventListener('keydown', konamiCode);

function konamiCode(e){
  let val = e.key;
  arr.push(val);
  console.log(arr);
  if(arr.join('').endsWith(secretCode)){
    cornify_add();
  }
}
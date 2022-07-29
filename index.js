const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let generateEl = document.getElementById('generate-el');
let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let passwordLength = 16;

// Finding the random characters
function randomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

// Finding the random characters
function randomCharacter2() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatePasswordOne() {
  let passwordFirst = '';
  let passwordSecond = '';
  for (let i = 1; i < passwordLength; i++) {
    passwordFirst += randomCharacter();
    passwordSecond += randomCharacter2();
    passwordOne.value = passwordFirst;
    passwordTwo.value = passwordSecond;
  }
}

function copyPassword() {
  let copyText1 = document.getElementById('password1');
  copyText1.select();
  document.execCommand('copy');
  alert('Password copied');
}

function copyPassword2() {
  let copyText2 = document.getElementById('password2');
  copyText2.select();
  document.execCommand('copy');
  alert('Password copied');
}

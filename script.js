const Special_Characters = document.querySelector("#Special_Characters");
const numbers = document.querySelector("#numbers");
const lower_case = document.querySelector("#lower_case");
const upper_case = document.querySelector("#upper_case");
const button = document.querySelector("#button");
const copy_btn = document.querySelector("#copy-btn");

let upper = ``;
let lower = ``;
let num = ``;
let special = ``;

Special_Characters.addEventListener("click", () => {
  if (Special_Characters.checked) {
    special = `~!@#$%^&*()_+-=><?`;
    // console.log(string);
  } else {
    special = ``;
  }
});

lower_case.addEventListener("click", () => {
  if (lower_case.checked) {
    lower = `abcdefghijklmnopqrstuvwxyz`;
    // console.log(string);
  } else {
    lower = ``;
  }
});

upper_case.addEventListener("click", () => {
  if (upper_case.checked) {
    upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    // console.log(string);
  } else {
    upper = ``;
  }
});

numbers.addEventListener("click", () => {
  if (numbers.checked) {
    num = `123456789`;
    // console.log(string);
  } else {
    num = ``;
  }
});

const password_length = document.querySelector("#length");
// let length = 0;

// password_length.addEventListener("keyup", () => {
//   length = password_length.value;
//   generatePassword(string);
// });

function generatePassword(str, length) {
  let result = "";
  let len = length;
  for (let i = 0; i <= len; i++) {
    result += str[Math.floor(Math.random() * str.length)];
  }
  console.log(result);

  let output = document.querySelector("#output");
  output.innerText = result;
}

// generatePassword(string);

// to alert --------------------------------

button.addEventListener("click", () => {
  if (
    upper_case.checked ||
    lower_case.checked ||
    Special_Characters.checked ||
    numbers.checked
  ) {
    let string = `${upper}${special}${lower}${num}`;
    console.log(string);

    let length = password_length.value;

    generatePassword(string, length);
  } else {
    alert(`Checkbox Entry is Required`);
  }
});

copy_btn.addEventListener("click", () => {
  const textToCopy = document.getElementById("output").innerText;
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Text Copied");
});

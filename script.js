const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");

genBtn.addEventListener("click", function(){
  genPassword();
});
copyBtn.addEventListener("click", function(){
  copyPassword();
} );

function genPassword() {
  let chars = "0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordLength = 8;
  password = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
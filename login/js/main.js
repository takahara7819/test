let userId = document.getElementById("id");
let userPass = document.getElementById("pass");
let msgId = document.getElementById("msgId");
let msgPs = document.getElementById("msgPs");

//ログイン画面 バリデーションチェック
function btn() {
  let re = new RegExp(/^[ -~]*$/gi);
  let searchId = userId.value;
  let searchPs = userPass.value;

  if (!searchId.match(/^[ -~]*$/)) {
    userId.style.backgroundColor = "red";
    msgId.textContent = "IDは半角英数字記号のみで記入して下さい";
  } else {
    userId.style.backgroundColor = "#9cb6e6";
    msgId.textContent = "";
  }

  if (!searchPs.match(/^[ -~]*$/)) {
    userPass.style.backgroundColor = "red";
    msgPs.textContent = "パスワードは半角英数字記号のみで記入して下さい";
  } else {
    userPass.style.backgroundColor = "#9cb6e6";
    msgPs.textContent = "";
  }

  if (searchId.match(/^[ -~]*$/) && searchPs.match(/^[ -~]*$/)) {
    window.location.href = "/login/signin.html";
  }
}

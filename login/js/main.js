let userId = document.getElementById("id");
let userPass = document.getElementById("pass");
let msgId = document.getElementById("msgId");
let msgPs = document.getElementById("msgPs");

function btn() {
  let re = new RegExp(/^[ -~]*$/gi);
  let searchId = userId.value;
  let searchPs = userPass.value;

  if (!searchId.match(/^[ -~]*$/)) {
    userId.style.backgroundColor = "red";
    msgId.textContent = "IDへは半角英数字記号のみで記入して下さい";
    return;
  }

  if (!searchPs.match(/^[ -~]*$/)) {
    userPass.style.backgroundColor = "red";
    msgPs.textContent = "IDへは半角英数字記号のみで記入して下さい";
    return;
  } else {
    window.location.href = "second.html";
  }
}

// 名前
let name = document.getElementsByName("name");
// 仮名
let kana = document.getElementsByName("kana");
// 生年月日
let birthdate = document.getElementsByName("birthdate");
// 年齢
let age = document.getElementsByName("age");
// 住所
let address = document.getElementsByName("address");
// 電話番号
let tel = document.getElementsByName("tel");
//入社日
let nyshyaday = document.getElementsByName("day");
// 所属部署
let Department = document.getElementsByName("Department");
//ブーリアンチェック用
let isChek = true;

function signUp() {
  let errText = document.getElementsByClassName("msg");

  //名前バリデーションチェック
  if (name[0].value.match(/^[ -~]*$/)) {
    name[0].style.backgroundColor = "red";
    errText[0].textContent = "記号、数字NG";
    isChek = false;
  } else {
    name[0].style.backgroundColor = "#9cb6e6";
    errText[0].textContent = "";
    let a = 1;
  }

  // 仮名バリデーションチェック
  if (!kana[0].value.match(/^[ぁ-んー　]+$/)) {
    kana[0].style.backgroundColor = "red";
    errText[1].textContent = "ひらがなのみ";
    isChek = false;
  } else {
    kana[0].style.backgroundColor = "#9cb6e6";
    errText[1].textContent = "";
  }

  // 生年月日データ分け
  let date = birthdate[0].valueAsDate;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  // 生年月日(年月日表示)
  let bYMD = year + "年" + month + "月" + day + "日";

  //年齢計算
  function getAge(bYMD) {
    let today = new Date();
    let thisYearsBirthday = new Date(today.getFullYear(), month, date);
    let nowAge = today.getFullYear() - year;

    if (today < thisYearsBirthday) {
      nowAge--;
    }
    return nowAge;
  }
  age[0].value = getAge(bYMD);

  //年齢バリデーションチェック
  if (!age[0].value.match(/^[0-9]+$/)) {
    age[0].style.backgroundColor = "red";
    errText[3].textContent = "数字のみ";
    isChek = false;
  } else {
    age[0].style.backgroundColor = "#9cb6e6";
    errText[3].textContent = "";
  }

  //住所バリデーションチェック
  if (
    !address[0].value.match(/^[!"#$%&'()\*\+\-\.,\/:;<=>?＠\[\\\]^_`{|}~]*$/i)
  ) {
    address[0].style.backgroundColor = "#9cb6e6";
    errText[4].textContent = "";
  } else {
    address[0].style.backgroundColor = "red";
    errText[4].textContent = "記号NG";
    isChek = false;
  }

  //電話番号バリデーションチェック
  if (!tel[0].value.match(/^[0-9]+$/)) {
    tel[0].style.backgroundColor = "red";
    errText[5].textContent = "数字のみ";
    isChek = false;
  } else {
    tel[0].style.backgroundColor = "#9cb6e6";
    errText[5].textContent = "";
  }
  // 入社日(年月日表示)
  let dateN = nyshyaday[0].valueAsDate;
  let yearN = dateN.getFullYear();
  let monthN = dateN.getMonth() + 1;
  let dayN = dateN.getDate();
  let nYMD = yearN + "年" + monthN + "月" + dayN + "日";

  //所属バリデーションチェック
  if (!Department[0].value.match(/^[ -~]*$/)) {
    Department[0].style.backgroundColor = "#9cb6e6";
    errText[7].textContent = "";
  } else {
    Department[0].style.backgroundColor = "red";
    errText[7].textContent = "記号、数字NG";
    isChek = false;
  }

  // tableに記入
  if (isChek) {
    let member = document.getElementById("member");
    member.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${"ID発行中"}</td>
      <td>${name[0].value}</td>
      <td>${kana[0].valu}</td>
      <td>${bYMD}</td>
      <td>${age[0].value}</td>
      <td>${nYMD}</td>
      <td>${address[0].value}</td>
      <td>${tel[0].value}</td>
      <td>${Department[0].value}</td></tr>`
    );
  }
}

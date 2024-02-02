let name = document.getElementsByName("name");
let kana = document.getElementsByName("kana");
let birthdate = document.getElementsByName("birthdate");
let date = birthdate[0].valueAsDate;
let age = document.getElementsByName("age");
let address = document.getElementsByName("address");
let tel = document.getElementsByName("tel");
let Department = document.getElementsByName("Department");

function signUp() {
  let errText = document.getElementsByClassName("msg");

  // 名前

  if (name[0].value.match(/^[ -~]*$/)) {
    name[0].style.backgroundColor = "red";
    errText[0].textContent = "記号、数字NG";
  } else {
    name[0].style.backgroundColor = "#9cb6e6";
    errText[0].textContent = "";
  }
  // 仮名
  if (!kana[0].value.match(/^[ぁ-んー　]+$/)) {
    kana[0].style.backgroundColor = "red";
    errText[1].textContent = "ひらがなのみ";
  } else {
    kana[0].style.backgroundColor = "#9cb6e6";
    errText[1].textContent = "";
  }

  // 生年月日

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let test3 = year + "年" + month + "月" + day + "日";

  //年齢計算
  function getAge(test3) {
    let today = new Date();
    let thisYearsBirthday = new Date(today.getFullYear(), month, date);
    let nowAge = today.getFullYear() - year;

    if (today < thisYearsBirthday) {
      nowAge--;
    }
    return nowAge;
  }
  // console.log(getAge(test3));

  // 年齢
  age[0].value = getAge(test3);

  if (age[0].value.match(/^[0-9]+$/)) {
    age[0].style.backgroundColor = "red";
    errText[3].textContent = "数字のみ";
  } else {
    age[0].style.backgroundColor = "#9cb6e6";
    errText[3].textContent = "";
  }
  // 住所
  if (!address[0].value.match(/^[ -~]*$/)) {
    address[0].style.backgroundColor = "#9cb6e6";
    errText[4].textContent = "";
  } else {
    address[0].style.backgroundColor = "red";
    errText[4].textContent = "記号NG";
  }
  // 電話番号
  if (!tel[0].value.match(/^[0-9]+$/)) {
    tel[0].style.backgroundColor = "red";
    errText[5].textContent = "数字のみ";
  } else {
    tel[0].style.backgroundColor = "#9cb6e6";
    errText[5].textContent = "";
  }
  // 所属部署
  let Department = document.getElementsByName("Department");

  if (!Department[0].value.match(/^[ -~]*$/)) {
    Department[0].style.backgroundColor = "#9cb6e6";
    errText[7].textContent = "";
  } else {
    Department[0].style.backgroundColor = "red";
    errText[7].textContent = "記号、数字NG";
  }
}

//一覧に追加
// let member = document.getElementById("member");
// if () {

//   member.insertAdjacentHTML("beforeend", `<tr></tr>`);
// }

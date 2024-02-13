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

//今日の年月日抽出
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
//tableに誕生日記入
let bYMD = "";
//tableに記入用
let member = document.getElementById("member");

//sort機能 セレクトボックス
let sort = document.getElementById("sort");

//年齢だけ自動入力
birthdate[0].addEventListener("change", (e) => {
  // console.log("カレンダーデータ取得="+e.target.value);

  //カレンダーの年月日抽出
  let data = new Date(e.target.value);
  let Cyear = data.getFullYear();
  let Cmonth = data.getMonth() + 1;
  let Cday = data.getDate();
  // 生年月日(年月日表示)
  bYMD = Cyear + "年" + Cmonth + "月" + Cday + "日";

  //今年の誕生日
  let thisYearsBirthday = new Date(today.getFullYear(), Cmonth, Cday);
  //仮年齢
  let ageData = today.getFullYear() - Cyear;
  console.log(ageData);
  //年齢計算+結果を記入
  if (year >= Cyear) {
    if (month > Cmonth) {
      age[0].value = ageData;
    } else if (month == Cmonth) {
      if (day >= Cday) {
        age[0].value = ageData;
      } else if (day < Cday) {
        age[0].value = ageData - 1;
      }
    } else if (month < Cmonth) {
      age[0].value = ageData - 1;
    }
  } else {
    age[0].value = ageData;
  }
});

//登録記入画面のバリデーションチェック+表に追加
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
  // if (!address[0].value.match(/^[ -/:-@[-´{-~]*$/)) {
  //   address[0].style.backgroundColor = "#9cb6e6";
  //   errText[4].textContent = "";
  // } else {
  //   address[0].style.backgroundColor = "red";
  //   errText[4].textContent = "記号NG";
  //   isChek = false;
  // }

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
    member.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${"ID発行中"}</td>
      <td>${name[0].value}</td>
      <td>${kana[0].value}</td>
      <td>${bYMD}</td>
      <td>${age[0].value}</td>
      <td>${nYMD}</td>
      <td>${address[0].value}</td>
      <td>${tel[0].value}</td>
      <td>${Department[0].value}</td></tr>`
    );
  }
}

//sort.json確認
// fetch('../sort.json')
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.log("失敗しました");
// });

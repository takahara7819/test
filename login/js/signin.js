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
let btnChek = true;
//-----------------------
//今日の年月日抽出
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
//tableに誕生日記入
let bYMD = "";
//-----------------------
//sort機能 セレクトボックス
let sort = document.getElementById("sort");
//絞り込み機能 textボックス
let search_text = document.getElementById("search_text");
//-----------------------
//編集機能
let parent; //編集選択した行全体
let getId = document.getElementsByClassName("m_btn"); //編集ボタン
let tdText = document.getElementsByClassName("tdText");
//-----------------------

//年齢だけ自動入力
birthdate[0].addEventListener("change", (e) => {
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
  if (!address[0].value.match(/^[0-9]+$/)) {
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
    member.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${"ID発行中"}</td>
      <td class="tdText">${name[0].value}</td>
      <td class="tdText">${kana[0].value}</td>
      <td class="tdText">${bYMD}</td>
      <td class="tdText">${age[0].value}</td>
      <td class="tdText">${nYMD}</td>
      <td class="tdText">${address[0].value}</td>
      <td class="tdText">${tel[0].value}</td>
      <td class="tdText">${Department[0].value}</td>
      <td><button class="m_btn">編集</button></td>
      </tr>`
    );
  }
}

// ファイル読み込み 「await callApi()」で都度読み込む
async function callApi() {
  const res = await fetch("../sort.json");
  const users = await res.json();
  return users;
}

//jsonをHTMLに表示
async function clickBtn() {
  const getApi = await callApi();

  // ボタン押す前にも表示させたい
  for (let i = 0; i < getApi.length; i++) {
    member.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${"ID発行中"}</td>
        <td class="tdText">${getApi[i].employee_name}</td>
        <td class="tdText">${getApi[i].furigana}</td>
        <td class="tdText">${getApi[i].date_of_birth}</td>
        <td class="tdText">${getApi[i].age}</td>
        <td class="tdText">${getApi[i].hire_date}</td>
        <td class="tdText">${getApi[i].address}</td>
        <td class="tdText">${getApi[i].phone_number}</td>
        <td class="tdText">${getApi[i].department}</td>
        <td><button class="m_btn">編集</button></td>
        </tr>`
    );
  }

  //編集機能 ボタン選択
  function test(e) {
    parent = e.target.closest("tr");
    let td = parent.querySelectorAll("td");

    //編集モード
    if (e.target.innerHTML == "編集") {
      e.target.innerHTML = "確定";

      for (let i = 0; i < td.length - 1; i++) {
        let td_text = td[i].innerHTML;
        if (!i == 0) {
          td[
            i
          ].innerHTML = `<input type="text" class="input_text" value="${td_text}"></input>`;
        }
      }

      //確定モード
    } else if (e.target.innerHTML == "確定") {
      e.target.innerHTML = "編集";
      let input_text = document.getElementsByClassName("input_text");
      let input_arr = new Array();

      for (let i = 0; i < td.length - 2; i++) {
        let td_i = i + 1;
        input_arr.push(input_text[i].value);
        input_text[i].insertAdjacentHTML(
          "beforebegin",
          `<div>${input_arr[i]}</div>`
        );
        if (input_arr.length == 8) {
          member.querySelector("input").remove();
        }
      }
      console.log(input_arr);
    }
  }
  for (let i = 0; i < getId.length; i++) {
    getId[i].addEventListener("click", test);
  }
}
clickBtn();

//ボタンを押したら要素を削除→書き換え
async function sortBtn() {
  const sortApi = await callApi(); //json再取得
  while (member.firstChild) {
    member.removeChild(member.firstChild);
  }
  //ソート機能
  //名前通常
  if (sort.value == "nameDf") {
    const unsort = await callApi();
  }
  //名前昇順
  if (sort.value == "nameUp") {
    sortApi.sort(function (x, y) {
      return x.furigana.localeCompare(y.furigana, "ja");
    });
  }
  //名前降順
  if (sort.value == "nameDw") {
    sortApi.sort(function (x, y) {
      return y.furigana.localeCompare(x.furigana, "ja");
    });
  }
  //年齢昇順
  if (sort.value == "ageUp") {
    sortApi.sort(function (x, y) {
      return x.age - y.age;
    });
  }
  //年齢降順
  if (sort.value == "ageDw") {
    sortApi.sort(function (x, y) {
      return y.age - x.age;
    });
  }
  for (let s = 0; s < sortApi.length; s++) {
    member.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${"ID発行中"}</td>
        <td class="tdText">${sortApi[s].employee_name}</td>
        <td class="tdText">${sortApi[s].furigana}</td>
        <td class="tdText">${sortApi[s].date_of_birth}</td>
        <td class="tdText">${sortApi[s].age}</td>
        <td class="tdText">${sortApi[s].hire_date}</td>
        <td class="tdText">${sortApi[s].address}</td>
        <td class="tdText">${sortApi[s].phone_number}</td>
        <td class="tdText">${sortApi[s].department}</td>
        <td><button class="m_btn">編集</button></td>
        </tr>`
    );
  }
  //編集機能 ボタン選択
  // function test(e) {
  //   console.log(e.target.innerHTML);
  //   e.target.innerHTML = "確定";
  // }
  // for (let i = 0; i < getId.length; i++) {
  //   getId[i].addEventListener("click", test);
  // }
}

//絞り込み機能
async function searchBtn() {
  while (member.firstChild) {
    member.removeChild(member.firstChild);
  }
  const searchApi = await callApi(); //json再取得
  const searchV = search_text.value; //検索ワード

  for (let se = 0; se < searchApi.length; se++) {
    if (searchApi[se].employee_name.indexOf(searchV) > -1) {
      //部分一致のみ表示
      member.insertAdjacentHTML(
        "beforeend",
        `<tr>
          <td>${"ID発行中"}</td>
          <td class="tdText">${searchApi[se].employee_name}</td>
          <td class="tdText">${searchApi[se].furigana}</td>
          <td class="tdText">${searchApi[se].date_of_birth}</td>
          <td class="tdText">${searchApi[se].age}</td>
          <td class="tdText">${searchApi[se].hire_date}</td>
          <td class="tdText">${searchApi[se].address}</td>
          <td class="tdText">${searchApi[se].phone_number}</td>
          <td class="tdText">${searchApi[se].department}</td>
          <td><button class="m_btn">編集</button></td>
          </tr>`
      );
    }
  }
  //編集機能 ボタン選択
  // function test(e) {
  //   console.log(e.target.innerHTML);
  //   e.target.innerHTML = "確定";
  // }
  // for (let i = 0; i < getId.length; i++) {
  //   getId[i].addEventListener("click", test);
  // }
}

//編集機能
let member = document.getElementById("member"); //table<tr が入ってる
let table_tr = new Array(0); //配列化

//tbody id="member"の情報をtable_trに配列として収納
function memberBox() {
  for (let m = 0; m < member.rows.length; m++) {
    record = new Array(0);
    for (let j = 1; j < member.rows[m].cells.length - 1; j++) {
      record.push(member.rows[m].cells[j].innerHTML);
    }
    table_tr.push(record);
  }
}
memberBox();

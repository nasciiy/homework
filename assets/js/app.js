// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
// 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
  // 2.2 新しくdivを作成する
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
  // 2.4 新しく作成したdivにCSSのクラスを追加する
  // 2.5 div[id=box]を取得する
  // 2.6 作成したdivを追加する


  // １
  // let addBtn = document.getElementById("addBtn");

  // addBtn.addEventListener("click" , function(){

  //   let inputColor = document.getElementById("inputColor");
    
  //   let div = document.createElement("div");
  //   div.textContent = inputColor.value;

  //   let box = document.getElementById("box");
  //   box.insertBefore (div , inputColor.firstChild);


    



  // })


  // 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
// 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
  // 2.2 新しくdivを作成する
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
  // 2.4 新しく作成したdivにCSSのクラスを追加する
  // 2.5 div[id=box]を取得する
  // 2.6 作成したdivを追加する

  //追加ボタンのクリック
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {
  //入力欄を取得する
  let inputColor = document.getElementById("inputColor");

  //入力欄の値を取得する
  let inputColorValue = inputColor.value;

  //divタグの作成
  let divColor = document.createElement("div");

  //divタグの背景色に入力欄の値を反映
  divColor.style.backgroundColor = inputColorValue;

  //divにclass名を追加
  divColor.classList.add("panel");

  //カラーを反映させるdivタグの親要素を取得
  let box = document.getElementById("box");

  //divを追加する
  box.insertBefore(divColor, box.firstChild);

  //入力欄を空欄にする
  inputColor.value = "";
})





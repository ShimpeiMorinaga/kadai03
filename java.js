 // 居住地ランダム選定
 const residenceOptions = ["東京", "大阪", "名古屋"];
 var randomResidence 
 console.log(3)
 function start() {
     roulette = setInterval(function() {
       // 0〜2の範囲でランダムな数値を作成
       var idx = Math.floor( Math.random() * residenceOptions.length ) ;
       // 東京、大阪、名古屋をランダムで設定。
      
       randomResidence = residenceOptions[idx];
       console.log(4)
       document.getElementById("roulette").innerHTML = randomResidence;
     }, 100);
   }

   // ルーレットを停止
 function stop() {
     if(roulette) {
       clearInterval(roulette);
     }
   }

// ヘッドラインから画面遷移する処理
const button = document.querySelectorAll(".headline")
button[0].onclick=function(){
    const about = document.querySelector("#about")
    about2 = about.getBoundingClientRect();
    window.scroll(about2.x,about2.y)
}
button[1].onclick=function(){
    const about = document.querySelector("#service")
    about2 = about.getBoundingClientRect();
    window.scroll(about2.x,about2.y)
}
button[2].onclick=function(){
    const about = document.querySelector("#contact")
    about2 = about.getBoundingClientRect();
    window.scroll(about2.x,about2.y)
}

// モーダルウインドウを開く関数
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  // モーダルウィンドウを閉じる関数
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
        
// フォーム入力データを処理する関数
function getDataFromForm() {

    // 年齢処理
    const ageInput = document.querySelector('input[name="age"]');
    const age = parseInt(ageInput.value);

    // 性別処理
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    let gender;
    for (const input of genderInputs) {
        if (input.checked) {
            gender = input.value;
            break;
        }
    }

    // 家族人数処理
    const familyInput = document.querySelector('input[name="family"]');
    const familySize = parseInt(familyInput.value);

    // 延床面積設定（家族人数×10）
    const floorArea = familySize * 10;

    // 家賃相場一覧
    const rentData = [
        { "延床面積": "東京 (10)", "家賃": 30000 },
        { "延床面積": "東京 (20)", "家賃": 60000 },
        { "延床面積": "東京 (30)", "家賃": 90000 },
        { "延床面積": "東京 (40)", "家賃": 120000 },
        { "延床面積": "東京 (50)", "家賃": 150000 },
        { "延床面積": "東京 (60)", "家賃": 180000 },
        { "延床面積": "東京 (70)", "家賃": 210000 },
        { "延床面積": "東京 (80)", "家賃": 240000 },
        { "延床面積": "東京 (90)", "家賃": 270000 },
        { "延床面積": "東京 (100)", "家賃": 300000 },
        { "延床面積": "大阪 (10)", "家賃": 25000 },
        { "延床面積": "大阪 (20)", "家賃": 50000 },
        { "延床面積": "大阪 (30)", "家賃": 75000 },
        { "延床面積": "大阪 (40)", "家賃": 100000 },
        { "延床面積": "大阪 (50)", "家賃": 125000 },
        { "延床面積": "大阪 (60)", "家賃": 150000 },
        { "延床面積": "大阪 (70)", "家賃": 175000 },
        { "延床面積": "大阪 (80)", "家賃": 200000 },
        { "延床面積": "大阪 (90)", "家賃": 225000 },
        { "延床面積": "大阪 (100)", "家賃": 250000 },
        { "延床面積": "名古屋 (10)", "家賃": 20000 },
        { "延床面積": "名古屋 (20)", "家賃": 40000 },
        { "延床面積": "名古屋 (30)", "家賃": 60000 },
        { "延床面積": "名古屋 (40)", "家賃": 80000 },
        { "延床面積": "名古屋 (50)", "家賃": 100000 },
        { "延床面積": "名古屋 (60)", "家賃": 120000 },
        { "延床面積": "名古屋 (70)", "家賃": 140000 },
        { "延床面積": "名古屋 (80)", "家賃": 160000 },
        { "延床面積": "名古屋 (90)", "家賃": 180000 },
        { "延床面積": "名古屋 (100)", "家賃": 200000 }
];

const purchaseData = [
        { "延床面積": "東京 (10)", "購入価格": 10000000 },
        { "延床面積": "東京 (20)", "購入価格": 15000000 },
        { "延床面積": "東京 (30)", "購入価格": 20000000 },
        { "延床面積": "東京 (40)", "購入価格": 25000000 },
        { "延床面積": "東京 (50)", "購入価格": 30000000 },
        { "延床面積": "東京 (60)", "購入価格": 35000000 },
        { "延床面積": "東京 (70)", "購入価格": 40000000 },
        { "延床面積": "東京 (80)", "購入価格": 45000000 },
        { "延床面積": "東京 (90)", "購入価格": 50000000 },
        { "延床面積": "東京 (100)", "購入価格": 55000000 },
        { "延床面積": "大阪 (10)", "購入価格": 10000000 },
        { "延床面積": "大阪 (20)", "購入価格": 14000000 },
        { "延床面積": "大阪 (30)", "購入価格": 18000000 },
        { "延床面積": "大阪 (40)", "購入価格": 22000000 },
        { "延床面積": "大阪 (50)", "購入価格": 26000000 },
        { "延床面積": "大阪 (60)", "購入価格": 30000000 },
        { "延床面積": "大阪 (70)", "購入価格": 34000000 },
        { "延床面積": "大阪 (80)", "購入価格": 38000000 },
        { "延床面積": "大阪 (90)", "購入価格": 42000000 },
        { "延床面積": "大阪 (100)", "購入価格": 46000000 },
        { "延床面積": "名古屋 (10)", "購入価格": 10000000 },
        { "延床面積": "名古屋 (20)", "購入価格": 13000000 },
        { "延床面積": "名古屋 (30)", "購入価格": 16000000 },
        { "延床面積": "名古屋 (40)", "購入価格": 19000000 },
        { "延床面積": "名古屋 (50)", "購入価格": 22000000 },
        { "延床面積": "名古屋 (60)", "購入価格": 25000000 },
        { "延床面積": "名古屋 (70)", "購入価格": 28000000 },
        { "延床面積": "名古屋 (80)", "購入価格": 31000000 },
        { "延床面積": "名古屋 (90)", "購入価格": 34000000 },
        { "延床面積": "名古屋 (100)", "購入価格": 37000000 }
                
];

// 家賃及び生涯家賃処理
let rent;
for (const data of rentData) {
if (data.延床面積 === randomResidence + " (" + floorArea + ")") {
rent = data.家賃;
break;
}
}

const remainingYears = gender === "男性" ? 80 - age : 90 - age;
const lifetimeRent = remainingYears * rent*12;


// 購入価格処理
let purchase;
for (const data of purchaseData) {
if (data.延床面積 === randomResidence + " (" + floorArea + ")") {
purchase = data.購入価格;
break;
}
}

// 賃貸・購入勝敗判定
let result; 
if (lifetimeRent<purchase){
    result= "賃貸"
}else{
    result= "購入"
}

// モーダルウインドウのhtml改修部分
const floorAreaDisplay = document.getElementById("floor-area");
floorAreaDisplay.textContent = "家族人数を鑑みると、延床面積は " + floorArea + "m2が理想です。";


const residenceDisplay = document.getElementById("residence");
residenceDisplay.textContent = "おめでとう、あなたの居住地は" + randomResidence + "です！！！";


const lifetimeRentDisplay = document.getElementById("lifetimeRent");
lifetimeRentDisplay.textContent = "賃貸の場合、生涯に支払う家賃の総額は " + lifetimeRent + "円です";

const purcaseDisplay = document.getElementById("purchase");
purcaseDisplay.textContent = "購入する場合、価格は " + purchase + "円です。";

const resultDisplay = document.getElementById("result");
resultDisplay.textContent="従って"+randomResidence+"に住む場合、あなたは"+result+"の方が有利です。";

openModal();

return false;
}

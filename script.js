let mainMenu = document.querySelector('#mainMenu');
let menu = document.querySelector('#menu');
let btnGo = document.querySelector('.btnGo');

let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.innerText = orderNumber;

const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
let str = '';

btnGo.addEventListener('click', function (){ 
    mainMenu.style.display = 'block';
    menu.style.display = 'none';
  

    let minValue = parseInt(document.querySelector('#minValue').value);
        if (minValue < -999 || minValue > 999) {
            minValue = 0;
        }
        if (minValue != String(minValue)) {
            minValue = 0;
        }
    let maxValue = parseInt(document.querySelector('#maxValue').value);
        if (maxValue < -999 || maxValue > 999) {
            maxValue = 100;
        }
        if (maxValue != String(maxValue)) {
        maxValue = 100;
        }
    let answerNumber  = Math.floor((minValue + maxValue) / 2);
        if (answerNumber < 20) {
            str = units[answerNumber];
        } else if (answerNumber < 100) {
            str = tens[Math.floor(answerNumber / 10)];
            if (answerNumber % 10 !== 0) {
            str += ' ' + units[answerNumber % 10];
            }
        } else if (answerNumber < 1000) {
            str = hundreds[Math.floor(answerNumber / 100)];
            if (answerNumber % 100 !== 0) {
            str += '' + (answerNumber % 100);
            }
        }
    answerField.innerText = `Вы загадали число ${str }?`;

   


    document.querySelector('#btnRetry').addEventListener('click', function () {
        minValue = 0;
        maxValue = 100;
        orderNumber = 1;
        mainMenu.style.display = 'none';
        menu.style.display = 'block';
        orderNumberField.textContent = orderNumber;
        gameRun = true;
        str = '';
        location.reload();
    });

// строим кнопку больше

    document.querySelector('#btnOver').addEventListener('click', function () {
        if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random() * 2);
                switch (phraseRandom) {
                    case 1:
                        answerField.innerText = answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                        break;
                   
                    default:
                        answerField.innerText = answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                        break;
                }
                gameRun = false;
            } else {
                minValue = answerNumber+1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = parseInt(orderNumber);
                if (answerNumber < 20) {
                    str = units[answerNumber];
                  } else if (answerNumber < 100) {
                    str = tens[Math.floor(answerNumber / 10)];
                    if (answerNumber % 10 !== 0) {
                      str += ' ' + units[answerNumber % 10];
                    }
                  } else if (answerNumber < 1000) {
                    str = hundreds[Math.floor(answerNumber / 100)];
                    if (answerNumber % 100 !== 0) {
                      str += '' + (answerNumber % 100);
                    }
                  }
                answerField.innerText = `Вы загадали число ${str }?`;
            }
        }
    });

// строим кнопку меньше

    document.querySelector('#btnLess').addEventListener('click', function () {
        if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random() * 2);
                switch (phraseRandom) {
                   
                    case 1:
                        answerField.innerText = answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                        break;
                    default:
                        answerField.innerText = answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                       break;
                }
                gameRun = false;
            } else {
                maxValue = answerNumber;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = parseInt(orderNumber);
                if (answerNumber < 20) {
                    str = units[answerNumber];
                  } else if (answerNumber < 100) {
                    str = tens[Math.floor(answerNumber / 10)];
                    if (answerNumber % 10 !== 0) {
                      str += ' ' + units[answerNumber % 10];
                    }
                  } else if (answerNumber < 1000) {
                    str = hundreds[Math.floor(answerNumber / 100)];
                    if (answerNumber % 100 !== 0) {
                      str += '' + (answerNumber % 100);
                    }
                  }
                answerField.innerText = `Вы загадали число ${str }?`;
            }
        }
    });


});

//начало кнопки Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
       const phraseRandom = Math.round( Math.random()*4);
       switch (phraseRandom) {
           case 0:
               answerField.innerText = `Я  всегда выигрываю\n\u{1F60E}`;
               break;
           case 1:
           answerField.innerText = `УРА! Я угадайка\n\u{1F60E}`;
           break;
           case 2:
           answerField.innerText = `Я  угадываю\n\u{1F60E}`;
            break;
            case 3:
           answerField.innerText = `Да это легко\n\u{1F60E}`;
            break;           
       }
      gameRun = false; 
        }
   });





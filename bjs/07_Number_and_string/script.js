let lastOperand = 0; /*последний введенный операнд*/
let operation = null;/*выбранная операция*/

const inputWindow = document.querySelector('#inputWindow');



/*создадим поведение кнопки 1.*/
document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1'; 
})

document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2'; 
})

document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3'; 
})

document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4'; 
})

document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5'; 
})

document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6'; 
})

document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7'; 
})

document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8'; 
})

document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9'; 
})
document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0'; 
})


document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';

    console.log(lastOperand);
    console.log(operation);
    
})

document.querySelector('#btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
    
    console.log(lastOperand);
    console.log(operation);
    
})

 document.querySelector('#btn_multiplier').addEventListener('click', function () {
     lastOperand = parseInt(inputWindow.value);
     operation = 'multiplier';/* умножения*/
    inputWindow.value = '';

    
 })


  document.querySelector('#btn_sqrt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
     operation = 'sqrt';/*квадратный корень*/
     inputWindow.value = '';

    
  })

document.querySelector('#btn_del').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'del';/*деления*/
    inputWindow.value = '';

    
})


document.querySelector('#btn_calc').addEventListener('click', function () {
   if(operation === 'sum'){
    const result = lastOperand + parseInt(inputWindow.value);
    operation = null; /*очищаем */
    lastOperand = 0; /*очищаем */
    inputWindow.value = result;
   } 
   if(operation === 'def'){
    const result = lastOperand - parseInt(inputWindow.value);
    operation = null; /*очищаем */
    lastOperand = 0; /*очищаем */
    inputWindow.value = result;
   } 

   if(operation === 'multiplier'){
    const result = lastOperand * parseInt(inputWindow.value);
    operation = null; /*очищаем */
    lastOperand = 0; /*очищаем */
    inputWindow.value = result;
   } 

   if(operation === 'del'){
    const result = lastOperand / parseInt(inputWindow.value);
    operation = null; /*очищаем */
    lastOperand = 0; /*очищаем */
    inputWindow.value = result;
   }

// })   if(operation === 'sqrt') {      
//     const result = lastOperand &radic parseInt(inputWindow.value);     
//      operation = null; /*очищаем */
//     lastOperand = 0; /*очищаем */
//      inputWindow.value = result;   

//  }
//inputWindow.value = lastOperand ** (1/2);

//  function sqrt(){
//     inputWindow.textContent = Math.sqrt(eval(input.textContent));
// }


document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = ''; /*очистка поля*/
})


// eval - это встроенная функция, 
//  оценивает «String» как выражение Python
//  и возвращает результат как целое число parseInt - для перевода в числовой вид

})

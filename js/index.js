// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const minWeight = document.querySelector('.minweight__input'); //добавление мин значения по весу
const maxWeight = document.querySelector('.maxweight__input');//добавление мак значения по весу

// список фруктов в JSON формате. это массив с объектами
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек

const display = () => {
 fruitsList.innerHTML = ''; 
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
   
  for (let i = 0; i < fruits.length; i++) {
    
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild 
    // формируем новый элемент li при помощи  document.createElement
     const li = document.createElement('li')
    li.classList.add('fruit__item')
    if (fruits[i].color == 'фиолетовый'){
      li.classList.add('fruit_violet')
     } else
    if (fruits[i].color == 'зеленый') {
			li.classList.add('fruit_green')
		} else
    if (fruits[i].color == 'розово-красный') {
			li.classList.add('fruit_carmazin')
		} else
    if (fruits[i].color == 'желтый') {
	 		li.classList.add('fruit_yellow')
	} else
    if (fruits[i].color == 'светло-коричневый') {
			li.classList.add('fruit_lightbrown')
		} else
     if (fruits[i].color === 'оранжевый') {
      li.classList.add('fruit_orange')
    }
    else {
      li.classList.add('fruit_anyFruit')
    }
    fruitsList.appendChild(li)
  
//создаем новый элемент div с помощью document.createElement('div') для создания DOM-элемент. 
     const div = document.createElement('div')
    div.classList.add('fruit__info')
     li.appendChild(div)
     div.innerHTML = `
     <div>index: ${i + 1}</div> 
       <div>kind: ${fruits[i].kind}</div>
        <div>color: ${fruits[i].color}</div>
       <div>weight (кг): ${fruits[i].weight}</div>
      `
  }
};

display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];
  // прописываем newFruits и присваиваем объект [...fruits]
   let newFruits = [...fruits]
  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
     let randItem = getRandomInt(0, fruits.length - 1)
     result.push(fruits[randItem])
     fruits.splice(randItem, 1)
  } 
  fruits = result;
   let notShuffled = fruits.every((el, index) => el === newFruits[index])
	if (notShuffled) {
		alert('Не перемещен! Попробуйте ещё раз.')
	}
};
// Эта кнопка перемешивания массива и отображения нового
shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {

  if (isNaN(maxWeight.value) || isNaN(minWeight.value)) {
     alert('Укажите значение в числовой форме')
     maxWeight.value = '';
     minWeight.value = '';
    return fruits;
  }
   // TODO: допишите функцию 
    return fruits.filter ((item) => {
     if (parseInt(minWeight.value) > parseInt(maxWeight.value)){
        [minWeight.value, maxWeight.value] = [maxWeight.value, minWeight.value];
      }
      return (item.weight >= parseInt(minWeight.value)) && (item.weight <= parseInt(maxWeight.value))
   })
 
};
// кнопка фильтровать
filterButton.addEventListener('click', () => {
  fruits = filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету

   const priorityColor = ['светло-коричневый', 'зеленый','фиолетовый', 'розово-красный', 'желтый'];
   const color1 = priorityColor.indexOf(a.color);
   const color2 = priorityColor.indexOf(b.color); 
   return color1 > color2;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
    // Вызов метода сортировки пузырьком
     bubbleMethod(arr, comparation) 
  },
  quickSort(arr, comparation) {
    quickSortMethod(arr, comparation)
    // TODO: допишите функцию быстрой сортировки
  },
  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

 /*Пузырьковая сортировка */ 
   
  function bubbleMethod(arr, comparation) { // arr - массив, который нужно отсортировать по возрастанию.
  const n = arr.length // внешняя итерация по элементам
      for (let i = 0; i < n - 1; i++) {
      // внутренняя итерация для перестановки элемента в конец массива
        for (let j = 0; j < n - 1 - i; j++) {
             // сравниваем элементы
           if (comparation(arr[j], arr[j + 1])) {
             // делаем обмен элементов
              let temp = arr[j + 1]
              arr[j + 1] = arr[j]
              arr[j] = temp
            }
        }
    }
}

  function quickSortMethod(arr, comparation) {
    if (arr.length < 2){
      return arr;
      }
      let left = []
      let right = []
      let currentItem= Math.floor(arr.length / 2)
      let pivot = arr[currentItem]


      for (let i = 0; i < arr.length; i++) {
      if (i ===currentItem){
      continue
      }
      if (comparation(arr[i], pivot)){
      right.push(arr[i])
      } else {
      left.push(arr[i])
      }   
      }
      return fruits = [...quickSortMethod(left, comparation), pivot, ...quickSortMethod(right, comparation)]
      }

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
   if (sortKindLabel.textContent === 'bubbleSort'){
     sortKindLabel.textContent = 'quickSort';
     sortKind = 'quickSort';
   } else {
     sortKindLabel.textContent = 'bubbleSort';
		sortKind = 'bubbleSort';
   }
});

//Активации сортировки
sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
   sortTimeLabel.textContent = '...sorting'
  
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeLabel.textContent = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/
//Добавляем кнопку "Добавить фрукт"
addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
   if (kindInput.value == '' || colorInput.value == '' || weightInput.value == ''){
    alert('Укажите название фрукта')
    return
   }
   // если вес указан прописью, то выдаст предупреждение
   if (isNaN(weightInput.value)){
     alert('Укажите вес в числовой форме')
     return
      } else {
     fruits.push({
			kind: kindInput.value,
	 		color: colorInput.value,
			weight: weightInput.value,
		})
   }
  display(); 
  kindInput.value = '';
  colorInput.value = '';
  weightInput.value = '';
});


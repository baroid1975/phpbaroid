const personGenerator = {
   
    //фамилии
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

   //мужские имена
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
   
    //мужские профессии
professionMALEJson: `{
    "count": 10,
    "list": {     
        "id_1": "Тракторист",
        "id_2": "Журналист",
        "id_3": "Менеджер",
        "id_4": "IT-специалист",
        "id_5": "Машинист",
        "id_6": "Фрезеровщик",
        "id_7": "Механник",
        "id_8": "Бульдазерист",
        "id_9": "Шахтер",
        "id_10": "Полицейский"
    }
}`,
    //женские профессии
professionFEMALEJson: `{
    "count": 10,
    "list": {     
        "id_1": "Бухгалтер",
        "id_2": "Журналистка",
        "id_3": "Кассирша",
        "id_4": "IT-специалист",
        "id_5": "Машинистка",
        "id_6": "Медсестра",
        "id_7": "Врач",
        "id_8": "Домохозяйка",
        "id_9": "Повар",
        "id_10": "Продавец-консультант"
    }
}`,

    //месяца
    birthMonthJson: `{  
    "count": 12,
    "list": {
        "id_1": "января",
        "id_2": "февраля",
        "id_3": "марта",
        "id_4": "апреля",
        "id_5": "мая",
        "id_6": "июня",
        "id_7": "июля",
        "id_8": "августа",
        "id_9": "сентября",
        "id_10": "октября",
        "id_11": "ноября",
        "id_12": "декабря"
        
    }
}`,

    //Женские имена
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Светлана",
            "id_3": "Марина",
            "id_4": "Ангилина",
            "id_5": "Динара",
            "id_6": "Мария",
            "id_7": "Милана",
            "id_8": "Дарья",
            "id_9": "Елена",
            "id_10": "Анастасия"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

//Генерация отчества

randomPatronymic: function () {
    randomName = this.randomValue(this.firstNameMaleJson)
    // console.log(randomName)
    if (randomGender == 0) {
        if (randomName === 'Дмитрий') {
            return randomName.replace ('й', 'евич')
        } else if (randomName === 'Михаил') {
            return randomName.replace ('ил', 'йлович')
        } else if (randomName === 'Никита') {
            return randomName.replace ('а', 'ич') 
         } else if (randomName === 'Андрей') {
            return randomName.replace ('й', 'евич')
            } else {
                return randomName + 'ович'
            } 
    } else {
        if (randomName === 'Дмитрий') {
            return randomName.replace ('й', 'евна')
        } else if (randomName === 'Михаил') {
            return randomName.replace ('ил', 'йловна')
        } else if (randomName === 'Никита') {
            return randomName.replace ('а', 'ична') 
            }  else if (randomName === 'Андрей') {
                return randomName.replace ('й', 'евна00')
            } else {
                return randomName + 'овна'
            } 
    } 
},

//Генерация фамилий
randomSurname: function() {
    switch (randomGender) {
        case 0: 
            return this.randomValue(this.surnameJson)
        case 1: 
            return this.randomValue(this.surnameJson) + 'а'

    }
},

  //Генерация имен
  randomFirstName: function() {
    switch (randomGender) {
        case 0: 
             return this.randomValue(this.firstNameMaleJson) 
        case 1: 
             return this.randomValue(this.firstNameFemaleJson)                 
    }
},
    //Генерация профессий
    randomProfession: function() {
        switch (randomGender) {
            case 0: 
                return this.randomValue(this.professionMALEJson)
            case 1:
                return this.randomValue(this.professionFEMALEJson)
   }  
    },
    //Генерация дня
    randomBirthDay: function () {
		randomDays = this.randomIntNumber(12, 1)
		if (randomDays == 2) {
			return this.randomIntNumber(28, 1) + ' '
		} else if (randomDays % 2 == 0) {
			return this.randomIntNumber(30, 1) + ' '
		} else {
			return this.randomIntNumber(31, 1) + ' '
		}
	},
    //Генерация месяцев

     randomBirthMonth: function() {

       return this.randomValue(this.birthMonthJson);
    },

   //Генерация пола
   randomGender: function () {
    randomGender = this.randomIntNumber(1, 0)
    switch (randomGender) {
        case 0:
            return this.GENDER_MALE
        case 1:
            return this.GENDER_FEMALE
    }
},
    //Генерация года
     randomBirthYear: function() {
        return this.randomIntNumber(1972, 2002) + ' года рождения'
     },
  
    getPerson: function () {
    this.person = {}; 
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.Surname = this.randomSurname();
    this.person.patronymic = this.randomPatronymic();
    this.person.profession = this.randomProfession();
    this.person.birthDay = this.randomBirthDay();
    this.person.birthMonth = this.randomBirthMonth();
    this.person.birthYear = this.randomBirthYear();
     return this.person;
    }
};

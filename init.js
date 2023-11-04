const btnGenerator = document.querySelector('#btnGenerator');
const btnCleaer = document.querySelector('#btnCleaer');
btnGenerator.addEventListener('click', function ()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.Surname; 
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#professionOutput').innerText = initPerson.profession; 
    document.querySelector('#genderOutput').innerText = initPerson.gender; 
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear; 
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth; 
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay; 
});
   
btnCleaer.addEventListener('click', function ()
{
document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#surnameOutput').innerText = 'Фамилия'; 
    document.querySelector('#patronymicOutput').innerText = 'Отчество';
    document.querySelector('#professionOutput').innerText = 'Профессия'; 
    document.querySelector('#genderOutput').innerText = 'Пол'; 
    document.querySelector('#birthYearOutput').innerText = 'Год'; 
    document.querySelector('#birthMonthOutput').innerText = 'Месяц'; 
    document.querySelector('#birthDayOutput').innerText = 'День'; 
});

  

 


 
console.log(localStorage);

localStorage.setItem('name', 'rajin')
localStorage.setItem('age', '21')
localStorage.clear();
const name = localStorage.getItem('name');
const age = localStorage.getItem("age");
const nameFiled = document.getElementById('name');
nameFiled.innerText = name
const ageField = document.getElementById('age');
ageField.innerText = age
localStorage.removeItem('name');

const formObject = {};
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

// function to get all values form input fields
let fetchInputValue = (e) => {
  formObject[e.target.name] = e.target.value;
}

let submitForm = () => {
  // use input values to get a javascript date object
  let date = new Date(parseInt(formObject.year), parseInt(formObject.month - 1), parseInt(formObject.dob));
  let day = date.getDay();
  let namesList;
  formObject.gender === 'female' ? namesList = femaleNames : namesList = maleNames;
  // console.log('NameSelected', namesList[day]);
  document.getElementById('output').innerText = `Your name Ghanian akan name is: ${namesList[day]}`;
}


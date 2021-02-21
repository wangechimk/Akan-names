
var submission =function(){
  var days of the week=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
  ];
  var male names=[
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
  ]
  var female names=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ]
  var year =parseInt(document.getElementById("year").value);
  var  month=parseInt(document.getElementById("month").value);
  var day=parseInt(document.getElementById("day").value);
  var name=(document.getElementById("name").value);
  var date of birth=new date(year+"/"+month+"/"+day);
  var results=dateofbirth.getday();
  var output =document.getElementById("output");
  var male=document.getElementById("male")
  var female=document.getElementById("female")

  if(month=="" &&year=="" && day=="" && name==""){
      alert(Fill in your credentials);
      return false;
  }
  if (year<0){
    output.style.background="teal"
    output.style.color="white"
    output.innerHTML="Hey!" + name + "Enter a valid month"
  }
  else if ((month<1) || (month>31)) {
    output.style.background="teal"
    output.style.color="white"
    output.innerHTML="Hey!" + name + "Enter a valid month"
  }
else if(day<0|| day>31 ) {
    output.style.background="teal"
    output.style.color="white"
    output.innerHTML="Hey!" + name + "Enter a valid month"
}
 if (male.checked&& year>0 &&month>0 && month <12 && day >0 && day <32) {
    output.style.background="red"
    output.innerHTML="Hey!" +name +"you were born on a" +daysoftheweek[results]+"and your Akan name is" +malenames[results];
 }
 else if(female.checked&& year>0 &&month>0 && month <12 && day >0 && day <32) {
    output.style.background="red"
    output.innerHTML="Hey!" +name +"you were born on a" +daysoftheweek[results]+"and your Akan name is" +femalenames[results];
 }
};
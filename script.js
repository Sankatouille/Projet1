const message=
"Thank you for submitting your request.Your favorite Food Truck will answer you!"

document
.getElementById("Formulaire")
addEventListener("submit",function (event){
  event.preventDefault();
  alert(message);});
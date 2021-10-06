const message=
"Thank you for submitting your order.Your favorite Food Truck will prepare that!"

document
.getElementById("Formulaire")
addEventListener("submit",function (event){
  event.preventDefault();
  alert(message);});
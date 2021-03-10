
//  Funtion to toggle classes

var x = document.getElementsByClassName("cards");
var i;
for (i = 0; i < x.length; i++) {
  let classes = x[i].classList;
  x[i].addEventListener('click', function () {
    let result = classes.toggle("cards-focus");
  })
}
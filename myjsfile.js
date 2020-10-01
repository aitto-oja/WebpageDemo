/* When the user clicks on the button, 
toggle between hiding and showing the additional content */
function addTextFunction(btn, startHere, showMore) {
  var dots = document.getElementById(startHere);
  var moreText = document.getElementById(showMore);
  var btnText = document.getElementById(btn);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<i class='fa fa-chevron-down'></i>";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<i class='fa fa-chevron-up'></i>";
    moreText.style.display = "inline";
  }
}

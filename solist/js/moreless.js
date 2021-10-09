function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "過去のご講演者";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "&#8963;";
    moreText.style.display = "inline";
  }
}

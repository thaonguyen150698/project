document.getElementById('logInButton').addEventListener('click', function(){document.querySelector('.signIn').style.display='flex';});
document.querySelector('.closeSignIn').addEventListener('click',function()
{document.querySelector('.signIn').style.display='none';});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
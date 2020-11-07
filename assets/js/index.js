var nav = document.querySelector('nav')

window.onscroll = function () {

  if (window.pageYOffset > 0) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}

const sayUser = document.querySelector('#username');
var username = prompt("What's your name?");
if (username == "" || username == null) {
  sayUser.innerText = 'Hi, User';
} else {
  sayUser.innerText = 'Hi, ' + username;
}
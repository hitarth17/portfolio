let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');

}

window.onscroll = () => {
menu.classList.remove('bx-x');
navbar.classList.remove('active');

}
const typed = new Typed('.multiple-text', {
    strings: ['froentened developer', 'backened developer','blockchain developrer'],
    typeSpeed: 80,
    backspeed:80,
    loop :true,
  });
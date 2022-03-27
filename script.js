let menu = document.querySelector('#menu-btn');
let home = document.querySelector('.home');
let header = document.querySelector('.header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  home.classList.toggle('active');
};

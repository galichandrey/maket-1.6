let page_body2 = document.querySelector('.container__main');
// let page_body_live = page_body.children();
// let side_menu = document.querySelector('.side_menu');
// let buttonClose = document.querySelector('.button--close');
// let burger = document.querySelector('.button__icon--burger');

document.addEventListener('click', hideSideMenu);

function hideSideMenu(event){
  // console.log(event.target);
// if(event.target.matches(".button__icon--close") || (!event.target.closest(".side_menu") && window.innerWidth < 1366)) {
if(event.target.matches(".button__icon--close") || (!event.target.closest(".side_menu") && window.innerWidth < 1366)) {
  // if(event.target.matches(".button__icon--close")) {
    // hideSideMenu();
    document.querySelector('.side_menu').classList.remove('side_menu--opened');
    document.querySelector('.side_menu').classList.add('side_menu--closed');


    // document.querySelector('.page_body').classList.remove('blureverything');
    page_body2.classList.remove('blurred');
    // page_body_live[0].classList.remove('page_body--blurred');
    // console.log('Closing side_menu!')
  }
}

// function hideSideMenu() {
//   document.querySelector('.side_menu').classList.remove('side_menu--opened');
//   document.querySelector('.side_menu').classList.add('side_menu--closed');
// }

document.addEventListener('click', openSideMenu);

function openSideMenu(event){
  event.preventDefault();
  // console.log(event.target);
  // if(event.target.matches(".button__icon--burger") || !event.target.closest(".side_menu")) {
  if(event.target.matches(".button__icon--burger")) {
    // openSideMenu();
    document.querySelector('.side_menu').classList.remove('side_menu--closed');
    document.querySelector('.side_menu').classList.add('side_menu--opened');

    // document.querySelector(".container__main").classList.add('blureverything');
    page_body2.classList.add('blurred');
    // page_body_live[0].classList.add('page_body--blurred');
    // console.log('Opening side_menu!')
  }
}

// function openSideMenu() {
//   document.querySelector('.side_menu').classList.remove('side_menu--closed');
//   document.querySelector('.side_menu').classList.add('side_menu--opened');
// }




let windowSize = window.innerWidth;
if (windowSize >= 1366) {
// console.log('windows size is ' + ws);
document.querySelector('.side_menu').classList.remove('side_menu--closed');
document.querySelector('.side_menu').classList.add('side_menu--opened');
document.querySelector('.container__main').classList.remove('blurred');
} else {
document.querySelector('.side_menu').classList.remove('side_menu--opened');
document.querySelector('.side_menu').classList.add('side_menu--closed');
}

function WindowSize() {
  let ws = window.innerWidth;
  if (ws >= 1366) {
  // console.log('windows size is ' + ws);
  document.querySelector('.side_menu').classList.remove('side_menu--closed');
  document.querySelector('.side_menu').classList.add('side_menu--opened');
  document.querySelector('.container__main').classList.remove('blurred');
} else {
  document.querySelector('.side_menu').classList.remove('side_menu--opened');
  document.querySelector('.side_menu').classList.add('side_menu--closed');
  document.querySelector('.container__main').classList.remove('blurred');
  }
};

window.addEventListener('resize', WindowSize);

let page_body_call = document.querySelector('.page_body *');
// let modal_call = document.querySelector('.modal_call');
// let modalCallOpen = document.querySelectorAll('.button__icon--call');
// let modalCallClose = document.querySelector('button__icon--modalcall--close');


document.addEventListener('click', hideModalCall);

function hideModalCall(event){
  // console.log(event.target);
  if(event.target.matches(".button__icon--modalcall--close") || !event.target.closest(".modal_call")) {
  // if(event.target.matches(".button__icon--close")) {
    // hideSideMenu();
    document.querySelector('.modal_call').classList.remove('modal_call--opened');
    document.querySelector('.modal_call').classList.add('modal_call--closed');

    // document.querySelector("body > :not(.modal_call)").classList.remove('blureverythingbutnotthiselement');
    // document.querySelector(".page_body *").classList.remove('blureverything');


    // console.log('Closing modal_call!')
  }
  if(!event.target.matches(".button__icon--chat")) {
    page_body_call.classList.remove('blurred');
  }
}

// function hideSideMenu() {
//   modal_call.classList.remove('modal_call--opened');
//   modal_call.classList.add('modal_call--closed');
// }

document.addEventListener('click', showModalCall);

function showModalCall(event){
  event.preventDefault();
  // console.log(event.target);
  if(event.target.matches(".button__icon--call")) {
  // if(event.target.matches(".button__icon--close") || !event.target.closest(".side_menu")) {
    // openSideMenu();

    document.querySelector('.modal_call').classList.remove('modal_call--closed');
    document.querySelector('.modal_call').classList.add('modal_call--opened');


    if (window.innerWidth <= 1365) {
    document.querySelector('.side_menu').classList.add('side_menu--closed');
    document.querySelector('.side_menu').classList.remove('side_menu--opened');
    }
    // document.querySelector("body > :not(.modal_call)").classList.add('blureverythingbutnotthiselement');
    // document.querySelector('.page_body *').classList.add('blureverything');
    page_body_call.classList.add('blurred');

    // console.log('Opening modal_call!');
  }
}

// function openSideMenu() {
//   modal_call.classList.remove('modal_call--closed');
//   modal_call.classList.add('modal_call--opened');
// }



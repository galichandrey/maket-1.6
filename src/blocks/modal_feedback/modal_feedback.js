let page_body_call = document.querySelector('.page_body *');
let page_body_feedback = document.querySelector('.container');
// let modal_feedback = document.querySelector('.modal_feedback');
// let modalFeedbackOpen = document.querySelector('.button__icon--chat');
// let modalFeedbackOpen = document.querySelectorAll('.button__icon--chat');
// let modalFeedbackClose = document.querySelector('.button__icon--modalfeedback--close');
// let page_body_live = document.querySelector('.page_body').children;
// console.log(modalFeedbackOpen[0]);
// console.log(page_body_live);

document.addEventListener('click', hideModalFeedback);

function hideModalFeedback(event) {
  // console.log(event.target);
// if(event.target.matches(".button__icon--modalfeedback--close") || !event.target.closest(".modal_feedback")) {
  if(event.target.matches(".button__icon--modalfeedback--close") || !event.target.closest(".modal_feedback")) {
    // hideModalFeedback();
    document.querySelector('.modal_feedback').classList.remove('modal_feedback--opened');
    document.querySelector('.modal_feedback').classList.add('modal_feedback--closed');

    // document.querySelector("body > :not(.modal_feedback)").classList.remove('blureverythingbutnotthiselement');
    // document.querySelector(".page_body").classList.remove('blurred');
    // document.querySelector(".container *").classList.remove('blurred');
    // page_body_live.classList.remove('blurred');

    document.querySelector('.container__nav *').classList.remove('blurred');
    document.querySelector('.container__inner').classList.remove('blurred');

    // console.log('Closing modal_feedback!');
    // console.log(event.target);
    // document.addEventListener('click', function(event){});
  }
};

// function hideModalFeedback() {
//   document.querySelector('.modal_feedback').classList.remove('modal_feedback--opened');
//   document.querySelector('.modal_feedback').classList.add('modal_feedback--closed');
// }

// function hideModalFeedback() {
//   modal_feedback.classList.remove('modal_feedback--opened');
//   modal_feedback.classList.add('modal_feedback--closed');
// }


document.addEventListener('click', showModalFeedback);
// console.log(modalFeedbackOpen[0]);
// modalFeedbackOpen[1].addEventListener('click', showModalFeedback);

function showModalFeedback(event){
  event.preventDefault();
// if(event.target.matches(".button__icon--chat") || !event.target.closest(".modal_feedback")) {
  if(event.target.matches(".button__icon--chat")) {
    // openModalFeedback();
    document.querySelector('.modal_feedback').classList.remove('modal_feedback--closed');
    document.querySelector('.modal_feedback').classList.add('modal_feedback--opened');

    let windowSize = window.innerWidth;
    if (windowSize <= 1365) {
    document.querySelector('.side_menu').classList.add('side_menu--closed');
    document.querySelector('.side_menu').classList.remove('side_menu--opened');
    }

    // document.querySelector("body > :not(.modal_feedback)").classList.add('blureverythingbutnotthiselement');
    // document.querySelector(".page_body").classList.add('blurred');
    // document.querySelector(".page_body").classList.add('blurred');
    // page_body_live.classList.add('blurred');

    document.querySelector('.container__nav *').classList.add('blurred');
    document.querySelector('.side_menu *').classList.add('blurred');
    document.querySelector('.container__inner').classList.add('blurred');

    page_body_call.classList.add('blurred');

    // console.log(page_body_feedback);

    // console.log('Opening modal_feedback!');
    // console.log(event.target);

    // document.removeEventListener('click', showing);
  }
}

// function openModalFeedback() {
//   modal_feedback.classList.remove('modal_feedback--closed');
//   modal_feedback.classList.add('modal_feedback--opened');
// }

// function openModalFeedback() {
//   document.querySelector('.modal_feedback').classList.remove('modal_feedback--closed');
//   document.querySelector('.modal_feedback').classList.add('modal_feedback--opened');
// }

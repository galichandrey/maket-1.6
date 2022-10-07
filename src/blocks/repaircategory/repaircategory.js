let showAllCategory = document.querySelector('.repaircategory');
// console.log(showAllCategory);
let showAllCategoryText = document.querySelector('.repaircategory .button__text--showall');
let showAllCategoryIcon = document.querySelector('.repaircategory .button__icon--showall');


// show_all__checkbox.onclick = function () {
// show_all_click.classList.toggle('swiper-wrapper--show-all');
// }

showAllCategoryText.addEventListener('click', toggleDescription);

function toggleDescription(event) {
  event.preventDefault();
  // console.log(event.target);
  document.querySelector('.repaircategory__inner').classList.toggle('repaircategory__inner--showall');

    if(showAllCategoryText.innerText == 'Показать все') {
      showAllCategoryText.innerText = 'Скрыть';
      document.querySelector('.repaircategory .button__icon--showall').classList.add('button__icon--rotated--180');
      // --showall--rotated
      } else {
        showAllCategoryText.innerText = 'Показать все';
        showAllCategoryIcon.classList.remove('button__icon--rotated--180');
      }

  // show_all__text.innerText == 'Показать все' ? show_all__text.innerText = 'Скрыть' : show_all__text.innerText = 'Показать все';

}

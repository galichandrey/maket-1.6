let showAllBrands = document.querySelector('.repairbrands');
// console.log(showAllBrands);
let showAllBrandsText = document.querySelector('.repairbrands .button__text--showall');
let showAllBrandsIcon = document.querySelector('.repairbrands .button__icon--showall');


// show_all__checkbox.onclick = function () {
// show_all_click.classList.toggle('swiper-wrapper--show-all');
// }

showAllBrandsText.addEventListener('click', toggleDescription);

function toggleDescription(event) {
  event.preventDefault();
  // console.log(event.target);
  document.querySelector('.repairbrands__inner').classList.toggle('repairbrands__inner--showall');

    if(showAllBrandsText.innerText == 'Показать все') {
      showAllBrandsText.innerText = 'Скрыть';
      document.querySelector('.repairbrands .button__icon--showall').classList.add('button__icon--rotated--180');
      // --showall--rotated
      } else {
        showAllBrandsText.innerText = 'Показать все';
        showAllBrandsIcon.classList.remove('button__icon--rotated--180');
      }

  // show_all__text.innerText == 'Показать все' ? show_all__text.innerText = 'Скрыть' : show_all__text.innerText = 'Показать все';

}

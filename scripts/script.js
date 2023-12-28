const servicesLinks = document.querySelectorAll('.services-links-link');
const servicesLinksList = document.querySelector('.services-links-list');
const servicesItems = document.querySelectorAll('.services-description-item');
const deliveryLink = document.querySelector('.services-delivery-link');
const modal = document.querySelector('.modal');
const CloseButton = document.querySelector('.modal-close-button');



servicesLinksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('services-links-link')) {
    e.preventDefault();
    const servicesLinksArray = Array.from(servicesLinks);
    const index = servicesLinksArray.indexOf(e.target);
    const servicesItemsArray = Array.from(servicesItems);

    document.querySelector('.services-link-active').classList.add('yellow-button')
    document.querySelector('.services-link-active').classList.remove('services-link-active')
    e.target.classList.remove('yellow-button')
    e.target.classList.add('services-link-active')

    document.querySelector('.services-description-active').classList.remove('services-description-active')
    servicesItemsArray[index].classList.add('services-description-active')
  }
})
deliveryLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal-close');
});

CloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal-close')
});

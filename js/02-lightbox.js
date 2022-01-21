import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imagesContainer.addEventListener('click', onImagesContainerClick);

function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `      
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
      `
    }).join('');
}

function onImagesContainerClick(e) {
    const isGalleryItemEl = e.target.classList.contains('gallery__image');
    const imageSrc = e.target.dataset.source;
    e.preventDefault();
    if (!isGalleryItemEl) {
        return;
    }


    console.log(galleryItems);
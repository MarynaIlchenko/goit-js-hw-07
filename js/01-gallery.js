import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);
// console.log(createImageCardsMarkup(galleryItems));
imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imagesContainer.addEventListener('click', onImagesContainerClick);

function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original }) => {
        return `      
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="Image description" />
        </a>
      </div>
      `;
    }).join('');
}

function onImagesContainerClick(e) {
    const isGalleryItemEl = e.target.classList.contains('gallery__item');
 if (!isGalleryItemEl) {
        return;
 }
        console.log(e.target);
}
console.log(galleryItems);

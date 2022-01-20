import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imagesContainer.addEventListener('click', onImagesContainerClick);

function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `      
    <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </div>
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

    const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
    `, {closable: true})
    instance.show();

     document.addEventListener('keydown', event => {
if (event.code === 'Escape') {
    instance.close();
}
});
}
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery")
const markup = galleryItems.map(item => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}" target="_blank" >
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`).join("")
list.innerHTML = markup

list.addEventListener("click", onClick)


function onClick(evt){
  evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return
    }
   console.log(evt.target);
   console.log(evt.target.dataset.source);
   const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt=""></img>`
   )
   instance.show()
}




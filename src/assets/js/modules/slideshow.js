const supportsPopover = () => {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const slideshow = () => {

  const targetContainer = document.querySelector("[data-js-slideshow-json]");
  if(!targetContainer) return;

  const dataUrl = targetContainer.getAttribute("data-js-slideshow-json");
  const folderUrl = targetContainer.getAttribute("data-js-slideshow-folder");


  fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
      const previewImages = data.map((item, index) => {
        return `<li title="${item.metadata.Title}: ${item.metadata.Description}"><button popovertarget="large-image-${index}"><img src="${folderUrl}/${item.src}" alt="${item.metadata.Description}"></button></li>`;
      }).join("");

      targetContainer.innerHTML = previewImages;

      const slideshowImages = data.map((item, index) => {

        const currentId = `large-image-${index}`;
        const next = index === data.length - 1 ? 0 : index + 1;
        const prev = index === 0 ? data.length - 1 : index - 1;

        const nextButton = `<button class="next-btn" popovertarget="large-image-${next}" data-js-close-current-popover="${currentId}"><span class="material-symbols-outlined">arrow_forward</span></button>`;
        const prevButton = `<button class="prev-btn" popovertarget="large-image-${prev}" data-js-close-current-popover="${currentId}"><span class="material-symbols-outlined">arrow_back</span></button>`;

        return `
          <div id="${currentId}" class="image-popover is-full-width" popover>
            <button class="close-btn" popovertarget="large-image-${index}" popovertargetaction="hide">
              <span class="material-symbols-outlined">close</span>
            </button>
            ${nextButton}
            ${prevButton}

            <img class="image-popover-content" src="${folderUrl}/${item.src}" alt="${item.metadata.Description}">
          </div>  
          `;
      }).join("");

      targetContainer.insertAdjacentHTML("afterend", slideshowImages);

      const buttons = document.querySelectorAll("[data-js-close-current-popover]");
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          const currentId = button.getAttribute("data-js-close-current-popover");
          const currentPopover = document.getElementById(currentId);
          
          const popoverSupported = supportsPopover();

          if (popoverSupported) {
            currentPopover.hidePopover();
          } else {
            currentPopover.style.display = "none";
          }

        });
      });
    });


};


export { slideshow };

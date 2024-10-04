exports.render = (eleventy, data, attributes) => {

  const {id} = attributes;
  const {cssClass} = attributes;

  return `
    <div class="text block ${cssClass}" id="${id}">
      ${data.content}
    </div>
  `;
};
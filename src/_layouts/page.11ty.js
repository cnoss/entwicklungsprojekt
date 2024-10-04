const { default: parse } = require('node-html-parser');

const renderBlocks = (data) => {
  const { blocks } = data;
  return blocks.map(block => {
    const {cssClass} = block;
    const {contentId} = block;

    return `
      <div class="block ${cssClass}">
        ${this.markdown(data[contentId])}
      </div>
    `;
  }).join('');
};

exports.render = function (data) {

  const documentHeader = require('./components/head.11ty');
  const pageHeader = require('./components/page-header.11ty');
  const pageFooter = require('./components/page-footer.11ty');
  const utils = require('./components/utils.11ty.js');
  
  const documentHead = documentHeader.getHeader(this, data);
  const pageHead = pageHeader.getPageHeader(this, data);
  const pageFoot = pageFooter.getPageFooter(this, data);
  const subtitle = data.subtitle ? `<h2 class="subtitle">${data.subtitle}</h2>` : '';
  const date = data.date ? `<p class="date">${utils.getDate(data.date)}</p>` : '';

  const blocks = data.blocks ? renderBlocks(data) : '';

  const contentFolder = data.folder;
  const contentFiles = data.collections.all
    .filter(post => post.inputPath.includes(contentFolder))  // Filter by folder
    .sort((a, b) => { // Sort by filename
    const nameA = a.inputPath.split('/').pop().toLowerCase();  // Get the filename and convert to lowercase
    const nameB = b.inputPath.split('/').pop().toLowerCase();  // Same for the second file
    return nameA.localeCompare(nameB);  // Compare filenames
  });
  
  const contentBlocks = contentFiles.map(file => {
    const snippet = file.data.snippet;

    const attributes = {
      type: snippet,
      id: file.data.id,
      cssClass: file.data.cssClass,
    };

    const snippetCode = require(`./snippets/${snippet}.11ty.js`);
    return  snippetCode.render(this, file, attributes );
  } );
  
  return `<!doctype html>
  <html lang="de">
    ${documentHead}
    <body class="${data.bodyClass}">
      ${pageHead}

      <main class="page">
        <header class="content-header">
          <h2>${data.title}${utils.getEditLink(data, data)}</h2>
          ${subtitle}
          ${date}
        </header>
        ${contentBlocks.join('')}
        ${utils.parseContent(this, data)}
      </main>
      ${pageFoot}

    </body>
  </html>`;

};

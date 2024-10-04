const tocTools = require('../components/tocTools.11ty.js');

exports.getPageHeader = (eleventy, data) => {

  return `
    <header class="header">
      <div class="home-button"><a href="/"><i class="icofont-code-alt is-large"></i></a></div>
      <h1 class="title">Entwicklungsprojekt</h1>
      <h2 class="subtitle">bei <a href="https://christiannoss.de">Christian Noss</a></h2> 

      <div id="page-navigation" class="page-navigation">
        ${tocTools.getTocContent(eleventy, data)}
      </div>
    </header>
  `;
};

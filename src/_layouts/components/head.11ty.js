exports.getHeader = (eleventy, data) => {
  const currentDay= new Date().getDate();
  const currentMonth = new Date().getMonth() +1;
  const currentYear = new Date().getFullYear();
  const publishDate = `${currentYear}-${currentMonth}-${currentDay}`;
  const timestamp = Date.now();

  return `
    <head>
      <title>Entwicklungsprojekt // ${data.title}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta property="og:title" content="${data.title}">
      <meta property="article:published_time" content="${publishDate}">
      <meta property="article:timestamp" content="${timestamp}">
      <meta name="author" content="Christian Noss">

      <link rel="icon" type="image/png" sizes="32x32" href="${ '/assets/images/favicons/favicon-32x32.png'}">
      <link rel="icon" type="image/png" sizes="16x16" href="${ '/assets/images/favicons/favicon-16x16.png'}">
      <link rel="manifest" href="${ '/assets/images/favicons/site.webmanifest'}">
      <link rel="mask-icon" href="${ '/assets/images/favicons/safari-pinned-tab.svg'}" color="#5bbad5">

      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">

      <link href="${eleventy.htmlBaseUrl('/compiled-assets/styles/combined-styles.css')}" rel="stylesheet">
      <link href="/compiled-assets/styles/combined-styles.css" rel="stylesheet">
    
      <script>
        const settings = {
          pathPrefix: "${ '/'}",
        };
      </script>

    </head>
  `;
};

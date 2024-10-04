import { finishedWorks, showAdditionalWorks } from './modules/finished-works.js';
import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  finishedWorks();
  slideshow();
});
const test = require('ava');
const macro = require('../testRehypePlugin');

test(
  'it triggers on elements matching selector',
  macro,
  `
  <a hreflang="en" data-transform-hreflang="">Should be transformed</a>
  <a hreflang="en">Won't change</a>
  `,
  `
  <a hreflang="en" data-transform-hreflang="">Should be transformed <span class="hreflang">en</span></a>
  <a hreflang="en">Won't change</a>
  `,
  { selector: '[data-transform-hreflang]' }
);

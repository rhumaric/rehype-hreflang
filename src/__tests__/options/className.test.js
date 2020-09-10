const test = require('ava');
const macro = require('../testRehypePlugin');

test(
  'it sets the configured class',
  macro,
  '<a hreflang="en">Content</a>',
  '<a hreflang="en">Content <span class="custom-class">en</span></a>',
  { className: 'custom-class' }
);

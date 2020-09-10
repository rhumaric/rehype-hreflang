const test = require('ava');
const macro = require('../testRehypePlugin');

test(
  'it ignores elements based on the option',
  macro,
  `
<a hreflang="en" class="no-hreflang">Will change</a>
<a hreflang="en" data-hreflang-ignore="">Won't change</a>
`,
  `
<a hreflang="en" class="no-hreflang">Will change <span class="hreflang">en</span></a>
<a hreflang="en" data-hreflang-ignore="">Won't change</a>
`,
  { ignoreSelector: '[data-hreflang-ignore]' }
);

test(
  'it can be deactivated',
  macro,
  '<a hreflang="en" class="no-hreflang">Will change</a>',
  '<a hreflang="en" class="no-hreflang">Will change <span class="hreflang">en</span></a>',
  { ignoreSelector: null }
);

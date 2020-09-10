const test = require('ava');
const plugin = require('..');
const rehype = require('rehype');

test(
  'it injects a span when the link has hreflang',
  macro,
  '<a hreflang="fr">So French!</a>',
  '<a hreflang="fr">So French! <span class="hreflang">fr</span></a>'
);
test(
  'it leaves links with no hreflang as is',
  macro,
  '<a>Nothing to change here</a>',
  '<a>Nothing to change here</a>'
);
test(
  'it ignores links with the `no-hreflang` class',
  macro,
  '<a class="no-hreflang">Nothing to change here</a>',
  '<a class="no-hreflang">Nothing to change here</a>'
);
test(
  'it ignores empty hreflangs',
  macro,
  '<a hreflang="">Nothing to change here</a>',
  '<a hreflang="">Nothing to change here</a>'
);

async function macro(t, origin, expected = '', options = {}) {
  const result = await rehype()
    .data('settings', { fragment: true })
    .use(plugin, options)
    .process(origin);

  t.is(normalizeSpace(result.contents), normalizeSpace(expected));
}

function normalizeSpace(str) {
  return str
    .replace(/^[\t\s]+/gm, '') // Indentation
    .replace(/\r?\n|\r/gm, ' ') // Line returns
    .replace(/\s+/g, ' '); // Multiple spaces
}

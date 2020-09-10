const plugin = require('..');
const rehype = require('rehype');

module.exports = async function macro(t, origin, expected = '', options = {}) {
  const result = await rehype()
    .data('settings', { fragment: true })
    .use(plugin, options)
    .process(origin);

  t.is(normalizeSpace(result.contents), normalizeSpace(expected));
};

function normalizeSpace(str) {
  return str
    .replace(/^[\t\s]+/gm, '') // Indentation
    .replace(/\r?\n|\r/gm, ' ') // Line returns
    .replace(/\s+/g, ' '); // Multiple spaces
}

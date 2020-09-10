rehype-hreflang
---

A `rehype` plugin for injecting HTML hints about the language of linked pages based on the `hreflang` attribute.

```html
<a hreflang="fr">Pardon my French</a>
<!-- becomes -->
<a hreflang="fr">
  Pardon my French 
  <span class="hreflang">fr</span>
</a>
```

Links with a `no-hreflang` class or an empty `hreflang` will be ignored by default (the class or empty attribute will remain in the HTML, though).

This allows [not to rely on CSS][wcag-failure] [nor to use client-side JavaScript][everyone-javascript] to provide the feature.

Usage
---

After installing the package with `npm install rehype-hreflang`, you can add the plugin to your `rehype` pipeline:

```js
var rehype = require("rehype");
var hreflang = require("rehype-hreflang");

rehype()
  .use(hreflang)
  .process(html, function(error) {
    console.error(error);
  });
```

Options
---

The plugin accepts a few options that can be passed as a second argument of `.use`:

```js
/* … */
  .use(hreflang, options)
/* … */
```

### `selector`

The selector used for picking the links to process

Default: `[hreflang]`

### `ignoreSelector`

The selector used to check if the link should be ignored.

> **Note**: If you update it an want to keep ignoring empty hreflang attributes, make sure to include the `,[hreflang=""]` to your selector

Default: `.no-hreflang,[hreflang=""]`

### `className`

The class that will be set on the injected `<span>`

Default: `hreflang`

License
---

MIT, Copyright [Romaric Pascal](https://romaricpascal.is)

Contribute
---

Tests are run by [`ava`][ava], picking any `*.test.js` file (see `__tests__` folder for organisation).

Code will be linted by [ESLint] and formatted by [Prettier] on commit.

[wcag-failure]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F87
[everyone-javascript]: https://kryogenix.org/code/browser/everyonehasjs.html
[ava]: https://github.com/avajs/ava
[Eslint]: https://eslint.org/
[Prettier]: https://prettier.io/

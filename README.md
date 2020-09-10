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

This allows [not to rely on CSS][wcag-failure] [nor to use client-side JavaScript][everyone-javascript] to provide the feature.

Usage
---

TBD

Options
---

TBD

[wcag-failure]: https://www.w3.org/WAI/WCAG21/Techniques/failures/F87
[everyone-javascript]: https://kryogenix.org/code/browser/everyonehasjs.html

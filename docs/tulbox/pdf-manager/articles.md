---
title: Supported Articles
sidebar_position: 5
---

# Supported Articles by Language

When applying certain templates (such as Cue Sheet renaming), **leading articles** (e.g., *The*, *An*, *Un*) may be programmatically moved to the end of a title for sorting and formatting purposes.

Since TūlBOX includes a custom `lang-detect` API, you may be wondering why it's not used here.
The answer is simple: if API requests exceed a certain threshold, the cost of hosting this service goes up (currently it costs me nothing — and I’d like to keep it that way).

To avoid unnecessary API calls, article handling is based on a fixed list of known articles by language:

```
en: a, an, the
es: el, la, los, las, un, una, unos, unas
fr: le, la, les, un, une, des, l'
```

If you work with other languages and would like support for additional articles, feel free to request them.
If enough people ask, I may even consider paying for something. Maybe.

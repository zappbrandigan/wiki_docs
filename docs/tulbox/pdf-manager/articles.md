---
title: Supported Articles
sidebar_position: 5
---

# Supported Articles by Language

When applying certain templates (such as Cue Sheet renaming), **leading articles** (e.g., *The*, *An*, *Un*) may be programmatically moved to the end of a title for sorting and formatting purposes.

Since TūlBOX includes a custom `lang-detect` API, you may be wondering why it's not used here.
The answer is simple: if API requests exceed a certain threshold, the cost of hosting this service goes up (currently it costs me nothing — and I’d like to keep it that way).

To avoid unnecessary API calls, article handling relies on a predefined list of known articles rather than dynamic language detection.

Additionally, because some words function as articles in one language but not in another (e.g., *as* is an article in Portuguese but not in English), only a limited set of unambiguous articles is supported. This ensures that words like *as* are not mistakenly moved to the end of a title when the filename is actually in English.

**List of Supported Articles:**
```
en: a, an, the
es: el, la, los, las, un, una, unos, unas
fr: le, la, les, un, une, des, l'
```

If you work with other languages and would like support for additional articles, feel free to request them.
If enough people ask, I may even consider paying for something. Maybe.

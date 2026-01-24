---
title: Regex Templates
sidebar_position: 4
---

import RegexExample from '@site/src/components/RegexExample';

# General Regex Templates Guide

The built-in **Regex Templates** in PDF Manager’s **Search & Replace** tool let you apply powerful renaming patterns instantly — no need to memorize syntax.  

You can use templates:
- **Standalone** — apply one rule to quickly reformat files.
- **In sequence** — stack multiple templates for complex restructuring.

---

## 🛠 How to use a template

1. Open **Search & Replace**.
2. Click **Show Templates**.
3. Select a template from the dropdown.
4. The search and replace fields will be pre-filled.
5. Review the preview table for changes.

---

## 📂 Available Templates

<RegexExample
  title="📆 Date Conversion 1 — 6-digit dates"
  pattern="(\d{2})(\d{2})(\d{2})"
  replace="$2$120$3"
  before="Dinosaurs are cool Ep No. 010225"
/>

**When to use:** Dates in `ddmmyy` or `mmddyy` format where you need to swap day/month and expand the year.  

---
<RegexExample
  title="📆 Date Conversion 2 — 8-digit dates"
  pattern="(\d{2})(\d{2})(\d{4})"
  replace="$2$1$3"
  before="Words are weird Ep No. 01142025"
  note="Works only with exactly 8 digits; keeps the full 4-digit year."
/>

**When to use:** Dates in `ddmmyyyy` or `mmddyyyy` format where you need to swap day/month.  

---

<RegexExample
  title='🆔 Add "Ep No."'
  pattern="(\d+)$"
  replace="Ep No. $1"
  before="Oops, I Did It Again 1001"
  note="Matches on the final numeric sequence in the filename; useful for files that already have partial episode numbers in the filename."
/>

---

<RegexExample
  title="🔀 Reorder Tokens"
  pattern="^(.+)\s\-\s(.+)\s\-\s(.+)$"
  replace="$1   $3  Ep No. $2"
  before="THIS SHOW - 101 - Exists Probably"
  note='Inserts three spaces before episode title and two spaces before "Ep No." (to match cue-sheet delimiter rules); useful for files exported from Soundmouse.'
/>

**When to use:** Files follow a `Prod - EpisodeNum - EpisodeTitle` format and need to be rearranged for cue-sheet conventions.  

---

<RegexExample
  title="0️⃣ Zero Pad Episode Suffix"
  pattern="(\d{2}$)"
  replace="0$1"
  before="What is a number 101"
  note='Works only when the last two characters in the filename are numbers; change the pad value or count by changing "0" in the replace bar.'
/>

**When to use:** Episode numbers have only three digits and must be padded to four.  

---

## 🔗 Stacking templates for more power

You can chain templates together to transform filenames in a single pass.  
The **order matters** — earlier rules affect later ones.

Example stack:
1. **Reorder Tokens**
2. **Zero Pad Episode Suffix**
3. [**Cue Sheet T1**](./cue-sheets.md)

```
Before: mary had a little lamb - 101 - and no one talks about it
After:  MARY HAD A LITTLE LAMB   And No One Talks. . .  Ep No. 1001
```

---

## 💡 Common regex symbols (JavaScript)
- `.` — any single character except newlines (unless `s` flag is on); `a.c` matches `abc` or `a-c`.
- `*` — 0 or more of the previous token; `ab*` matches `a`, `ab`, `abbb`.
- `+` — 1 or more of the previous token; `\d+` matches `7` or `123`.
- `?` — 0 or 1 of the previous token (makes it optional); `colou?r` matches `color` or `colour`.
- `{n}` — exactly n repeats; `{n,}` — n or more; `{n,m}` — between n and m; `\d{4}` matches `2025`.
- `^` — start of string/line; `$` — end of string/line; `^Intro` matches only if the line starts with `Intro`.
- `\d` digit, `\w` word character (letters/numbers/underscore), `\s` whitespace; `\w+\s\w+` matches two words.
- `[abc]` any of these characters; `[a-z]` ranges; `[^...]` negated class; `[^0-9]+` matches non-digits.
- `|` alternation (OR) between patterns; `cat|dog` matches `cat` or `dog`.
- `()` capturing group; `(?:)` non-capturing group; `(ep)\s(\d+)` captures `ep` and the number.
- `(?=...)` positive lookahead; `(?!...)` negative lookahead; `\d(?=pm)` matches digits before `pm`.
- `\b` word boundary; `\B` non-boundary; `\bcat\b` matches whole word `cat`.
- Escape special characters with `\` like `\.` or `\+` to match them literally; `v1\.2` matches `v1.2`.

---

If you need a new preset template, reach out via the TūlBOX support links!

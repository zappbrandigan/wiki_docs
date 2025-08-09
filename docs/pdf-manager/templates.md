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

## 💡 Pro tips
- Test on a small batch before running on 100+ files.
- Use **regex groups** like `$1`, `$2`, `$3` to rearrange text without losing parts.
- Regex is **case-sensitive** unless you check the “Ignore Case” option.
- Use the **shortcut keys**!

---

If you need a new preset template, reach out via the TūlBOX support links!


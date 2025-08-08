---
title: Regex Templates
sidebar_position: 4
---

# General Regex Templates Guide

Use these built-in templates in the **Search & Replace** tool to quickly reformat file names. These rules can be used standalone or in sequence with other templates to achieve the desired structure.

## Using the templates

1. Click **Show Templates** in *Search & Replace*.
2. Choose a template from the dropdown list.
3. Review the preview table to verify the changes.

If the result is incorrect, try a different template or manually adjust the rule.

---

## Available Templates

### 📆 Date Conversion 1

**Description:** Swaps the day/month parts of a date with an abbreviated year and appends `20` to the year.  
**Example:** `011425` → `14012025`

* **Search:** `(\d{2})(\d{2})(\d{2})`
* **Replace:** `$2$120$3`

Use when dealing with 6-digit dates (ddmmyy).

---

### 📆 Date Conversion 2

**Description:** Swaps the day/month parts of a date with full year.  
**Example:** `01142025` → `14012025`

* **Search:** `(\d{2})(\d{2})(\d{4})`
* **Replace:** `$2$1$3`

Use when dealing with 8-digit dates (ddmmyyyy).

---

### 🆔 Add "Ep No."

**Description:** Adds the "Ep No." prefix to the last number in the filename.  
**Example:** `011425` → `Ep No. 011425`

* **Search:** `(\d+)$`
* **Replace:** `Ep No. $1`

Helpful when preparing cue-sheet filenames that don’t yet include the label.

---

### 🔀 Reorder Tokens

**Description:** Rearranges common file naming patterns.  
**Example:** `Prod Title - 104 - Ep Title` → `Prod Title   Ep Title  Ep No. 104`

* **Search:** `(.+)\s\-\s(.+)\s\-\s(.+)`
* **Replace:** `$1   $3  Ep No. $2`

Great for aligning with cue-sheet conventions.

---

### 0️⃣ Zero Pad Episode Suffix

**Description:** Pads two-digit episode numbers with a leading `0`.  
**Example:** `Ep No. 113` → `Ep No. 1013`

* **Search:** `(\d{2}$)`
* **Replace:** `0$1`

Only applies to filenames ending with a two-digit number.

---

### ➖ Replace Dashes

**Description:** Replaces all hyphens with underscores.  
**Example:** `Episode-Title` → `Episode_Title`

* **Search:** `-`
* **Replace:** `_`

---

### ␣ Replace Spaces

**Description:** Replaces all spaces with dashes.  
**Example:** `Episode Title` → `Episode-Title`

* **Search:** ` `
* **Replace:** `-`

---

:::tip Want to automate more?

Stack templates together for fast batch cleanup. For example, add **Reorder Tokens**, **Zero Pad Episode Suffix**, then **Cue Sheet T1** to the rules stack (the order matters).
The result would look like this:  
 ```
  original: production title - 101 - episode title
  new: PRODUCTION TITLE   Episode Title  Ep No. 1001
  ```

:::

If you need a new preset, reach out or submit a request!

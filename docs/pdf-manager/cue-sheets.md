---
title: Cue Sheets
sidebar_position: 3
---

# Cue-Sheet Renaming Guide

The **Cue Sheet** templates in PDF Manager help you instantly rename files to match specific industry conventions — without tedious manual edits.

Use this feature to ensure **consistent formatting** across all cue sheets before storing or sending them.  
If your team follows a different convention that’s not listed, you can request it via TūlBOX support.


## 🎯 When to use each template

There are **two built-in templates**:

| Template | Use when filenames… |
|----------|----------------------|
| **Cue Sheet T1** | Include the episode title. |
| **Cue Sheet T2** | Do **not** include the episode title. |


## 📋 Applying a template

### **For filenames *with* episode titles** (T1)
1. Open **Search & Replace**.
2. Click **Show Templates**.
3. Select **Cue Sheet T1**.  
   This automatically adds the specialized rule:  
   ```regex
   .* → CUE_SHEET
   ```

4. Review the preview table for changes.
5. Manually adjust any rows if needed.


### **For filenames *without* episode titles** (T2)

1. Open **Search & Replace**.
2. Click **Show Templates**.
3. Select **Cue Sheet T2**.
   This automatically adds the specialized rule:

   ```regex
   .* → CUE_SHEET_NO_EP
   ```
4. Review the preview table for changes.
5. Manually adjust any rows if needed.

:::info Special TūlBOX Behavior

In TūlBOX, some words in the **Replace** box are *not* treated as plain text — they act as **commands**.

For example:
.* → CUE_SHEET
- `.*` = match **any filename**, no matter what it is.
- `CUE_SHEET` = a **special keyword** that triggers TūlBOX’s **dotify** process.

When triggered, dotify will:
1. Check and fix delimiters.
2. Move leading articles (*A*, *An*, *The*) to the end.
3. Truncate and add `. . .` if too long.
4. Remove extra spaces and stray punctuation.
5. Apply correct capitalization rules.

The result is a perfectly cue-sheet-compliant filename — not literally `CUE_SHEET.pdf`.

The same applies to:
- **`CUE_SHEET_NO_EP`** → dotify without episode-title logic.

:::

## ⚠ Expected delimiter format

These templates rely on **very specific spacing** between sections of the filename.
If delimiters don’t match exactly, the filename will remain unchanged and show a **Status = Error**.

**T1:**  
* Three parts: Production title, episode title, episode number
* Delimiters:  
  * **Three spaces** between production and episode title.
  * **Two spaces** between episode title and episode number.

**T2:**  
* Two parts: Production title, episode number  
* Delimiters:  
  * **Three spaces** between production title and episode number.

## 🔧 Behind-the-scenes adjustments

Both templates (T1 & T2) also apply **automatic formatting tweaks**:

1. **Move leading articles**
   The articles *A*, *An*, *The* are moved to the end of production and/or episode titles.

   Example:

   ```
   THE SHOW   The Episode  Ep No. 1234
   → SHOW, THE   Episode, The  Ep No. 1234
   ```

2. **Truncate long names**
   Keeps the total filename length ≤ 60 characters. Long sections are shortened and suffixed with `. . .`.

   Example:

   ```
   THE VERY VERY VERY VERY LONG SHOW TITLE   The Long Episode Name  Ep No. 1234
   → VERY VERY VERY VERY LONG SHOW T. . .   Lon. . .  Ep No. 1234
   ```

3. **Consistent casing**

   * Production title → ALL CAPS
   * Episode title → Title Case

4. **Whitespace cleanup**

   * Extra spaces are removed.
   * Trailing `, . ' ! ␣` characters are stripped if followed by `. . .`.

5. **File extension normalization**
   The `.pdf` extension is always lowercase on download.


## 📌 Status indicator reminder

The *Status* badge in the table reflects *overall file validation*, not just cue-sheet rule checks.
For example, even if a cue-sheet rename succeeds, a file might still be flagged for length or duplication issues.

## 💡 Tips for best results

* **Errors are your friend** — incorrect delimiter spacing is easy to miss when scanning filenames - now you can catch them easily.
* **Run on a clean batch** — avoid mixing files with and without episode titles in the same rename run.
* **Preview first** — confirm formatting in the table before downloading.
* **Use manual edits** for edge cases that don’t fit the template exactly.
* **Watch for duplicates** - duplicates will not be downloaded since this would cause file loss; fix the duplicates first.

---
title: New Renaming Templates
authors: zappbrandigan
---

# New Regex Templates Available in TūlBOX!

I’ve added a fresh set of **regex templates** to the *Search & Replace* tool — making it even easier to format your file names consistently, cleanly, and fast.

These new templates are designed to pair seamlessly with the existing **Cue Sheet** presets. Whether you’re converting date formats, reordering titles, or applying final polish to naming conventions, these tools can now handle it in a click.

<!-- truncate -->

## What’s New

Here are the new built-in templates:

* **Cue Sheet T1**  
  The original `CUE_SHEET_TEMPLATE` has been renamed.

* **Cue Sheet T2**  
  Same as the original, but designed for file names that do not have an episode title.

* **Date Conversion 1**  
  `011425` → `14012025` (6-digit → U.S. format)

* **Date Conversion 2**  
  `01142025` → `14012025` (8-digit → U.S. format)

* **Add “Ep No.”**  
  `011425` → `Ep No. 011425`

* **Reorder Tokens**  
  ```
  Prod Title - 104 - Ep Title → Prod Title   Ep Title  Ep No. 104
  ```

* **Zero Pad Episode Suffix**  
  `Ep No. 113` → `Ep No. 1013`

## Tips for Use

* Combine multiple templates in a row to streamline complex renaming tasks.
* Use the general templates *before* applying cue sheet rules for best results.

## Read the Docs

You’ll find a new guide in the docs titled **Regex Templates**, which walks through each of these rules with examples and usage notes.

[→ View the Regex Templates Guide](/pdf-manager/templates)
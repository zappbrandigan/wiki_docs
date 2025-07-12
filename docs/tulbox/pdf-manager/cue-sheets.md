---
title: Cue Sheets
sidebar_position: 3
---

# Cue‑Sheet Renaming Guide

Use the built‑in *Cue Sheet* template to conform file names do a specific convention. If the convetion you use is not present, request it!

## Using the template

1. Click **Show Templates** in *Search & Replace*.
2. Choose **Cue Sheet** (adds the rule `.* → CUE_SHEET_TEMPLATE`).
3. Review the preview table and adjust as needed.

The template assumes:

* The filename contains **three spaces** between Production and Episode and **two spaces** between Episode and *Ep No.*
* An **episode‑number indicator** (`Ep No. ####`) is present.

If these delimiters are missing the rule still runs but will leave the filename unchanged and the status column will show `Error`.

:::note Missing episode title 

If the episode title is absent, the status will show **Error** and the file will be skipped. 

:::

### Behind‑the‑scenes tweaks

* Leading articles (*A*, *An*, *The*) are moved to the end of Production / Episode.

  ```
  THE SHOW   The Episode  Ep No. 1234
  → SHOW, THE   Episode, The  Ep No. 1234
  ```
* Names are truncated and suffixed with `. . .` to keep the full filename ≤ 60 characters.

  ```
  LONG SHOW TITLE   Long Episode Name  Ep No. 1234
  → LONG SHOW TITLE. . .   Long Episode. . .  Ep No. 1234
  ```
* Upper‑case production title, Title‑case episode title.
* Extra whitespace removed.
* Trailing `, . ' ! ␣` stripped when followed by `…`.
* Extension `.pdf` is always lowercase on download.

:::note Status column is global 

The **Status** badge reflects overall validation, not just the cue‑sheet rule. 

:::
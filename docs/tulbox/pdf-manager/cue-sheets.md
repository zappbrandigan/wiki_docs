---
title: Cue Sheets
sidebar_position: 3
---

## Guide For Cue Sheet Renaming

To rename cue sheets quickly, use the template rule (`.* -> CUE_SHEET_TEMPLATE`) under the `Show Templates` button. This rule assumes the 3-2 space delimiters are present. It will attempt to process your files if these are missing, but generally, nothing will happen. The template also expects the episode number indicator to be present.

:::warning

If the episode title is missing, this template will display `Error` in the status column.

:::

### Main Features

Articles at the beginning of the production and/or episode names are automatically moved to the end. For example:

```
THE SHOW   The Episode  Ep No. 1234 -> SHOW, THE   Episode, The  Ep No. 1234
```
Additionally, the episode name and/or production name will be shortened as necessary, with `. . .` appended.

```
LONG SHOW TITLE   Long Episode. . .  Ep No. 1234
```

Here are a few additional features that happen in the background:
- The filename will be 60 characters or fewer.
- The production title will be converted to uppercase.
- The episode title will be converted to title case.
- Extra whitespace will be removed.
- The filename extension will be lowercase when the files are downloaded.
- The characters `,.'!` will be removed if they are the last character before `. . .`

:::note

There are a few things to keep in mind when using the cue sheet quick template rule. An important concept is that the status column is not specific to the cue sheet quick template.

:::




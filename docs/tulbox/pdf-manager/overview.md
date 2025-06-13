---
title: PDF Manager Overview
slug: overview
sidebar_position: 1
---

The PDF Manager helps you rename your PDF files quickly and easily.

**How to use:**
1. **Upload Files:** Drag and drop your PDF files into the upload area, or click to select files from your computer. Only PDF files are accepted at this time. If you would like to add support for additional file types, let me know.
    - Maximum file count for upload is set to 100 PDFs; this is not a system limitation, just a practical decision as changes tend to have unintentionaly effects when dealing in large volume. If you need this limit to be increased, reach out GitHub.
2. **View & Edit:** See your files in a table. You can edit file names directly by clicking the edit icon next to each name.
3. **Batch Rename:** Use the "Search & Replace" section to create rules for renaming files in bulk. You can use regular expressions for advanced patterns. Click "Apply Rules" to update all file names at once.
    - Rules can be chained together and applied sequentially.
4. **Check Status:** The table highlights duplicates and invalid names. Only files marked as `Valid`, `Modified`, or `Dotified` can be downloaded.

:::warning

This tool no longer enforces cue sheet file name conventions. This is to allow others to use the tool for more general purposes.
The cue sheet file naming convention can still be accesed by using one of the quick templates.

:::

5. **Download:** Click "Download All" to save all valid, renamed files to your computer.
6. **Clear All:** Remove all files from the manager with one click.

:::tip

- Use quick templates in the Search & Replace section for common renaming tasks.
- Hover over icons for tooltips and more info.

:::
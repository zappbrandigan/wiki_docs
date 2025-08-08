---
title: CWR Converter (beta)
authors: zappbrandigan
---

## New tool update: **CWR Converter**!

The beta is live on TūlBOX.
This post dives into the latest **performance** and **usability** upgrades.

<!-- truncate -->
---

## Performance & Scale

| New Tech | What it solves |
| -------- | -------------- |
| **Virtualized Raw Viewer & Report Tables** | Rows render only when visible, so even 100 k-line CWRs stay buttery smooth. |
| **Web Workers** | Parsing now runs off the main thread, keeping the UI responsive—even with 100 MB+ files. |

*Result: can now handle large transmissions, but capped at `~100 Mb` to accomodate lower-end systems capabilites.*

---

## Smarter, Highlighted Search

Find that elusive record in seconds:

* **Unified search bar** works across the virtualized viewer.  
* **Live highlighting** pins every match in-view as you type.  
* **Next / Previous** arrows (or shortcuts below) cycle through matches and auto-scroll.

---

## Pseudo Full-Screen Raw Viewer

Need extra space? Hit **`⌘/Ctrl + e`** or click the new “expand” icon to pop the Raw Viewer into a focused, edge-to-edge mode. Perfect for side-by-side edits.

---

## Field Tooltips → Now Toggleable

Mouse-over labels still reveal field names & definitions, but if you already know your **SPU** from your **SWR**, press **`⌘/Ctrl + k`** to hide them and reclaim that bit of horizontal room.

---

## Shortcut Recap

| Action | macOS / Windows |
| ------ | --------------- |
| Toggle Search | `⌘/Ctrl + f` |
| Expand / Collapse Raw Viewer | `⌘/Ctrl + e` |
| Toggle Tooltips | `⌘/Ctrl + k` |
| Next / Prev Match | `⌘/Ctrl + ↓` • `⌘/Ctrl + ↑` |

(You’ll find them in the in-app **?** menu too.)

---

## Miscellaneous Fixes

* Batch report now includes **dynamic** writer contribution calculations.
* AKA report now lists **unique** titles only.  
* NAT record support added via updated **cwr-parser**.  
* Copy-paste from AKA titles preserves correct column order.  
* PDF export no longer fails when template contains empty header cells.  
* Minor visual polish & accessibility improvements.

---

## Try it & tell me what breaks

The beta is live at **TūlBOX → CWR Converter**. As always, this release is best served with fresh feedback:

*Found a glitch?* Copy the **Bug Entry Template** from the docs and add it to the tracker—or hit the footer’s “Report a Bug” link.

Happy converting! 

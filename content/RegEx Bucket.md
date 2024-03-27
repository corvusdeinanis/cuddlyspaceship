---
title: RegEx Bucket
date: 2023-09-18
tags:
  - regex
  - computer
  - tutorials
---
## [Notepad++ add to every line](https://stackoverflow.com/questions/11003761/notepad-add-to-every-line)

1. Press Ctrl+H to bring up the Find/Replace Dialog.
2. Choose the `Regular expression` option near the bottom of the dialog.

To add a word, such as `test`, at the **beginning** of each line:

> 1. Type `^` in the `Find what` textbox
> 2. Type `test` in the `Replace with` textbox
> 3. Place cursor in the first line of the file to ensure all lines are affected
> 4. Click `Replace All` button

To add a word, such as `test`, at the **end** of each line:

> 1. Type `$` in the `Find what` textbox
> 2. Type `test` in the `Replace with` textbox
> 3. Place cursor in the first line of the file to ensure all lines are affected
> 4. Click `Replace All` button

## Remove all links from a Markdown file
```
/\[(.*?)\]\(.*?\)/g
```
substitute with `$1`

## Remove all superscript numbers
```
/\p{No}/gu/
```


2024-03-27
## Match text between square brackets
```
/\[[^\]]*\]/g
```

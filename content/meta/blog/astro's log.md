---
title: "astro's log — Paper.wf"
created: 2024-02-07T03:09:44 (UTC +05:30)
tags: ['personal','blog','archive']
source: "https://paper.wf/astrob/"
author: "astro"
---
# astro's log — Paper.wf

> [!important] Note
> This is a backup of my [paper.wf](https://paper.wf) (a free instance of [writefreely](https://writefreely.org/instances)).
> You can find my paper.wf at https://paper.wf/astrob/

## 
## [toshi-pono's Poketch on my M5Core2!](https://paper.wf/astrob/toshi-ponos-poketch-on-my-m5core2)

February 7, 2024

Compiled toshi-pono's [poketch](https://github.com/toshi-pono/poketch)  
and successfully was able to push it to my M5Core2! It's beautiful. I love it so much.

It has a digital clock, a pedometer, a coin toss, and a drawing slate thingy. JUST LIKE THE GAMES.

Opened the .ino and hit compile on Arduino IDE. That's it!

I'm not sure why but the last time I tried it, it didn't work. I think I made some changes which fixed it. I replaced some libraries I think? Not sure if that's what helped because I was just messing around.

I just added

```
static LGFX lcd;
static LGFX_Sprite sprite(&amp;lcd);
```

to the `main.h`. I don't even know if that's what made it work, or if I was just doing something wrong the first couple of times.

My money is on the latter. I'm too lazy to find out right now.

-   astro

## [January 31st 2024 – Zen Writing Website](https://paper.wf/astrob/january-31st-2024-zen-writing-website)

February 7, 2024

I cobbled together a website for writing without distractions. I know plenty such sites exist already, but still wanted to do it. The textbox does not accept backspace! No deleting, no editing!

### Why?

One of the reasons why I struggle to finish writing is because I'm constantly editing what I write. I know that editing is detrimental to writing. Get some stuff out there first. Get a block of marble first, and then you can chisel away. From my site, `This tiny web thingamajig is clean, no clutter, and lets you type without backspacing. Write first, edit later! Made a typo? That's okay, just keep moving forward. You can always fix it later. Write in a flow. Get the text out of your system and refine it later.`

### Uses

Can be used for journaling. I think this is a solid use case. Use it as a means of cathartic venting, void-shouting Can be used to write without editing. Like I said earlier, irrespective of the kind of writing, content is a prerequisite. You can edit your first paragraph a billion times and get a decent one, but now you're burnt out and there's pages to write.

### Features

A word counter (that is slightly inaccurate but good enough) The ability to save what you've written as a text file Clean, clutter-free. Distraction free writing

### Design

It is a minimal website that uses [water.css](https://watercss.kognise.dev/), an open-source super-simple CSS framework! This makes the site look super clean and professional with zero effort from me.

### Code

It's open source, of course! I should host it somewhere but until then, you can take a look / download the code from [this Codepen link](https://codepen.io/theorigins/details/rNRJZJG)

-   astro

## [January 21, 2024](https://paper.wf/astrob/decided-to-read-frederick-coplestons-history-of-philosophy)

Decided to read Frederick Copleston's History of Philosophy. It is harder than usual to obtain an ebook version of this text. There is a scanned version on the Internet Archive, but it has couple of volumes missing.

I managed to find a scan of the first volume but as expected, it consists of images. The image format is jbig2 which is common for scanners. Tried to use OCR and extract text from the PDF using [Tesseract](https://github.com/tesseract-ocr/tesseract). Tesseract doesn't support jbig2 format, so installed [ocrmypdf](https://github.com/ocrmypdf/OCRmyPDF). Thanks to Chocolatey, this was super simple.

After about 15ish minutes (my sense of time is wack so it could have been much more, or less), I had a PDF that I could highlight and index! I also got a text file with the extracted text. That's a win!

-   astro

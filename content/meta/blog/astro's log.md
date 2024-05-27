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

## 28th May, 2024 - Extracting Kindle Highlights - Adventures in RegEx Pt 3

Kindle's "My Clippings.txt" absolutely sucks. It is a mess and a horrible one at that. There aren't many websites/services that parse the clippings.txt file and spit out highlights into separate files. If they do, they don't work the best or it's all under a paywall/registration. Some of them don't even work, and some of the websites are down. I've been able to find some that do the job perfectly - 

(!Task - insert links)

The format for Kindle Highlights - 
```
==========
$Book_Name ($AuthorFullName)
- Your Highlight on page $pageno | location $location_start - $location_end | Added on $FullDay, $D $MonthName $Year $timestamp24hhmmss

$Highlighted_Text
==========
```

For example, 
```
==========
The Stranger (Albert Camus)
- Your Highlight on page 83 | location 1262-1262 | Added on Friday, 3 July 2020 10:41:14

My fate was being decided without anyone so much as asking my opinion.
==========
```

Been trying hard to figure out how to use regex to split the file into highlights, and then club together highlights from the same book, and output multiple text files, each named after the book, containing the highlights. 
## 21st May, 2024 - WhatsApp Chat Analysis

1. Wrote some python code (v hacky) to take an exported WhatsApp group chat (.txt) to search and split the text based on the sender of the message. Used [[regex]]. 

2. Used regex yet again to remove the timestamps. But before doing so, calculated the number of matches to find out the total number of messages. 

3. Calculated total words for each sender

4. Used some python libraries to further process data.
 - collections  (defaultdict, Counter)
 - wordcloud  (WordCloud)
 - textblob  (TextBlob)
 - nltk
 - nltk.corpus  (stopwords)
 - re
 - emoji

5. Found out - 
 - Most common words per person
 - Most common words for the entire group
 - Most common emojis per person
 - Most common emojis for the entire group
 - Sentiment / Polarity with simple sentiment analysis using textblob

6. Saved all of these to text files

## March 26, 2024 - May 24th, 2024 - RegEx Text Tool
Started as a way to perform simple text functions - make all letters uppercase, make all letters lowercase, and search and replace. I then realized that I could also let users use regex in the search and replace. 

Went through multiple iterations with the current version (1.0) being the first fully usable one imo. Finished it on May 24th, 2024. This is something I worked on during exams, in tiny breaks. 

This version can do the following: 
- find matches (words/phrases), highlight the matches, and indicate total matches
- find matches (regex), highlight matches, count them
- can replace / substitute using regex
- accepts not only a regular expression but also flags

(uses ECMAscript flavour of RegEx)
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

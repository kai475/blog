- [Critical Renddering Path](#critical-renddering-path)
  - [Overview](#overview)
  - [HTML Parsing](#html-parsing)
  - [Document Object Model, DOM](#document-object-model-dom)
    - [ShadowDOM](#shadowdom)
    - [VirtualDOM](#virtualdom)
  - [Cascading Style Sheets Object Model](#cascading-style-sheets-object-model)
  - [Render Tree](#render-tree)
  - [Layout](#layout)
  - [Paint](#paint)
  - [Optimization](#optimization)

# Critical Renddering Path

## Overview

*Optimizing the Critical Rendering Path refers to prioritizing the display of content that relates to the current user action*

The definition of CRP: The sequence of steps the browser goes through to convert HTML, CSS, JavaScript into pixels rendering on the screen

Path:
1. HTML Parsing (lexical & grammer analysis)
2. -> DOM Tree & CSSOM Tree (inline styles or links)
3. -> Render Tree (build from DOM Tree & CSSOM Tree)
4. -> Layout
5. -> Paint

**The HTML may request JavaScript, which may alter the DOM, so the sequence of JavaScript execution is depending on the code(the link refs or the inline code itself) position**

## HTML Parsing

HTML Parsers:
1. Lexers(tokenizers)
2. Parser(grammer analysis, based on token)

Generally, HTML parsing will generate DOM and CSSOM trees, which combined into HTML parse tree

HTML is not a context free grammer, which cannot be parsed using the regular top down or bottom up parsers. Because:
1. The forgiving nature of the language(leave a tag unclosed, or left out a required attribute, or unmatched quotes, etc., while compiles correctly)
2. Browsers have traditional error tolerance to support well known cases of invalid HTML(invalid sentences can also be compiled and display on the browser, for compatibility purpose)
3. **The parsing process is reentrant**(JavaScript can manipulate DOM, which modifies the input of the parsing programme)

## Document Object Model, DOM

DOM construction is incremental, a single DOM node starts with a startTag token, ends with an endTag token, if a set of startTag/endTag tokens is included in another set of tokens, then it became a node inside of a node, which will become the hierarchy of the DOM tree

*The more of nodes, then the longer the DOM construct process will take, naturally the later following events occur*

---------

Introducing the concept of ShadowDOM and VirtualDOM

### ShadowDOM

Born for web component encapsulation, allowing components having their own ShadowDOM, which can't direct access by Document, the markup structure, style, behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean

A ShadowDOM is inside a ShadowRoot, **ShadowDOM is also a structure of DOM tree**

### VirtualDOM

To avoid direct DOM manipulation, optimize the rendering performance, a programming concept called VirtualDOM is introduced

VirtualDOM data structure is stored inside RAM in common, through framework and algorithm syncing with realtime web page data. The core of vdom algorithm is to process a set of DOM operation into a single process, so the browser will only re-render once, to improve rendering performance

## Cascading Style Sheets Object Model

CSSOM includes all of current page styles, the contruct of CSS is a static process, meaning what you code is what you get, and the grammar is context free

Since every CSS rules can be overwrited, CSS is designed to be render-blocking, once the request started, only when all the CSS resources files had been loaded and processed, generated a CSSOM tree, then the browser can start page rendering

**Be cautious to use events triggering CSS request, cause it can be catastrophic for rendering process**

## Render Tree

The DOM tree and CSSOM tree build up the render tree, starting with DOM tree root node, then compare with CSSOM tree, add related CSS rules. Render tree will only include user-visible content, `<Head>` of HTML is generaly not contains visible content, so it does not included in the render tree, and those elements and its descendants with a `display: none;` style set on will not included as well

## Layout

Once the render tree is built, layout becomes possible. Layout is dependent on the size of screen. The layout step determines where and how the elements are positioned on the page, determing the width/height of each element, and where they are in relation to each other

Several tips should be remembered:
1. Block level elements are in default 100% width of its parent element
2. The default width of `<body>` is 100%, meaning it's 100% of the browser viewport ---> device width will affect layout
3. Viewport can be define by `<meta name="viewport" content="width=device-wdith">`
4. The performance of layout is impacted by the DOM -- the greater the number of nodes, the longer layout takes
5. Layout can become a bottleneck, leading to jank if required scrolling or other animations
6. Everytime the render tree got a structural shifting, such as adding/deleting a node, altering a node's width/height which updated box model styles, or changing node's content, layout occurs (which is also called re-flow)

By comparison, layout is rather time consuming, and it also occurs at the late stage of browser rendering, so it can be optimized in a lot of ways, using vdom for example.

## Paint

At the last step of Critical Rendering Path, browser paints each of pixels into screen, page onloaded means the paint job for entire screen is done (for now), after onload, only the minimun area which required will be repaint

Paint time depends on what kind of updated are being applied to the render tree, the process of painting is extreamly fast, you can put a lot of efforts in optimization, but normally you can only get 1 or 2 ms of improvements...

**Measure first, then determine whether it should be an optimization priority**

## Optimization

1. Minimizing the number of critical resources by deferring their download, marking them as async, or eliminating them altogether
2. Optimizing the number of requests required along with the file size of each request
3. Optimizing the order in which critical resources are loaded by prioritizing the downloading critical assets, shorten the critical path length


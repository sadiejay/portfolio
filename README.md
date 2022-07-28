# Portfolio Source Code

One page responsive portfolio site. Build with HTML, CSS, SCSS, JS

<br>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Building a local version](#building-a-local-version)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<br>

---

<br>
<br>

## Overview

<br>

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Get an idea of Sadie Jay's skills and background
- Set dark / light theme preference or have device settings detect theme preference.
- Interact with animated elements and states or have device settings disable them.

<br>
<br>

### Screenshot
#### Dark Mode
![Dark Mode Screenshot](https://user-images.githubusercontent.com/19538219/149443852-627a7629-1632-4d78-90e7-630c0f6659c4.png)
<br>
<br>

#### Light Mode
![Light Mode](https://user-images.githubusercontent.com/19538219/149443869-0e2dc95c-479d-47f7-a248-e5a91636119c.png)

<br>
<br>

### Links

- Source Code URL: [Github: sadiejay/profolio](https://github.com/sadiejay/portfolio)
- Live Site URL: [www.sadiejay.codes](https://www.sadiejay.codes/)

<br>
<br>

### Building a local version
To build the project locally:
```sh
npm install
npm start
```

To run the dev environment:
```sh
npm run dev
```

---

<br>
<br>

## My process

- Started with a skeleton of the HTML.
- I was nervous about deviating from the provided CSS reset. So the mobile code is in the main and the partials are pieces of the provided CSS broken up. They're in order hence some imports being added at the bottom of the main scss file.
  - if I were starting from scratch with the CSS I wouldn't import at the bottom.
- I'm getting the base layout down first for all the elements. Then getting into smaller details. Or at least that's what I'm telling myself to do.
- Whew! I got a rough idea on how to create a light/dark theme with sass + js! Resources linked.
- Started with the skills section because I felt that would be the easiest to get knocked out.
  - struggled with flex basis and grid for a min before settling on basis for aligning my icons
- Got my projects skeleton a lil more fleshed out.
- I've nested my flexbox so deep, I'm getting confused on what is doing what lol but I'll keep going and refine later.
- I'm noticing in firefox dev tools that there's a overflow and I'm not sure why? I don't see a horizontal scoll bar anywhere. I'm wondering if the overflow is the y (which is what I want because the content doesn't fit neatly on the screen?) When I search overflow body tag, normally overflow-y situations are being discussed. I'm thinking to put `overflow-x:hidden` on the body and call it a day.
- Got confused on why the a tag wasn't taking margins before finding a resource on why. Margins also weren't visualizing when I inspected in dev tools but once I added an outline, they then started showing?
- With projects roughly set up, on to the header. I think the form would be easier to set up, but I want to just get the top out the way.
- I'm leaning on figuring out how to have a  mobile nav that's centered to the bottom of the screen. I'm fighting my urge to struggle through it now as opposed to getting a more "traditional" top right mobile nav set before venturing into new waters.
  - I'm going to do the traditional hamburger menu for my MVP. Then add the bottom hamburger menu.
  - Whew. The hamburger menu was a doozy. I honestly still don't quite understand the js, but I could change the classes to make my classes work.
  - Glad to have an accessible menu thanks to this [accessibility matters mobile nav resource](https://www.a11ymatters.com/pattern/mobile-nav/).
  - At first, I wanted to include the theme toggle inside the menu, but now, I'm liking the toggle outside of the menu. I'm going to make sure that the buttons on mobile have enough tappable space.
- Thanks to [Josh Comeau](https://www.joshwcomeau.com/) for help with fleshing out my about. I used his reference [Building an Effective Dev Portfolio](https://www.joshwcomeau.com/effective-portfolio/)
  - His CSS for JS has been a great resource so far as well!
 - Went down many rabbit holes to find dark theme togglers. My mvp toggle could use some tweaking. I will definitely be revisiting and adding the resouces below.
- SO close now adding final touches
  - found a button resource that'll help tie together the border effect I have currently going on on my `.container`
- the contact is finally done, remembered that inputs are inline and textarea boxes are a thing. breaks are good!
- Animations really do liven up the site a bit. I figured out how to make that static arrow a boucing scroll down. I'm also liking the look of the `margin-top: 20vh` on the h2. Give each section a space to breathe and when the site links are clicked there's space on the top of the screen.
  - Also, when did `scroll-behavior: smooth;` become a thing??

**UPDATE: 26 Jul 2022**
- Paired with [Jörn](Narigo) Ran the scripts in the package.json file that were there from the HTML5 template. I didn't even remember they exsisted hahah
- Added the package-lock.json updates to the project from the `npm install`
- Added an action that will build the project from any branch and deploy tot gh-pages thus allowing to have changes hosted without having to manually push to gh-pages
- Create a CNAME file in the `dist` to redirect the from `sadiejay.github.io` to my new custom domain using
`echo "www.sadiejay.codes" > dist/CNAME`

<br>
<br>

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS
- Github actions


<br>
<br>

### What I learned

I mentioned in my [Halloween Word Guess](https://github.com/sadiejay/halloween-word-guess#continued-development) project's README that I wanted to honor reduced motion settings, and I think I've got it right with this one, so I'm pretty happy about that.

```css
.h2 {
  margin-top: 20vh;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
      body {
        transition: none;
      }
    }
```

**UPDATE: 26 JUL 2022**
- I learned a ton!! Made a github action that'll run scripts and update the site, without having to rely on jekyll!!
- Learned that the [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate) is super useful! haha
- Learned `dig insert-url-here` will show when the url will get refreshed again in the amount of secions. so right now I see in the `ANSWER SECTION`:
```sh
www.sadiejay.codes. 3600 in CNAME sadiejay.github.io.
sadiejay.codes. 3600 in A some-IP-address
sadiejay.codes. 3600 in A some-IP-address
sadiejay.codes. 3600 in A some-IP-address
sadiejay.codes. 3600 in A some-IP-address
```

before it would read
```sh
www.sadiejay.codes. 1260 in CNAME sadiejay.codes.
sadiejay.codes. 389 in A some-IP-address
```

<br>
<br>

### Continued development

- I'm going to change out the simple screenshots with the fancy mask of a laptop haha but this will get me going.
- I want to use a mix of mixins and `themeing ()` to make more granular light/dark theme changes, but conceptualizing the (possible) connection of the scss and js is beyond this version.
- The h1 is going to incorporate some sort of animation as well, just like from my main inspiration site listed below!


<br>
<br>

### Useful resources

- [Afua Deborah Portfolio Site](https://afuadeborahcodes.com/) - This was my design inspo with a layout/color change.

- [Gift Egwuenu Portfolio Site](https://www.giftegwuenu.dev/) - My inspo for the `body` outline gradient.

- [Sharon Yi Portfolio Site](https://sharon-yi.com/) - My inspo for animations and vibe.

- [Elizabeth Gunn Portfolio Site](https://elizabethgunn.co/) - My inspo for layout.

- [Sass Tutorial for Beginners - CSS With Superpowers](https://www.youtube.com/watch?v=_a5j7KoflTs&list=TLPQMTQxMTIwMjEXOnVTSDC-Iw&index=17) - Helped me brush up on my SASS! **Note: the setting you have to copy and paste in yourself** I looked all over in the .json for like 20-30 for the "extra settings."

- [Sass Crash Course by Traversy Media](https://youtu.be/nu5mdN2JIwM) - Another sass brush up and inspo for light/dark theme snippet and using `lighten()`

- ['Light and Dark Theme using Mixin' by Dinesh Kumar R ](https://medium.com/ampersand-academy/light-and-dark-theme-using-mixin-98eb025032c9) - Made the light and dark theme more tangible

- [Different implementation of Flexbox in Firefox and Chrome](https://stackoverflow.com/questions/54973109/different-implementation-of-flexbox-in-firefox-and-chrome) - Ran into this issue and was so confused.

- [Button vs Link](https://a11y-101.com/design/button-vs-link) - I was confused about the semantics on buttons and a tags. I removed the buttons that wrapped the project links after reading the article.

- [Fixed Bottom Edge Mobile Menu Animation](https://codemyui.com/fixed-bottom-edge-mobile-menu-animation/) - I would like to do something like this in v2

- [Theme Toggler with Javascript Codepin by Mehdi Aoussiad](https://codepen.io/MehdiAoussiad/pen/WNwWKBJ) - I removed the florin pop checkbox toggler for a simpler icon swap modeled after this codepen.

- [https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995) - I took this article and it's resource in heavy consideration but it's outside the scope of this mvp!

- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#using-javascript-local-storage) - I couldn't figure out how to get the js to work with this project, but the "design considerations" section was extremely helpful.

- [Light/dark mode: system mode + user preferences](https://dev.to/ayc0/light-dark-mode-system-mode-user-preferences-1fcd) - This dark / light theme switch is the same I used for my hackathon project. Considered ol' trusty for me now.

- [CSSScan](https://getcssscan.com/css-buttons-examples) - Button styling inspo, button design 59 is what I mimiced.

- [Growing Inputs and Textareas](https://css-tricks.com/auto-growing-inputs-textareas/) - I didn't use the effect but it helped me conceptualize what I needed to do for my input/textarea boxes.

- [CSS Buttonn Styling Guide](https://moderncss.dev/css-button-styling-guide/) - Used this as a guide for styling buttons and links.

- [Gradient Borders in CSS](https://css-tricks.com/gradient-borders-in-css/) - Def out of scope for this version, but! I think I'm going to play around with some border gradients in the more fully fleshed out version.

- [How to Auto-Update Copyright Year with JavaScript (No document.write())](https://radu.link/auto-update-copyright-year-javascript/) - Reference for auto-updating copyright year.

- [How to View Your Live Localhost From Your Laptop on Your Mobile Device](https://dev.to/brendamichellle/how-to-view-your-localhost-from-your-laptop-on-your-mobile-device-516c) - This has been super helpful for when I wanna check out my website on my phone or iPad!

- [How To- Smooth Scroll](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2) - Was expecting to need a script but there's a css rule for this! Wow!

- [Scroll Down Arrow With Bounce Animation](https://codemyui.com/scroll-arrow-bounce-animation/) - This was the base for my scroll down arrow animation.

- [How to create the right meta description](https://yoast.com/meta-descriptions/#characteristics) - I read this and took the advice seriously.

- [Open Graph Meta Tags: Everything You Need to Know](https://ahrefs.com/blog/open-graph-meta-tags/) - I wasn't aware what the og meta property was, so I read up on how to handle the tags (as opposed to just deleting them).

- [How to use an emoji as a favicon](https://benborgers.com/posts/emoji-favicon) - This open source [EmojiCDN](https://github.com/benborgers/emojicdn) really saved me. I wasn't feeling like creating an svg or png of a emoji. Came across this CDN and, promise fulfilled — super useful!

<br>
<br>

## Author

- Website - [Sadie Jay Portfolio](https://sadiejay.github.io/portfolio/)
- Dev.to - [@sadiejay](https://dev.to/sadiejay/)


<br>
<br>

## Acknowledgments

- Thank you Jörn and Joe for yall's pairing!
- Thank you to all my inspo developers for putting thier work out there.
- Thank you for the Skillcrush community for thier support!

# 50 Projects in 50 Days - ExpandingCards


This is a code along project in the [50 Projects In 50 Days - HTML, CSS & JavaScript Udemy Course](https://www.udemy.com/course/50-projects-50-days/). Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents 😌

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview 👋🏾

Welcome to the first mini-project of the course!

### The challenge 😥

In this project users will be able to:

- Build a responsive site that displays expanding cards

### Screenshot 🌇

![](./screenshot.png)

### Links 👩🏾‍💻

- Solution URL: (https://github.com/MaianneThornton/50in50_ExpandingCards)
- Live Site URL: (https://venerable-begonia-290bbb.netlify.app/)

## My process 💭

I started by marking out initial classes and  in the html file to be later used for styling. I also added images during this step. Next I began styling the css to begin building the card's visuals. I then added the media queries, to give the breakpoints for desktop and mobile devices. Lastly, I added functionality by way of JavaScript to switch between classes when the user clicks on a card.

### Built with 👷🏾‍♀️

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned 👩🏾‍🏫

I learned how to add a background image using inline styling, which was very exciting. It was very easy to achieve, and I will be applying this method to future projects.

### Continued development 🔮

In the future I plan on continuing to practice positioning elements using flexbox, and using different selectors such as nth of type to select elements.

I also plan on continuing to learn the best ways to phrase git commits, so that future viewers can fully understand the changes that have occurred.

### I'm really proud of these code snippets ✂️
```css
.panel:nth-of-type(4), .panel:nth-of-type(5) {
        display: none;
    }
```
```js
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
```

### Useful resources 📖

- [Resource](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) - This is an amazing article which helped me write better commit messages. I'd recommend it to anyone still learning this concept.


## Author 🔎

- Website - [Maianne Thornton](https://www.maiannethornton.com/)
- Frontend Mentor - [@MaianneThornton](https://www.frontendmentor.io/profile/MaianneThornton)
- GitHub - [@MaianneThornton](GitHub.com/MaianneThornton)
- Twitter - [@MaianneThornton](https://twitter.com/MaianneThornton)
- LinkedIn - [@MaianneThornton](https://www.linkedin.com/in/maiannethornton/)

## Acknowledgments 🙏🏾

Special Thanks go to [Brad Traversy](http://www.traversymedia.com/) and [Florin Pop](http://www.florin-pop.com/) creating the course and making reviewing concepts fun 😊.

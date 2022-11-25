# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Desktop View](images/Desktop%20View.png)
![Mobile View](images/Mobile%20View.png)


### Links

- Solution URL: [Add solution URL here](https://mattzavada.github.io/Frontend-Mentor/3-column-preview-card-component-main/)
- Live Site URL: [Add live site URL here](https://mattzavada.github.io/)

## My process
Added semantic elements to HTML.
Thought about how to layout the design using grid for the various sections. Focues on mobile layout first with single column grid
Add CSS reset
Worked on main HTML elements and default properties for page
Added detailed styling to components
Added hover and focus effects on buttons
Add media query to change grid template columns to 3

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- HTML Data attributes
- Resposive design



### What I learned

Ran into an issue where the overflow:hidden setting on the main content was causing the bottom to be cut off at the bottom of the page. Once I added min-height of 100% to the html and body elements then the content reappeared. Seems that the overflow setting cuts off content if the height does not allow for it.

Used data attributes for the buttons to distinguish between them for styling. Wonder if there is a simpler way to style all the buttons with less code.

```css
.sedans {
  background-color: var(--BrightOrange);
}

button[data-car-type="sedan"]{
  color: var(--BrightOrange);
}

.SUV{
  background-color: var(--DarkCyan);
}

button[data-car-type="suv"]{
  color: var(--DarkCyan);
}

.luxury{
  background-color: var(--VeryDarkCyan);
}

button[data-car-type="luxury"]{
  color: var(--VeryDarkCyan);
}
```



### Continued development

Learn more about how Grid and Flex layout work and when there is a need to add height values to Grid to ensure vertical centering. 


## Author

- Website - [Matthew Zavada](https://mattzavada.github.io/)
- Frontend Mentor - [@mattzavada](https://www.frontendmentor.io/profile/mattzavada)

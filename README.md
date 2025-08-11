# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot%202025-08-05%20at%2021-25-54%20Extension%20Manager.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://valienteritter.github.io/Extension-Manager-UI/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to dynamically filter and remove elements using JavaScript, while following a mobile-first approach with HTML and CSS. I ensured the layout stayed fully responsive for different device sizes, and I also experimented with designing a dark theme for the first time.

While each function’s logic was straightforward in isolation, making them all work seamlessly together turned out to be more challenging than I expected. The biggest hurdle was ensuring that filtering and removal interacted correctly.

At first, I used this filtering approach:

```js
function filterExtensions(e) {
    
    filterButtons.forEach(filterButton => filterButton.classList.remove('highlight'))
    e.target.classList.add('highlight')
    extensionContainer.innerHTML = ''
    let filteredExtensions = extensions
    switch(e.target.value) {
        case 'all':
            filteredExtensions = extensions
            break
        case 'active':
            filteredExtensions = extensions.filter(({isActive}) => isActive === true)
            break
        case 'inactive':
            filteredExtensions = extensions.filter(({isActive}) => isActive === false)
            break
    }
    updateExtensionContainerHTML(filteredExtensions)
}
```
This worked in isolation but caused all sorts of issues when removing extensions — sometimes a removed item would still show up in certain filters, or disappear only in one filter but not in others. After wrestling with it for a while, I decided to scrap the approach entirely.

The rewrite was much simpler: instead of re-rendering the HTML on every filter change, I just toggled each item’s display between flex and none based on the selected filter.

```js
function filterExtensions() {
    
    extensionItems.forEach(extensionItem => {
        switch(selectedFilter) {
            case 'all':
                extensionItem.style.display = 'flex'
                break
            case 'active':
                if(extensionItem.lastElementChild.lastElementChild.classList.contains('active')) {
                    extensionItem.style.display = 'flex'
                }
                else {
                    extensionItem.style.display = 'none'
                }
                break
            case 'inactive':
                if(extensionItem.lastElementChild.lastElementChild.classList.contains('active')) {
                    extensionItem.style.display = 'none'
                }
                else {
                    extensionItem.style.display = 'flex'
                }
                break

    }
    });

}
```
A small change, but it made the whole system more stable and easier to maintain.

The biggest takeaway from this experience? Don’t get too attached to your code. Sometimes the simplest and most reliable solution only appears after you throw away the overcomplicated one.





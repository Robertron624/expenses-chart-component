# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt) by me [Robertron624](https://github.com/Robertron624). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot



### Links

- Solution URL: [Solution URL here](https://github.com/Robertron624/expenses-chart-component)
- Live Site URL: [Live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

I also did the use the JSON file data to dynamically set the bars height

### What I learned

I learned how to dynamically set the height of an element in order to display the diffrences in values.

I liked the way I handled the height of the bar depending on the amount of the item.

```js
        <div className="bar">
            <div className="bar-figure">
                <p style={{bottom: `${(amount * 1.5) + 6}%`}} className="amount">${amount}</p>
                <span
                    style={{
                        height: `${amount * 1.5}%`, // Dynamiclly sets the height according to the amount
                    }}
                    className={`${isToday ? 'today-bar' : 'normal-bar'}`}
                ></span>
            </div>
            <span className="day">{day}</span>
        </div>
```


### Continued development

I want to use a state store in a project that relays on complex state mangement.

### Useful resources

- [How to affect other elements when one element is hovered in CSS ?](https://www.geeksforgeeks.org/how-to-affect-other-elements-when-one-element-is-hovered-in-css/) - This helped me for hiding/showing the amount value when hovering the bar


## Author

- Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
- Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
- Twitter - [@robertdowny](https://www.twitter.com/robertdowny)

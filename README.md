# Sorting-Visualiser

Sorting visualiser for bubble sort with speed and array size adjustments; HTML, CSS, JavaScript

[Video Demo (click here)](https://www.youtube.com/watch?v=Dv8TWTYSgrY)

Created a demonstration of the bubble sort algorithm, with colour-coded bars to visualise the sort. I included settings for the number of bars, and I made it so that the speed can be adjusted mid-sort. 

There is a "Generate" button to generate a new array to sort, a slider to adjust the speed which even adjusts the speed mid-sort, an input for the number of bars (or array size), and a "Sort" button to start the sort. 

The "Sort" button does not work until there is a new array to sort, and neither button functions while the sort is ongoing. 

The bars are initialised to red to represent them being unsorted, they turn blue if they are under consideration (being compared) during the algorithm, and they turn green when they are sorted. 

## Installation

For now, you must pull the code onto your computer and click on the html file to give it a go yourself. 

## Implementing Sorting Visualiser

### Data Structures

A global array variable is used to hold the randomly initialised numbers, which is manipulated during the sort at the same time as the array on screen. This seperate array variable makes it easier to look-up the numbers and makes the code more readable. Comparisons are done using the array variable and swaps are done in a call to the swap function, which swaps in both the on screen array and the array variable behind the scenes. This makes implemeneting new sorts (in a future update) easier. 

### Implementation

The inputs (buttons, speed, and number of bars) are all included in a div at the top of the page. 

#### Generate Random Array

When the generate button is clicked, a div representing the previous array is deleted and a new div representing the array is created. Numbers are randomly generated one-by-one, after which spans are created representing the bars. The height of each bar is set to the randomly generated number. The span is then added to the array div, and the number is pushed onto the array variable. This is repeated according to the number of bars set by the input field. 

#### Sort Function

When sort is clicked, the bubble sort algorithm is called which is a basic sorting algorithm [Read More](https://en.wikipedia.org/wiki/Bubble_sort). It compares using the array variable and swaps both the array variable and array div using a swap() function. A wait() function delays the bubble sort function after each comparison and swap. 

The problem with making the sort function wait is that JavaScript runs synchronously, so we need to specify that the sort function is asynchronous and execute the following method. The function wait() returns an object called a Promise. This Promise has a function as argument, and this function calls setTimeout(). setTimeout() runs a function after a set period of time; in this case the function does nothing and the period of time is set by the input slider for speed. 'await promise' waits until the prmoise finishes until moving on to the next line of code, so the promise returned from wait() is used in this way in the sorting function to wait the amount of time set. await only works in asynchronous functions, so the syntax 'async function sort_function(event) {// function code}' is used. 

#### Disable and Enable Buttons

Buttons are disabled by adding a 'btn-disabled' class to each button element. There is CSS to alter the appearance of buttons to greyed-out if they have the 'btn-disabled' class. If a button is clicked then the function that is called afterwards first checks if the button is disabled by checking the class list of the button pressed. If the class list contains 'btn-disabled' then this implies that the button is disabled and the function immediately returns. Enabling buttons simply removes the 'btn-disabled' class from the button elements. The code for this is placed into seperate functions. 

#### Changing the Colour of Bars

To set the colour of a bar, a function setColor() is used with arguments index position and the colour to change it to. Each bar is initialised with an id equal to it's index position, so this is used to retrieve the correct span element representing the bar. The defualt colour of a bar is red, as set in the CSS. When changing the colour to blue the 'blueBar' class is added, which overrides the bar colour in CSS. Green is a similar process. The function wipes any colour classes before applying the colour class if needed, with nothing added for red since this is the defualt. 

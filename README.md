# Sorting-Visualiser

Sorting visualiser for bubble sort with speed and array size adjustments; HTML, CSS, JavaScript

[Video Demo (click here)](https://www.youtube.com/watch?v=Dv8TWTYSgrY)

Created a demonstration of the bubble sort algorithm, with colour-coded bars to visualise the sort. I included settings for the number of bars, and I made it so that the speed can be adjusted mid-sort. 

There is a "Generate" button to generate a new array to sort, a slider to adjust the speed which even adjusts the speed mid-sort, an input for the number of bars (or array size), and a "Sort" button to start the sort. 

The "Sort" button does not work until there is a new array to sort, and neither button functions while the sort is ongoing. 

The bars are initialised to red to represent them being unsorted, they turn blue if they are under consideration (being compared) during the algorithm, and they turn green when they are sorted. 

## Installation

For now, you must pull the code into Android Studio and run on an emulator to give it a go yourself. 

## Implementing Sorting Visualiser

### Data Structures

A global array variable is used to hold the randomly initialised numbers, which is manipulated during the sort at the same time as the array on screen. This seperate array variable makes it easier to look-up the numbers and makes the code more readable. Comparisons are done using the array variable and swaps are done in a call to the swap function, which swaps in both the on screen array and the array variable behind the scenes. This makes implemeneting new sorts (in a future update) easier. 

### Implementation

The inputs (buttons, speed, and number of bars) are all included in a div at the top of the page. 

When the generate button is clicked, a div representing the previous array is deleted and a new div representing the array is created. Numbers are randomly generated one-by-one, after which spans are created representing the bars. The height of each bar is set to the randomly generated number. The span is then added to the array div, and the number is pushed onto the array variable. This is repeated according to the number of bars set by the input field. 

When sort is clicked, the bubble sort algorithm is called. It compares using the array variable and swaps both the array variable and array div using a function. Async, await are used to create a wait() method which delays the bubble sort function after each comparison and swap. (ToDo Copy and paste the comment in the code to explain). 

(ToDo Explain enabling and disabling buttons). 

(ToDo Explain changing bar colours). 

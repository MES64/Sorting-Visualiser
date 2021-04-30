if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var array;

function ready() {
    document.getElementsByClassName('btn-generate')[0].addEventListener('click', generate)

    document.getElementsByClassName('btn-sort')[0].addEventListener('click', sort)

    document.addEventListener("keypress", swap)
}

function generate() {
    const numOfBars = document.getElementsByClassName('num-bars')[0].value

    const cont = document.getElementsByClassName('container')[0]
    cont.getElementsByClassName('array')[0].remove()
    const arr = document.createElement('div')
    arr.classList.add('array')

    window.array = [];
    for (let i=0; i<numOfBars; i++) {
        var barHeight = Math.floor(Math.random()*400 + 1)
        var bar = document.createElement('span')
        bar.setAttribute('id', `${i}`)
        bar.setAttribute('style', `height: ${barHeight}px;`)
        bar.setAttribute('title', `${barHeight}`)
        bar.classList.add('bar')

        arr.append(bar)
        window.array.push(barHeight)
    }
    cont.append(arr)

    console.log(window.array)
}

async function sort() {
    // Bubble Sort
    const len = window.array.length;

    for (let i=0; i<len-1; i++) {
        for (let j=0; j<len-i-1; j++) {
            if (window.array[j] > window.array[j+1]) {
                swap(j, j+1)
                await wait()
            }
        }
    }
}

function swap(i, j) {
    // Swap in array
    const temp = window.array[i]
    window.array[i] = window.array[j]
    window.array[j] = temp

    // Update display
    const barI = document.getElementById(`${i}`)
    const barJ = document.getElementById(`${j}`)
    barI.setAttribute('style', `height: ${window.array[i]}px;`)
    barJ.setAttribute('style', `height: ${window.array[j]}px;`)
}

function wait() {
    // 'async func' allows for code to run asynchronously; normally it's synchronous
    // 'await promise' waits for the promise to finish executing
    // Promises have an argument of a function, which itself has args resolve, and sometime reject
    // The Promise below contains a function which runs the setTimeout function
    // setTimeout has args: function to run after set time, and that time in ms
    // This setTimeout function runs a function returning resolve (so nothing really) after x000ms (x seconds)

    // The effect is that the function in Promise simply waits for x seconds
    // This Promise is returned by wait(), meaning 'await wait()' waits for x seconds before moving on
    // This wait only affects the execution in the async function
    return new Promise(resolve => setTimeout(resolve, 1000))
}

// ToDo: 
// - Arrow functions instead
// - Is global array needed? Could pass array into functions
// - Code the changing of bar colors to indicate what is 
//   happening
// - Set pause to slider value
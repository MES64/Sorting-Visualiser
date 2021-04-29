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

function sort() {
    // Bubble Sort
    const len = window.array.length;

    for (let i=0; i<len-1; i++) {
        for (let j=0; j<len-i-1; j++) {
            if (window.array[j] > window.array[j+1]) {
                swap(j, j+1)
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

// ToDo: 
// - Generate pause after each swap
// - Code the sorting algorithm; start with bubble sort
// - Code the changing of bar colors to indicate what is 
//   happening
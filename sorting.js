var array;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    generate(null)

    document.getElementsByClassName('btn-generate')[0].addEventListener('click', generate)

    document.getElementsByClassName('btn-sort')[0].addEventListener('click', sort)
}

function generate(event) {
    // Return if disabled
    if (event != null) {
        if (event.target.classList.contains('btn-disabled')) {
            return
        }
    }

    const numOfBars = document.getElementsByClassName('num-bars')[0].value

    const cont = document.getElementsByClassName('container')[0]
    cont.getElementsByClassName('array')[0].remove()
    const arr = document.createElement('div')
    arr.classList.add('array')

    array = [];
    for (let i=0; i<numOfBars; i++) {
        var barHeight = Math.floor(Math.random()*400 + 1)
        var bar = document.createElement('span')
        bar.setAttribute('id', `${i}`)
        bar.setAttribute('style', `height: ${barHeight}px;`)
        //bar.setAttribute('title', `${barHeight}`)
        bar.classList.add('bar')

        arr.append(bar)
        array.push(barHeight)
    }
    cont.append(arr)

    enableSort()

    //console.log(array)
}

async function sort(event) {
    // Return if disabled
    if (event.target.classList.contains('btn-disabled')) {
        return
    }

    disableButtons()

    // Bubble Sort
    const len = array.length;

    for (let i=0; i<len-1; i++) {
        setColor(0, 'blue')
        for (var j=0; j<len-i-1; j++) {
            setColor(j+1, 'blue')
            await wait()
            if (array[j] > array[j+1]) {
                swap(j, j+1)
                await wait()
            }
            setColor(j, 'red')
        }
        setColor(j, 'green')
        await wait()
    }
    setColor(0, 'green')

    enableButtons()  // All but the sort button
}

function disableButtons() {
    const btns = document.getElementsByClassName('btn')

    for (let i=0; i<btns.length; i++) {
        var btn = btns[i]
        btn.classList.add('btn-disabled')
    }
}

function enableButtons() {
    const btns = document.getElementsByClassName('btn')

    for (let i=0; i<btns.length; i++) {
        var btn = btns[i]
        if (!btn.classList.contains('btn-sort')){
            btn.classList.remove('btn-disabled')
        }
    }
}

function enableSort() {
    const sortBtn = document.getElementsByClassName('btn-sort')[0]

    sortBtn.classList.remove('btn-disabled')
}

function setColor(i, barColor) {
    const bar = document.getElementById(`${i}`)
    bar.classList.remove('blueBar', 'greenBar')

    if (barColor == 'blue') {
        bar.classList.add('blueBar')
    }
    else if (barColor == 'green') {
        bar.classList.add('greenBar')
    }
}

function swap(i, j) {
    // Swap in array
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp

    // Update display
    const barI = document.getElementById(`${i}`)
    const barJ = document.getElementById(`${j}`)
    barI.setAttribute('style', `height: ${array[i]}px;`)
    barJ.setAttribute('style', `height: ${array[j]}px;`)
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

    const pause = 1000 / document.getElementsByClassName("speed")[0].value

    return new Promise(resolve => setTimeout(resolve, pause))
}

// ToDo: 
// - Set limits to number of bars input
// - Special Inputs, such as reverse order, sorted, all values the same. 
// - Text to explain
// - Different Sorts; insertion, selection, merge, quick, shell; + insertion at end / when sub-arrays too short
// - Save arrays to try on different sorts?
// - Can calculate the number of array accesses per sort after generation?
// - Nice: background-color: rgb(0, 0, 22);
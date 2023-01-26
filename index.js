// Remember to import the data and Dog class!
import { dogs } from './data'
import { Dog } from '/Dog.js'

let isWaiting = false

function transition() {
    isWaiting = true;
    setTimeout(() => {
        console.log('getting new dog')
        dog = getNewDog()
        render()
        isWaiting = false
    }, 3000)
}

function getNewDog() {
    dogs.shift()
    return dogs[0] ? new Dog(dogs[0]) : {}
}

document.getElementById('heart-btn').addEventListener('click', function() {
    if (!isWaiting) {
        console.log('click')
        document.getElementById('dog-card').innerHTML = dog.getLikedHtml()
        transition()
    }
})

document.getElementById('nope-btn').addEventListener('click', function() {
    if (!isWaiting) {
       console.log('click')
        document.getElementById('dog-card').innerHTML = dog.getSwipedHtml()
        transition() 
    }
})

let dog = new Dog(dogs[0])

function render() {
    console.log(dog)
    if (Object.keys(dog).length === 0) {
        console.log('this ran')
        document.body.innerHTML = `<h2 class="end-text">No more dogs. Check back later!</h2>`
    } else {
        document.getElementById('dog-card').innerHTML = dog.getDogHtml()
    }
}

render()
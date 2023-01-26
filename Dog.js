// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    logDogName() {
        console.log(this.name)
    }
    
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
            <img class='profile-img' src="${avatar}" alt='dog image' />
            <h2 class='info'>${name}, ${age}</h2>
            <p class='bio'>${bio}</p>
        `
    }
    
    getLikedHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        this.hasBeenLiked = true
        return `
            <img class='profile-img' src="${avatar}" alt='dog image' />
            <img class='badge' src='images/badge-like.png' alt='like badge'/>
            <h2 class='info'>${name}, ${age}</h2>
            <p class='bio'>${bio}</p>
        `
    }
    
    getSwipedHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        this.hasBeenSwiped = true
        return `
            <img class='profile-img' src="${avatar}" alt='dog image' />
            <img class='badge' src='images/badge-nope.png' alt='nope badge'/>
            <h2 class='info'>${name}, ${age}</h2>
            <p class='bio'>${bio}</p>
        `
    }
}

export { Dog }
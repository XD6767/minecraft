function createImg() {
    const img = document.createElement('img')
    document.body.append(img)
    img.src = '../images/minecraft_horror.webp'
    img.classList.add('screamer-img')
}

function createSound() {
    const sound = new Audio('../sounds/screamer.mp3')
    sound.play()
}

const card = document.getElementById('card')
card.addEventListener('click', ()=> {
    createImg()
    createSound()
})

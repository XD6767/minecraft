function createImg() {
    const img = document.createElement('img')
    document.body.append(img)
    img.src = '../images/minecraft_horror.webp'
    img.classList.add('screamer-img')
}

const card = document.getElementById('card')
card.addEventListener('click', createImg)

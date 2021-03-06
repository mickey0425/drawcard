
function draw() {
  let btn = document.getElementById('btn')
  let transitions = document.getElementById('transitions')
  let draw = document.getElementById('draw')
  let character = document.getElementById('character')
  let card = document.getElementById('card')
  let idle = document.getElementById('idle')
  let white = document.getElementById('white')
  let endwhite = document.getElementById('endwhite')
  let endidle = document.getElementById('endidle')
  if(btn.innerText === 'Open') {
    randomDraw()
    btn.innerText = 'Hide'
    draw.style.display = 'block'
    character.style.display = 'block'
    card.style.display = 'none'
    idle.style.display = 'none'
    white.style.display = 'none'
    transitions.style.border = '1px solid #fff'
    character.addEventListener('animationend', () => {
      endwhite.style.display = 'block'
      endwhite.addEventListener('animationend', () => {
        endidle.style.display = 'block'
        transitions.style.border = '0px'
      })
    }, false)
  }
  else {
    btn.innerText = 'Open'
    card.style.display = 'block'
    idle.style.display = 'block'
    white.style.display = 'block'
    draw.style.display = 'none'
    character.style.display = 'none'
    endwhite.style.display = 'none'
    endidle.style.display = 'none'
  }
}

let imageNames = [6,10,20,24,27,42,46,56,69,90]

let gray = 'card_aura_gray_128x128.png'
let blue = 'card_aura_blue_128x128.png'
let green = 'card_aura_green_128x128.png'
let red = 'card_aura_red_128x128.png'

function randomDraw() {
  let character = document.getElementById('character')
  let back = []
  let transitionsCount = 12

  for (let i = 0; i < transitionsCount; i++) {
    let index = Math.floor(Math.random() * imageNames.length)

    back.push(`url('img/${imageNames[index]}.png') ${i * 60}px 0px no-repeat`)
  }
  character.style.background = back.join()
  character.style.backgroundSize = 'contain'

  let draw = document.getElementById('draw')
  let endidle = document.getElementById('endidle')
  let randomBG = Math.floor(Math.random() * 5)

  draw.style.backgroundPosition = `${60 * randomBG}px`

  switch (randomBG) {
    case 0:
      endidle.style.background = `url('./img2/${gray}')`
      break;
    case 1:
      endidle.style.background = `url('./img2/${red}')`
      break;
    case 2:
      endidle.style.background = `url('./img2/${blue}')`
      break;
    case 3:
      endidle.style.background = `url('./img2/${green}')`
      break;
    case 4:
      endidle.style.background = `url('./img2/${gray}')`
      break;
    default:
      break;
  }
}

const colors = ['black', 'white']
const positions = ['pawn 1', 'pawn 2', 'k rook', 'q rook', 'king', 'queen']

const chessSet = []
const main = () => {
  /*
    add the arrays together

    make each position black
    make each position white

    apply each position to each color

    at some point we need to push to chessSet
  */

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i]
    console.log(color)
    for (let j = 0; j < positions.length; j++) {
      const position = positions[j]
      console.log(position)
      const piece = color + ' ' + position
      console.log(piece)
      chessSet.push(piece)
    }
  }

  colors.forEach(color => {
    positions.forEach(position => {
      chessSet.push(color + ' ' + position)
    })
  })

  console.log(chessSet)
  // this is where I shuffle the chessSet
}

document.addEventListener('DOMContentLoaded', main)

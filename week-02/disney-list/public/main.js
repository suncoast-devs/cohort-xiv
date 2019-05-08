const villains = [
  'Jafar',
  'Scar',
  'Hades',
  'The Shadow Man',
  'Ursula',
  'that guy from Mulan'
]

const main = () => {
  console.log(villains.length)
  // for each villain,
  for (let i = 0; i < villains.length; i++) {
    const villain = villains[i]
    console.log(villain)
    // add the villain to the html
    const listItem = document.createElement('li')
    listItem.textContent = villain
    console.log(listItem)
    document.querySelector('.villains').appendChild(listItem)
  }
}

document.addEventListener('DOMContentLoaded', main)

const villains = [
  'Jafar',
  'Scar',
  'Hades',
  'The Shadow Man',
  'Ursula',
  'that guy from Mulan'
]

const renderVillains = () => {
  document.querySelector('.villains').textContent = ''
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

const main = () => {
  console.log(villains.length)
  renderVillains()
}
const addVillain = () => {
  //
  const newVillain = document.querySelector('.add-a-villain').value
  if (newVillain) {
    villains.push(newVillain)
    renderVillains()
  }
}

document.querySelector('.add-button').addEventListener('click', addVillain)

document.addEventListener('DOMContentLoaded', main)

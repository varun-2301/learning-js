// document.querySelector('.washing-machine').addEventListener('click', (event) => {
//     console.log('Wasing machine clicked')
// })

// document.querySelector('.tv').addEventListener('click', () => {
//     console.log('TV clicked')
// })

// document.querySelector('.laptop').addEventListener('click', () => {
//     console.log('Laptop clicked')
// })

document.querySelector('.machines').addEventListener('click', (event) => {
    console.log('Parent clicked')
    console.log(event.target.className)
})
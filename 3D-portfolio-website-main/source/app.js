document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect()
    // Update CSS variables for the spotlight effect
    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
})
let lastExecution = 0
const throttleDelay = 50 // Adjust the delay as needed

document.addEventListener('mousemove', (e) => {
  const now = Date.now()
  if (now - lastExecution >= throttleDelay) {
    const card = document.querySelector('.card')
    const x = e.clientX
    const y = e.clientY

    card.style.setProperty('--x', `${x}px`)
    card.style.setProperty('--y', `${y}px`)
    lastExecution = now
  }
})

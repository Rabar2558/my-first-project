document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect()
    // Update CSS variables for the spotlight effect
    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
})

document.getElementById('contactBtn').addEventListener('click', function () {
  const phoneNumber = '(+9647706161150)' // Replace with your number

  navigator.clipboard
    .writeText(9647706161150)
    .then(() => {
      const toast = document.getElementById('copyToast')
      toast.classList.add('show')

      // Hide the toast after 2 seconds
      setTimeout(() => {
        toast.classList.remove('show')
      }, 2000)
    })
    .catch((err) => {
      console.error('Failed to copy:', err)
    })
})
// Get video elements by their IDs // Get video elements by their IDs
const video1 = document.getElementById('projectVideo1')
const video2 = document.getElementById('projectVideo2')
const video3 = document.getElementById('projectVideo3')
const video4 = document.getElementById('projectVideo4')

const videoList = [video1, video2, video3, video4]

// Use forEach correctly
videoList.forEach(function (video) {
  video.addEventListener('mouseover', function () {
    video.play() // Play the video on mouse over
  })

  video.addEventListener('mouseout', function () {
    video.pause() // Pause the video on mouse out
  })
})

//form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault()
  //show success message
  document.getElementById('successMessage').style.display = 'block'
  //hide form
  document.getElementById('contactForm').style.display = 'none'
  //reset form
  document.getElementById('contactForm').reset()

  setTimeout(() => {
    document.getElementById('successMessage').style.display = 'none'
    document.getElementById('contactForm').style.display = 'initial'
    document.getElementById('contactForm').reset()
  }, 3000)
})

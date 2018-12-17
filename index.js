const dodger = document.getElementById('dodger')


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace('px', '')
  let right = parseInt(rightNumbers, 10)
  
  if (dodger.style.left < 390) {
    dodger.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})
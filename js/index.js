const first = document.getElementsByClassName('contentBx')

for (i = 0; i < first.length; i++) {
  first[i].addEventListener('click', function (ctx) {
    ctx.path[1].classList.toggle('active')
  })
}

const seta = document.querySelector('.seta')

seta.addEventListener('click', rediretToBackPage)

function rediretToBackPage() {
  window.history.back()
}

addEventListener('submit', function (event) {
  event.preventDefault()
})

const switchModal = () => {
  const modal = document.querySelector('.modal')
  const actualStyle = modal.style.display
  if (actualStyle == 'block') {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'block'
  }
}

const btn = document.querySelector('.modalBtn')
btn.addEventListener('click', switchModal)

window.onclick = function(event){
  const modal = document.querySelector('.modal')
  if(event.target == modal){
    switchModal
  }
}

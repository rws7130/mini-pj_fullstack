const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
      delay: 2000,
    },
  speed: 900,
})

const modal = document.getElementById("popup01")
const btnModal = document.getElementById("openModalBtn")
btnModal.addEventListener("click", e => {
  modal.style.display = "flex"

})
const closeBtn = document.getElementById("modal-btn")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})
window.addEventListener("keyup", e => {
  if(modal.style.display === "flex" && e.key === "Escape") {
      modal.style.display = "none"
  }
})
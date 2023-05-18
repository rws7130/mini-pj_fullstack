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
  if (modal.style.display === "flex" && e.key === "Escape") {
    modal.style.display = "none"
  }
})

$(document).ready(function () {
  show_info();
});

function save_info() {
  let name = $('#noplan').val()
  let best = $('#best').val()
  let style = $('#style').val()
  let blog = $('#blog').val()
  let image = $('#nimage').val()

  let formData = new FormData();
  formData.append("name_give", name)
  formData.append("best_give", best)
  formData.append("style_give", style)
  formData.append("blog_give", blog)
  formData.append("image_give", image)

  fetch('/infom', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
    alert(data["msg"]);
    window.location.reload()
  })
}

function show_info() {
  fetch ('/info').then((res) => res.json()).then((data) => {
    let rows = data['result']
    console.log(rows)
  })
}
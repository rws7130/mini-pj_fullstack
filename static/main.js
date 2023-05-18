$(document).ready(function () {
  show_info();
});

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

function save_info() {
  let name = $('#noplan').val()
  let best = $('#best').val()
  let style = $('#style').val()
  let blog = $('#blog').val()
  let image = $('#image').val()

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
  fetch('/infom').then((res) => res.json()).then((data) => {
    let rows = data['result']
    $('.swiper-wrapper').empty()
    rows.forEach((a) => {
      let name = a['name']
      let best = a['best']
      let style = a['style']
      let blog = a['blog']
      let image = a['image']
      let temp_html = `<div class="swiper-slide memberCards" id="memberCards" onclick="window.open('/sub')">
                          <a class="circle">
                              <img class="circle" src="${image}">
                          </a>

                          <p class="infoTitle">이름</p>
                          <p class="infoText">${name}</p>

                          <p class="infoTitle">자신의 장점</p>
                          <p class="infoText">${best}</p>

                          <p class="infoTitle">협업 스타일</p>
                          <p class="infoText">${style}</p>

                          <p class="infoTitle">블로그 바로가기</p>
                          <p class="infoText" onclick="window.open('${blog}')">
                          ${blog}
                          </p>
                      </div>`
      $('.swiper-wrapper').append(temp_html)
    })
  })
}

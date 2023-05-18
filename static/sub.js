$(document).ready(function () {
    show_infoDetails();
  });

function show_infoDetails() {
    fetch('/infom').then((res) => res.json()).then((data) => {
      let rows = data['result']
      $('.allMembers').empty()
      rows.forEach((a) => {
        let name2 = a['name']
        let best2 = a['best']
        let style2 = a['style']
        let blog2 = a['blog']
        let image2 = a['image']

        let temp_html = `<div class="memberCardsDetails">
                                <a class="circle">
                                    <img class="circle" src="${image2}">
                                </a>

                                <p class="infoTitle">이름</p>
                                <p class="infoText">${name2}</p>

                                <p class="infoTitle">자신의 장점</p>
                                <p class="infoText">${best2}</p>

                                <p class="infoTitle">협업 스타일</p>
                                <p class="infoText">${style2}</p>

                                <p class="infoTitle">블로그 바로가기</p>
                                <p class="infoText" onclick="window.open('${blog2}')">
                                ${blog2}
                                </p>
                            </div>`
        $('.allMembers').append(temp_html)
      })
    })
  }
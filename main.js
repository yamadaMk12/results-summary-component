const list = document.querySelector('.list');

fetch("data.json").then(res => {
    return res.json()
})
.then(data => {
    console.log(data)
    addItem(data)
})
.catch(err => {
    console.log(err)
})

function addItem(data) {
    html = ""
    data.forEach(one => {
        html += `<div class="box">
          <div class="title-logo">
            <img src=${one.icon} alt=${one.category}>
            <p>${one.category}</p>  
          </div>
          <div class="score">
            <p><strong>${one.score}</strong> / 100</p>
          </div>
        </div>`;
    });

    list.innerHTML = html;
}
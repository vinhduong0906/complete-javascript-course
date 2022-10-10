"use strict";
let currentPage = 1;
let totalPage = null;
const settingPage = { pagenum: 8, pagestep: 4 }; //Setting pagination//pagenum: number of page display in pagination
// pagestep: scroll pagination to pagestep number
let pageStart = 1;
let pageEnd = 0;
let leftDotEl = null;
let rightDotEl = null;
let prevBtnEl = null;
let nextBtnEl = null;
function renderNews(news, page) {
  newsContainerEl.innerHTML = "";
  news.articles.map((article) => {
    const div = document.createElement("div");
    div.className = "card flex-row flex-wrap";
    div.innerHTML = `<div class="card mb-3" style="">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="${
                  page === "news"
                    ? article.urlToImage != null
                      ? article.urlToImage
                      : ""
                    : article.image != null
                    ? article.image
                    : ""
                }"
                class="card-img"
                alt=${article.title}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  ${article.title}
                </h5>
                <p class="card-text">
                  ${article.description}
                </p>
                <a
                  href=${article.url}
                  class="btn btn-primary"
                  >View</a
                >
              </div>
            </div>
          </div>
        </div>`;
    newsContainerEl.appendChild(div);
  });
}

// //Init page to reset the pagination when take a new search
function paginationInit() {
  paginationEl.innerHTML = `<li class="page-item">
      <button class="page-link" href="#" id="btn-prev">Previous</button>
     </li>
     <li class="page-item "id="left-dot" hidden>
      <a class="page-link" >...</a>
     </li>

     <li class="page-item  "id="right-dot" hidden>
      <a class="page-link" >...</a>
     </li>
     <li class="page-item">
      <button class="page-link" id="btn-next">Next</button>
     </li>`;
  currentPage = 1;
  totalPage = null;
  leftDotEl = null;
  rightDotEl = null;
  pageStart = 1;
  pageEnd = 0;
  prevBtnEl = document.getElementById("btn-prev");
  nextBtnEl = document.getElementById("btn-next");
  leftDotEl = document.getElementById("left-dot");
  rightDotEl = document.getElementById("right-dot");
  nextBtnEl.addEventListener("click", nextPage);
  prevBtnEl.addEventListener("click", prePage);
}
//Nextpage button click function
function nextPage() {
  console.log("next");
  if (Number(currentPage) < Number(totalPage)) {
    document.querySelector(`[data-page='${Number(currentPage) + 1}']`).click();
  }
}

//Previous page button click function
function prePage() {
  if (Number(currentPage) > 1) {
    document.querySelector(`[data-page='${Number(currentPage) - 1}']`).click();
  }
}
function rePaginate(itemEl) {
  if (currentPage === totalPage)
    nextBtnEl.parentElement.classList.add("disabled");
  else nextBtnEl.parentElement.classList.remove("disabled");
  if (currentPage === 1) prevBtnEl.parentElement.classList.add("disabled");
  else prevBtnEl.parentElement.classList.remove("disabled");

  Array.from(itemEl.closest(".pagination").children).map((item) => {
    item.classList.remove("active");
  });
  itemEl.parentElement.classList.add("active");
  if (currentPage === pageEnd)
    for (let i = 1; i <= settingPage.pagestep; i++) {
      if (pageEnd + 1 > totalPage) break;
      document
        .getElementById(`page-num-${pageStart}`)
        .parentElement.setAttribute("hidden", "");
      pageStart++;
      document
        .getElementById(`page-num-${++pageEnd}`)
        .parentElement.removeAttribute("hidden");
    }
  if (currentPage === pageStart && pageStart > 1)
    for (let i = 1; i <= settingPage.pagestep; i++) {
      if (--pageStart >= 1) {
        document
          .getElementById(`page-num-${pageStart}`)
          .parentElement.removeAttribute("hidden");
      } else break;
      document
        .getElementById(`page-num-${pageEnd--}`)
        .parentElement.setAttribute("hidden", "");
    }
  if (pageEnd === totalPage) rightDotEl.setAttribute("hidden", "");
  else rightDotEl.removeAttribute("hidden");

  if (pageStart === 1) leftDotEl.setAttribute("hidden", "");
  else leftDotEl.removeAttribute("hidden");
}

//Render pagination
function pagination() {
  pageEnd = totalPage < settingPage.pagenum ? totalPage : settingPage.pagenum; //set value to pageEnd( the end page of present pagination)
  for (let i = 0; i < totalPage; i++) {
    // if (i == 1) document.querySelector("[data-page='1']").click();
    const j = i + 1;
    const li = document.createElement("li");
    li.className = "page-item";
    if (j > settingPage.pagenum) li.setAttribute("hidden", "");
    li.innerHTML = `<a class='page-link' id = 'page-num-${j}' data-page='${j}' onClick =' displayPage(this.id)' >${j}</a>`;
    rightDotEl.insertAdjacentElement("beforebegin", li);
  }
  if (pageEnd === totalPage) rightDotEl.setAttribute("hidden", "");
  else rightDotEl.removeAttribute("hidden");
}

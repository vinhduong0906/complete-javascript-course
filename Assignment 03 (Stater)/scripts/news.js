//This file is includes function of pagination.js file

"use strict";
const page = "news";
checkLogin();
paginationInit();
renderPagination();

//Render pagination and display news
async function renderPagination() {
  const news = await currentUser.getNews(1);

  totalPage = Math.ceil(news.totalResults / currentSetting.pagesize);
  renderNews(news, page);
  pagination();
  document
    .querySelector("[data-page='1']")
    .parentElement.classList.add("active");
}

// Onclick even of pagination click
async function displayPage(pageId) {
  const itemEl = document.getElementById(pageId);
  currentPage = Number(itemEl.dataset.page);
  const news = await currentUser.getNews(currentPage);
  renderNews(news, page);
  console.log(news);
  rePaginate(itemEl);
}

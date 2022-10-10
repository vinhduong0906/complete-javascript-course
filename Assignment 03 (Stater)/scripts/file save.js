"use strict";
const page = "search";
let searchKey = null;

const settingPage = { pagenum: 8, pagestep: 4 }; //Setting pagination//pagenum: number of page display in pagination
// pagestep: scroll pagination to pagestep number
let pageStart = 1;
let pageEnd = 0;
//User must login to use this function
checkLogin();

//Get data from gnews search API
async function fetchData() {
  try {
    const data = await fetch(
      `https://gnews.io/api/v4/search?q=${searchKey}&max=${currentSetting.pagesize}&page=${currentPage}&token=f2c252d43be9029e784150ff54b9e79f`
    );

    const news = await data.json();
    return news;
  } catch (err) {
    console.log(err.message);
  }
}
//This function for search button submit event
async function search() {
  paginationInit();
  searchKey = document.getElementById("input-query").value.trim();
  if (!searchKey) {
    alert("Enter keyword to input field");
    return;
  }

  const news = await fetchData();

  totalPage = Math.ceil(news.totalArticles / currentSetting.pagesize);
  if (totalPage) paginationEl.removeAttribute("hidden");
  else {
    alert("No data found");
    return;
  }
  renderNews(news, page);
  pagination();
}

//Add even for search button submit
submidBtnEl.addEventListener("click", search);

// Onclick even of pagination click
async function displayPage(pageId) {
  const itemEl = document.getElementById(pageId);
  currentPage = Number(itemEl.dataset.page);
  const news = await fetchData();
  console.log(news);
  renderNews(news, page);
  rePaginate(itemEl);
}

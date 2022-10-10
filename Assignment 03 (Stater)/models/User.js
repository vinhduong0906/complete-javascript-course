"use strict";

class User {
  constructor(firstName, lastName, username, password) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.password = password;
  }
  async getNews(page) {
    try {
      const news = await fetch(
        `https://newsapi.org/v2/top-headlines?pageSize=${currentSetting.pagesize}&page=${page}&category=${currentSetting.category}&country=us&apiKey=0e6cbebfea7c4cdab8aa968335202661`
      );
      const data = await news.json();
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
}

//Create instance object from local data
function parseUser(userData) {
  try {
    const user = new User(
      userData.firstname,
      userData.lastname,
      userData.username,
      userData.password
    );

    return user;
  } catch (err) {
    return;
  }
}

//Check if user is login on
function checkLogin() {
  if (!currentUser) {
    alert("You must login first");
    window.location.href = "../index.html";
  }
}

// Validate data for register user function
const validateUserData = (data) => {
  for (let prop in data) {
    if (!data[prop]) {
      alert("All of field must entered");
      return 0;
    }
  }
  for (let user of userArr) {
    if (user["username"] === data["username"]) {
      alert(`User name have existed!`);
      return 0;
    }
  }
  if (inputPasswordConfirmEl.value !== inputPasswordEl.value) {
    alert("Confirm password not match");
    return 0;
  }
  if (inputPasswordEl.value.length < 9) {
    alert("Password must more than 8 character");
    return 0;
  }
  return 1;
};

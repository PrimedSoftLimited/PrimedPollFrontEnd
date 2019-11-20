//Get the element from the DOM
const interestCount = document.querySelector('[data-interest-count]');
const interestCountPercent = document.querySelector('[data-interest-count-percent]');

const url = `${baseUrl}api/statistics/interest`

//Get the admin Info from the localstorage
const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
const {token} = adminInfo.data;
console.log(token);
//Call an api 

fetch(url, {
  method: "GET",
  mode: "cors",
  headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
  }
})
.then(response => {
  return response.json();
})
.then(data => {
const {interest_count} = data;
//Insert Interest Count into the DOM
interestCount.innerHTML = interest_count;
//Calculate the interest Count Percentage
let percent_interest_count = interest_count/100;
//Insert the percent into the DOM
interestCountPercent.innerHTML = percent_interest_count;
})
.catch(error => {
    console.log(error)
});
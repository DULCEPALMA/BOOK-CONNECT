var formEl = document.getElementById("search-form");
var olrEl = document.getElementById("open-libary-results");
var locEl = document.getElementById("library-of-congress-results");
var searchInfoEl = document.querySelector("#search-form input[type='text']");
var searchByEl = document.getElementById("search-by");


formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
event.preventDefault();
//go get user input 
console.log(searchInfoEl.value);
//if author else book title
console.log(searchByEl.value);
doOpenLibrarySearch(searchInfoEl.value, searchByEl.value)
doLibaryOfCongressSearch(searchInfoEl.value, searchByEl.value)

}
//open libaray search
function doOpenLibrarySearch(searchInfo, searchBy){
console.log("doing open library search")
fetch('https://openlibrary.org/search/?fo=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //update open library results
  });


}

//library of congress
function doLibaryOfCongressSearch(searchInfo, searchBy){
console.log("doing Libary of congress search")
fetch('https://www.loc.gov/search/?fo=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //update library of congress results
  });


}
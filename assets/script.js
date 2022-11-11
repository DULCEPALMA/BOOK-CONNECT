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
fetch('http://openlibrary.org/search/authors.json?q=twain')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    if(searchBy==="author"){
      //display author
      for(var i=0;data.docs.length>i;i++){
        var listitem= document.createElement("li");
        listitem.textContent=data.docs[i].name+"- top work of the author:  " + data.docs[i].top_work;
        locEl.append(listitem);
      }
    }else {
      //display book title
    }
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
    console.log(data.results);
    for(var i=0;data.results.length>i;i++){
      var listitem= document.createElement("li");
      listitem.textContent=data.results[i].title;
      locEl.append(listitem);
    }
    //update library of congress results

  });
  
}

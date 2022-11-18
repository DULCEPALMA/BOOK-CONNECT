var formEl = document.getElementById("search-form");
var olrEl = document.getElementById("open-library-results");
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
  var url = "";
  if(searchBy==="author"){
url='http://openlibrary.org/search/authors.json?q='+ searchInfo; 
  }else{
url='http://openlibrary.org/search.json?title='+ searchInfo;
  }
console.log("doing open library search")
fetch(url)
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
        olrEl.append(listitem);
      }
    }else {
      for(var i=0;data.docs.length>i;i++){
        var listitem= document.createElement("li");
       // listitem.textContent=data.docs[i].title+ "- The Author of this title is " + data.docs[i].author_name[0];
        listitem.textContent=data.docs[i].title;
        olrEl.append(listitem);
      } 
      //display book title
      
    }
    //update open library results

  });
  
  
}

//library of congress
function doLibaryOfCongressSearch(searchInfo, searchBy){
  var url = "";
  if(searchBy==="author"){
 url='https://www.loc.gov/search/?fo=json&q='+ searchInfo; 
  }else{
url='https://www.loc.gov/books/?fo=json&q='+ searchInfo;
  }
console.log("doing Libary of congress search")
fetch(url) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    locEl.textContent = "";
    if(searchBy==="author"){
      //display author
      for(var i=0;data.results.length>i;i++){
        var listitem= document.createElement("li");
        listitem.textContent=data.results[i].title;
        locEl.append(listitem);
      }

    }else {
      for(var i=0;data.docs.length>i;i++){
        var listitem= document.createElement("li");
        listitem.textContent=data.docs[i].title+ "- The Author of this title is " + data.docs[i].author_name[0];
        listitem.textContent=data.docs[i].title;
        locEl.append(listitem);
      //display book title
      }
    }
    //update library of congress results

  });
  
}
 

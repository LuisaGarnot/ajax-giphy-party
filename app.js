const searchBar = document.getElementsByClassName("search-bar");
const searchForm = document.getElementById('search-form');
const gifContainer = document.getElementsByClassName("gif-container");
const searchButton = document.querySelector(".search-btn")
const removeButton = document.querySelector('.remove-btn')

//retrive Gif from server and append to page
async function RequestGif() {
    const response = await axios.get("https://api.giphy.com/v1/gifs/categories?api_key=nDZaHkAYa5I5IQJ7N0g2FKJl0lUWAP57");
    let numResponses = response.data.length;
    if (numResponses) {
        let randomGif = Math.floor(Math.random() * numResponses);
        const src = response.data[randomGif].images.original.url;
        const img = document.createElement("img");
        img.src = src;
        img.classList.add = '.gif-container';
        gifContainer.append(img);
    }
   return response.data.data; 
}

//Listen for submit search and empty search bar afterwards
searchButton.addEventListener("click", async function(evt) {
    const searchBar = document.getElementsByClassName(".search-bar");
    evt.preventDefault();
    const newGif = await RequestGif(searchBar.value);
    
    searchBar.value = '';
    console.log(newGif)
})

//Remove all gifs from the page
removeButton.addEventListener('click', function() {
    const gifContainer = document.getElementsByClassName("gif-container");
    gifContainer.innerHTML = "";
    console.log("inside Event")
})
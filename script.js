const API_KEY = 'bf8368aaef0f21a3fe508e981b5061a5'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const searchInput = document.querySelector('#search-input');

const searchBtn = document.querySelector('button');

const displayMovies = document.querySelector('.movie-list');

searchBtn.addEventListener('click', async () =>{
    let input = searchInput.value;
    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${API_KEY}`);

   //console.log(response);
    renderList(response.data.results);


})

const renderList=(movies)=>{
    //console.log(movies);
for(let i = 0; i<movies.length; i++){
 
    const {original_title, poster_path} = movies[i];
    const imgPath = IMAGE_BASE_PATH + poster_path;
    const container = document.createElement('div');
    const movieTitle = document.createElement('h3');
    container.innerHTML = `<img src=${imgPath}>`;
    movieTitle.innerText = original_title;
    container.appendChild(movieTitle);
    displayMovies.appendChild(container);
    
// console.log(poster_path)
// console.log(original_title)
}}

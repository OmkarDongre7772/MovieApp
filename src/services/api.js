
const API_KEY = 'af69075f8a93c2498bb2352af566f924';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies(){
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export async function searchMovies(query){
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
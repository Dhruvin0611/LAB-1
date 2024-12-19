// Movie collection array
const movies = [
    { title: "Dhoom", genre: "Action", rating: 9.9, releaseYear: 2000 },
    { title: "Dhoom2", genre: "Comedy", rating: 6.0, releaseYear: 2005 },
    { title: "Dhoom3", genre: "Sci-Fi", rating: 7.8, releaseYear: 2010 }
];

// Function to add a new movie to the collection
function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    movies.push(newMovie); // Add movie to the array
    renderMovies(); // Update the movie list
}

// Function to filter movies by genre
function listMoviesByGenre(genre) {
    if (genre === "All") {
        return movies;
    }
    return movies.filter(movie => movie.genre === genre);
}

// Function to find the highest-rated movie
function findHighestRatedMovie() {
    let highest = movies[0];
    for (let i = 1; i < movies.length; i++) {
        if (movies[i].rating > highest.rating) {
            highest = movies[i];
        }
    }
    return highest;
}

// Function to get all movie titles
function getMovieTitles() {
    return movies.map(movie => movie.title);
}

// Function to filter movies released after a certain year
function filterMoviesByYear(year) {
    return movies.filter(movie => movie.releaseYear > year);
}

// Function to render movies on the webpage
function renderMovies() {
    const movieListElement = document.getElementById("movieList");
    movieListElement.innerHTML = ""; // Clear current list
    movies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.releaseYear}) - Genre: ${movie.genre}, Rating: ${movie.rating}`;
        movieListElement.appendChild(li);
    });
}

// Function to display the highest rated movie
function renderHighestRatedMovie() {
    const highestMovie = findHighestRatedMovie();
    const highestRatedElement = document.getElementById("highestRatedMovie");
    highestRatedElement.textContent = `${highestMovie.title} - Rating: ${highestMovie.rating}`;
}

// Function to display movies released after 2000
function renderMoviesAfter2000() {
    const filteredMovies = filterMoviesByYear(2000);
    const moviesAfter2000Element = document.getElementById("moviesAfter2000");
    moviesAfter2000Element.innerHTML = ""; // Clear current list
    filteredMovies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.releaseYear})`;
        moviesAfter2000Element.appendChild(li);
    });
}

// Event listener for adding a movie from the form
document.getElementById("movieForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    addMovie(title, genre, rating, releaseYear); // Add movie
    document.getElementById("movieForm").reset(); // Reset form
});

// Event listener for genre filter dropdown
document.getElementById("genreFilter").addEventListener("change", function(event) {
    const genre = event.target.value;
    const filteredMovies = listMoviesByGenre(genre);
    const filteredMoviesElement = document.getElementById("filteredMovies");
    filteredMoviesElement.innerHTML = ""; // Clear current list
    filteredMovies.forEach(movie => {
        const p = document.createElement("p");
        p.textContent = `${movie.title} (${movie.releaseYear}) - Rating: ${movie.rating}`;
        filteredMoviesElement.appendChild(p);
    });
});

// Initial render of movies when the page loads
renderMovies();
renderHighestRatedMovie();
renderMoviesAfter2000();

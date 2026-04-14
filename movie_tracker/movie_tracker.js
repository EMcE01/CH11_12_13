/**
 * imported from other files
 */
import movieList from "movie_list";
import Movie from "movie";
import * as dom from "DOM";

/**
 * shows the movies on the screen
 */
const displayMovies = () => {
    movieList.sort();

    const select = dom.get("#movies");
    select.textContent = "";  // clear previous movies

    for (let movie of movieList) {   
        const opt = document.createElement("option");
        opt.appendChild(document.createTextNode(movie));
        select.appendChild(opt);
    }  
    dom.focus("#title");
}

/**
 * loads the movies in the array from the previous use
 */
dom.load(() => {
    dom.addClick("#add_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const newMovie = new Movie(
            dom.getValue("#title"),
            dom.getValue("#genre"),
            dom.getValue("#rating")
        );
        
        let message = "";
        if (newMovie.title === "") {
            message = "Movie title is required. ";
        }

        if (message === "") {
            movieList.load().add(newMovie).save();
            dom.clear("#title");
            displayMovies();
        } else {
            dom.setText("#msg", message);
            dom.select("#movie");
        }     
    });
    
    dom.addClick("#clear_movies", () => {
        movieList.clear();
        dom.clear("#movies");
        dom.clear("#title");
        dom.clear("#msg");
        dom.focus("#movie");
    });  

    dom.addClick("#delete_movie", () => {
        dom.clear("#msg");             // clear any previous message
        
        const index = dom.get("#movies").selectedIndex;
        if (index === -1) {
            dom.setText("#msg", "Please select a movie to delete.");
        } else {
            movieList.load().delete(index).save();
            displayMovies();
        }
    });
    movieList.load()
    displayMovies();
});
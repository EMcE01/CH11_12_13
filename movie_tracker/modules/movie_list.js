/**
 * allows for use of variable in another file
 */
import movieStorage from 'movie_storage';

/**
 * array to store movie data
 * @type {*[]}
 */
let movies = [];         // private variable

/**
 *  is imported by other files
 * @type {{load(): this, save(): this, add(*): this, delete(*): this, clear(): this, sort(): void, [Symbol.iterator](): Generator<*, void, *>}}
 */
const movieList = {
    /**
     * loads from the storage array
     * @returns {movieList}
     */
    load() {
        movies = movieStorage.retrieve();
        return this;
    },
    /**
     * stores it into the array
     * @returns {movieList}
     */
    save() {
        movieStorage.store(movies);
        return this;
    },
    /**
     * adds movie into array
     * @param movie
     * @returns {movieList}
     */
    add(movie) {
        movies.push(movie);
        return this;
    },
    /**
     * deletes selected movie in array
     * @param i
     * @returns {movieList}
     */
    delete(i) {
        this.sort(); // sort so in same order as page
        movies.splice(i, 1);
        return this;
    },
    /**
     * clears all movies in array
     * @returns {movieList}
     */
    clear() {
        movies.length = 0;
        movieStorage.remove();
        return this;
    },
    /**
     * sorts the movies in order of rating descending and groups by genre
     */
    sort() {
        movies.sort((a, b) => {
            return a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()) ||
                (b.rating - a.rating) ||
                a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
    },
    /**
     * I honestly don't know
     * @returns {Generator<*, void, *>}
     */
    *[Symbol.iterator]() { 
        for (let movie of movies) {
            yield movie;
        }
    }
};

export default movieList;
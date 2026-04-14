/**
 * called from external files
 */
class Movie {
    /**
     * transfers data style for use within this file
     * @param title
     * @param genre
     * @param rating
     */
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    /**
     * creates a string to be displayed
     * @returns {string}
     */
    toString() {
        return `title - ${this.title} | genre - ${this.genre} | rating- ${this.rating}`;
    }
}

/**
 * exports the string to be displayed
 */
export default Movie;
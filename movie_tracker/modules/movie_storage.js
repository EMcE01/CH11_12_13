import * as storage from 'storage';
import Movie from 'movie';

const movieStorage = {
    retrieve() { 
        const movies = [];
        const movieArray = storage.retrieve("movies");
        if(movieArray) {
            for(let obj of movieArray) {
                movies.push(new Movie(obj.description, obj.dueDate));
            }
        }
        return movies;
    },
    store(movies) { 
        storage.store("movies", movies); 
    },
    remove() { 
        storage.remove("movies"); 
    }
};

export default movieStorage;
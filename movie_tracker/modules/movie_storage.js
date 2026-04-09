import * as storage from 'storage';
import Movie from 'movie_tracker/modules/movie';

const taskStorage = {
    retrieve() { 
        const tasks = [];
        const taskArray = storage.retrieve("tasks");
        if(taskArray) {
            for(let obj of taskArray) {
                tasks.push(new Movie(obj.description, obj.dueDate));
            }
        }
        return tasks;
    },
    store(tasks) { 
        storage.store("tasks", tasks); 
    },
    remove() { 
        storage.remove("tasks"); 
    }
};

export default taskStorage;
/**
 * pulls data from storage
 * @param key
 * @returns {any|null}
 */
function retrieve(key) {
    const json = localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    } else {
        return null;
    }
}

/**
 * stores the data
 * @param key
 * @param data
 */
function store(key, data) { 
    localStorage.setItem(key, JSON.stringify(data)); 
}

/**
 * removes the index key
 * @param key
 */
function remove(key) { 
    localStorage.removeItem(key); 
}

/**
 * exports for external use
 */
export {retrieve, store, remove}
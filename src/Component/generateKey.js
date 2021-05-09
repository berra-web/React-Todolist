// Clojure Function för Key
function generateKey() {
    let currentKey = 0;
    
    return() => {
        return currentKey++;
    }
}

export default generateKey();
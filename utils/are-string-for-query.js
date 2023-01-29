function areStringForQuery(...arr) {
    for(let i = 0; i < arr.length; i++) {
        if(/[-; ]+/.test(arr[i])) {
            return false;
        }
        return true;
    }
}

module.exports = {areStringForQuery};
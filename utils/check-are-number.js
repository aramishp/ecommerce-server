function areNumbers(...arr) {
    for(let i = 0; i < arr.length; i++) {
        if(isNaN(Number(arr[i]))) {
            return false;
        }
    }
    return true;
}

module.exports = {areNumbers};
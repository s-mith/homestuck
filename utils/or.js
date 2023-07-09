const orCombine = (a, b) => {
    // take two 48 character strings of 1s and 0s
    // return a 48 character string of 1s and 0s with 1s either string has a 1s
    // and 0s where both strings have a 0
    let result = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '1' || b[i] === '1') {
            result += '1';
        } else {
            result += '0';
        }
    }
    return result;

}

export default orCombine
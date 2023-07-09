import valueDict from './valueDict.js';
const str2bin = (str) => {
    let codeArray;
    // convert the code to an array of numbers
    try {
        codeArray = str.split('').map(char => valueDict[char]);
    } catch (error) {
        // return a div of the same size as the card
        return null;
    }
    // convert the array of numbers to an array of 6 bit binary strings
    const binaryArray = codeArray.map(num => num.toString(2).padStart(6, '0'));
    // combine the 6 bit binary strings into a single 48 bit binary string
    const binaryString = binaryArray.join('');

    
    return binaryString;
}

export default str2bin
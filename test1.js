//input: arr -

function findScoreMax(arr) {
    let uniqueArr = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
    if (uniqueArr.length < 3) {
        return -1;
    }
    //sorting array
    for (let i = 0; i < uniqueArr.length; i++) {
        for (let j = i + 1; j < uniqueArr.length; j++) {
            if (uniqueArr[i] > uniqueArr[j]) {
                let temp = uniqueArr[i];
                uniqueArr[i] = uniqueArr[j];
                uniqueArr[j] = temp;
            }
        }
    }
    return uniqueArr[2];
}
function tryRemoveFromArray(arr, index) {
    if (index < 0 || index >= arr.length) {
        return arr;
    }
    let newArr = []
    arr.forEach((element,i)=> {
        if (i != index) {
            newArr.push(element);
        }
    })
    return newArr;
}
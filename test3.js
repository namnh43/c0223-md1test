function checkString(str1, str2) {
    if (str2.length < str1.length)
        return false;
    let str1Length = str1.length;
    let str2Length = str2.length;
    for (let index = 0; index <= str2Length - str1Length; index++) {
        let subStr = str2.slice(index, index + str1Length);
        if (subStr == str1) {
            return true;
        }
    }
    return false;
}
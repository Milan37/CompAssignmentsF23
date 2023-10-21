function square(n) {
    if (typeof n === 'number') {
        return n * n;
    }
    return -1;
}
function numberString(i) {
    var result = "";
    if (i % 1 == 0 && i > 0) {
        for (var c = 1; c <= i; c++) {
            result += c.toString();
        }
        return result;
    }
    return -1;
}

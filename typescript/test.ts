function square(n: unknown): number {
    if (typeof n === 'number')
    {
        return n * n;
    }
    return -1;
}


function numberString(i: number): string | number {
    let result: string = "";    
    if (i % 1 == 0 && i > 0) {
        for (let c = 1; c <= i; c++) {
        result += c.toString();
        }
    return result;
    }
    return -1;
}
function reverse(x: number): number { // redo assuming 32 bits
    let res = 0
    if (x < 0) {
        res = -Number(x.toString().replace('-','').split('').reverse().join(''));
    } else res = Number(x.toString().split('').reverse().join(''));
    if (res > (2**31)-1 || res < -((2**31)-1)) {
        return 0
    } else return res
};
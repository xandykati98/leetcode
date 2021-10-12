function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x >= 0 && x < 10) return true;
    
    const check = String(x)

    if (check[0] !== check[check.length - 1]) return false;

    if (check.length % 2 === 0) {
        const l_half = check.length/2

        let [index_1, index_2] = [l_half, (l_half) + 1]

        if (check[index_1 - 1] !== check[index_2 - 1]) return false;

        const end = check.substr(Math.round(check.length / 2))
        if (end.split('').reverse().join('') === check.substr(0, Math.floor(check.length / 2))) {
            return true
        }
    } else {
        const end = check.substr(Math.round(check.length / 2))
        if (end.split('').reverse().join('') === check.substr(0, Math.floor(check.length / 2))) {
            return true
        }
    }

    return false
};
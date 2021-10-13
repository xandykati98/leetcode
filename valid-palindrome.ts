// @ts-ignore
function isPalindrome(s: string): boolean {

    const normalized_str = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

    if (normalized_str[0] !== normalized_str[normalized_str.length - 1]) return false;

    if (normalized_str.length % 2 === 0) {
        const l_half = normalized_str.length/2

        let [index_1, index_2] = [l_half, (l_half) + 1]

        if (normalized_str[index_1 - 1] !== normalized_str[index_2 - 1]) return false;

        const end = normalized_str.substr(Math.round(normalized_str.length / 2))
        if (end.split('').reverse().join('') === normalized_str.substr(0, Math.floor(normalized_str.length / 2))) {
            return true
        }
    } else {
        const end = normalized_str.substr(Math.round(normalized_str.length / 2))
        if (end.split('').reverse().join('') === normalized_str.substr(0, Math.floor(normalized_str.length / 2))) {
            return true
        }
    }
    
    return false;
};
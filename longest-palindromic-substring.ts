function longestPalindrome(s: string): string {
    if (s.length === 1) return s;

    const split_s = s.split('');

    let palindrome_size = s.length;
    let biggest_palindrome = ''
    
    const check_palindrome = (start_index:number, palindrome_size:number) => {
        const check = s.substr(start_index, palindrome_size)

        if (check[0] !== check[check.length - 1]) return;

        if (check.length % 2 === 0) {
            const l_half = check.length/2

            let [index_1, index_2] = [l_half, (l_half) + 1]

            if (check[index_1 - 1] !== check[index_2 - 1]) return;

            const end = check.substr(Math.round(check.length / 2))
            if (end.split('').reverse().join('') === check.substr(0, Math.floor(check.length / 2))) {
                if (biggest_palindrome.length < check.length) {
                    biggest_palindrome = check
                }
            }
        } else {
            const end = check.substr(Math.round(check.length / 2))
            if (end.split('').reverse().join('') === check.substr(0, Math.floor(check.length / 2))) {
                if (biggest_palindrome.length < check.length) {
                    biggest_palindrome = check
                }
            }
        }
        return false
    }
    for (const _ of new Array(s.length)) {
        if (biggest_palindrome.length > palindrome_size) return biggest_palindrome;

        if (palindrome_size === 1) {
            if (biggest_palindrome.length < split_s[split_s.length - 1].length) {
                biggest_palindrome = split_s[split_s.length - 1]
            }
        } else {
            let index = 0
            for (const _ of split_s) {
                check_palindrome(index, palindrome_size)
                if (biggest_palindrome.length >= palindrome_size) return biggest_palindrome;
                index++
            }
        }

        palindrome_size--
    }

    return biggest_palindrome
};
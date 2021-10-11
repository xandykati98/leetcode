function lengthOfLongestSubstring(s: string): number {
    if (!s) return 0;
    if (s.length === 1) return 1;

    let result = 0
    let seen_digits: { [digit:string]:number } = {}
    let i = 0
    for (const digit of s.split('')) {
        if (digit in seen_digits) {
            const length_found = Object.keys(seen_digits).length
            if (length_found >= result) result = length_found;

            const last_seen_digit = seen_digits[digit]

            seen_digits[digit] = i
            
            for (const digit_ in seen_digits) {
                if (seen_digits[digit_] < last_seen_digit) delete seen_digits[digit_]
            }
        } else {
            seen_digits[digit] = i
        }
        i++
    }

    const length_found = Object.keys(seen_digits).length
    if (length_found >= result) result = length_found;

    if (!result) return s.length
    return result
};
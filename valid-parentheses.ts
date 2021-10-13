function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;

    let parentheses_match = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    let left_ops = { '(': true, '[': true, '{': true };

    let needs_closing:string[] = [];

    let i = 0;
    for (const letter of s.split('')) {
        if (letter in left_ops) {
            needs_closing.push(letter)
        } else {
            if (needs_closing[needs_closing.length - 1] !== parentheses_match[letter]) {
                return false
            } else {
                needs_closing.pop()
            }
        }
        i++;
    }

    if (needs_closing.length > 0) return false;

    return true;
};
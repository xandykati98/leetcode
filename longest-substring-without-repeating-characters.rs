use std::collections::HashMap;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        if (s.len() == 1) {
            return 1
        };

        let mut result = 0;
        let mut seen_digits:HashMap<char, i32> = HashMap::new();
        let mut i = 0;

        for digit in s.chars() {
            
            if (&mut seen_digits).contains_key(&digit) {
                let mut length_found = seen_digits.len();
                if length_found >= result {
                    result = length_found;
                }

                let last_seen_digit = seen_digits[&digit];

                seen_digits.insert(digit, i);
                
                /**
                 * https://stackoverflow.com/questions/28909583/removing-entries-from-a-hashmap-based-on-value
                 * There is no way to delete values from hashmap during iteration (neither via remove, neither via Entry api) because of borrowing restrictions,
                */
                seen_digits.retain(|_, v| *v >= last_seen_digit);
            } else {
                seen_digits.insert(digit, i);
            }
            i+=1
        }

        let mut length_found = seen_digits.len();

        if (length_found >= result) {
            result = length_found;
        }
    
        if result == 0 {
            result = s.len();
        }
        return result as i32;
    }
}
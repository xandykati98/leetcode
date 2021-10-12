impl Solution { // i should clean this up
    pub fn is_palindrome(x: i32) -> bool {
        if (x < 0) {
            return false;
        };

        if (x >= 0 && x < 10) {
            return true;
        };

        let check = x.to_string();
        
        if (check.chars().nth(0).unwrap() != check.chars().last().unwrap()) {
            return false
        };

        if (check.len() % 2 == 0) {
            let l_half = check.len()/2;

            let [index_1, index_2] = [l_half, (l_half) + 1];

            if (check.chars().nth(index_1 - 1).unwrap() != check.chars().nth(index_2 - 1).unwrap()) {
                return false
            };

            let end = check.chars().skip(((check.len() as f32) / 2.).ceil() as usize).collect::<String>();
            
            if (end.chars().rev().collect::<String>() == check.chars().skip(0).take(((check.len() as f32) / 2.).floor() as usize).collect::<String>()) {
                return true
            }
        } else {
            let end = check.chars().skip(((check.len() as f32) / 2.).ceil() as usize).collect::<String>();
            if (end.chars().rev().collect::<String>() == check.chars().skip(0).take(((check.len() as f32) / 2.).floor() as usize).collect::<String>()) {
                return true
            }
        }

        return false
    }
}
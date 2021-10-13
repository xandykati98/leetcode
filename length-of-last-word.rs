impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let mut word_vec = s.trim().split(" ").collect::<Vec<&str>>();
        word_vec.last().unwrap().len() as i32
    }
}
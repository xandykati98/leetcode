impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut seen_nums = vec![];
        let mut highest_count = 0;
        let mut highest_count_n = 0;

        for num in nums.iter() {
            if seen_nums.contains(num) {

            } else {
                seen_nums.push(num);
                let count_find = nums.iter().filter(|&n| n == num).count();
    
                if (count_find > highest_count) {
                    highest_count = count_find;
                    highest_count_n = *num;
                }
            }
        }

        return highest_count_n
    }
}
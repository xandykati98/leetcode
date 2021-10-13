impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        (1..((nums.len() as i32)+1)).sum::<i32>() - nums.iter().sum::<i32>()
    }
}
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {

        let mut end_vec = vec![0 as i32, 1 as i32];
        for (i, num1) in nums.iter().enumerate() {
            for (j, suposed_num2) in nums.iter().enumerate() {
                if (i != j) {
                    if (num1 + suposed_num2 == target) {
                        end_vec = vec![i as i32, j as i32].to_vec();
                    }
                }
            };
        };

        return end_vec
    }
}
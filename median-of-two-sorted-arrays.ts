function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged_nums = [...nums1, ...nums2];
    const sorted_nums = merged_nums.sort((a,b) => a - b)
    const sorted_nums_length = sorted_nums.length
    const sorted_nums_half = sorted_nums_length/2

    if (sorted_nums_length % 2 === 0) {
        let [index_1, index_2] = [sorted_nums_half, (sorted_nums_half) + 1]

        return (sorted_nums[index_1 - 1] + sorted_nums[index_2 - 1]) / 2
    } else {
        return sorted_nums[Math.round(sorted_nums_half) - 1]
    }
};
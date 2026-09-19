// problem-1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var removeDuplicates = function(nums) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {

        if (i === 0 || nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

console.log(removeDuplicates([1, 1, 2]));
// problem-1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var removeDuplicates = function (nums) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {

        if (i === 0 || nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// console.log(removeDuplicates([1, 1, 2]));





// Problem-2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));




//problem-3



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;
};



console.log(searchInsert([1, 3, 5, 6], target = 5));
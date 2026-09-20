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



// console.log(searchInsert([1, 3, 5, 6], target = 5));





// problem-4



/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    // If there is no node
    if (root === null) {
        return 0;
    }

    
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};



// console.log(maxDepth([3,9,20,null,null,15,7]));



// problem-5


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if (root === null) {
        return null;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


// console.log(invertTree([4,2,7,1,3,6,9]));




// problem-6


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {

        let product = 1;

        for (let j = 0; j < nums.length; j++) {

            if (i !== j) {
                product = product * nums[j];
            }
        }

        result.push(product);
    }

    return result;
};

// console.log(productExceptSelf([1, 2, 3, 4]));



// problem-7


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {

    for (let i = 0; i < k; i++) {
        let last = nums.pop();
        nums.unshift(last);
    }
};



// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));





// problem-8

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.stack.push(val);

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    let value = this.stack.pop();

    if (value === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};





// problem-9


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {

    for (let i = 0; i < nums.length; i++) {

        let sum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {

            sum = sum + nums[j];

            if (sum % k === 0) {
                return true;
            }
        }
    }

    return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));





// problem-10

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    let result = [];

    for (let i = 0; i < temperatures.length; i++) {

        let days = 0;

        for (let j = i + 1; j < temperatures.length; j++) {

            days++;

            if (temperatures[j] > temperatures[i]) {
                break;
            }
        }

        
        if (j === temperatures.length) {
            days = 0;
        }

        result.push(days);
    }

    return result;
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
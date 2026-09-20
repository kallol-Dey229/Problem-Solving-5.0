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
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
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
    let min = this.stack[0];

    for (let i = 1; i < this.stack.length; i++) {
        if (this.stack[i] < min) {
            min = this.stack[i];
        }
    }

    return min;
};



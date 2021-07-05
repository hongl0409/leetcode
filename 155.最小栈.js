/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.list = []
  this.size = 0
  this.minList = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.list[this.size] = val
  const min = this.size > 0 ? this.minList[this.size - 1] : Infinity
  this.minList[this.size] = val > min ? min : val
  this.size++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.size--
  this.list.length = this.size
  this.minList.length = this.size
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.list[this.size - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minList[this.size - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


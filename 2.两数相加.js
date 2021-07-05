/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// [2, 4, 3, 5] 5342
// [3, 4, 6] 643  5895
var addTwoNumbers = function(l1, l2) {
  // const a = new ListNode()
  // return [a.prototype]
  let isForword = false
  let length = Math.max(l1.length, l2.length)

  const newArr = new Array()
  for (let current = 0; current < length; current++) {
    let currentResult = (l1[current] || 0) + (l2[current] || 0)
    if (isForword) {
      currentResult++
      isForword = false
    }
    if (currentResult >= 10) {
      currentResult = currentResult % 10
      isForword = true
    } 
    newArr.push(currentResult)
  }
  if (isForword) {
    newArr.push(1)
  }
  return newArr
};
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
// @lc code=end


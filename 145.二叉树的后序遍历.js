/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return []
  let p = root
  const stack = [p]
  const res = []
  while(stack.length) {
    const n = stack.pop()
    n.left && stack.push(n.left)
    n.right && stack.push(n.right)
    res.unshift(n.val)
  }
  return res
};
// @lc code=end


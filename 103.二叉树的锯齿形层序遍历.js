/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  // if (!root) return []
  // let t = root
  // let level = 0
  // const res = []
  // let stack = [t]
  // while(stack.length) {
  //   const tempArr = []
  //   const tempStack = []
  //   while(stack.length) {
  //     const n = stack.pop()
  //     tempArr.push(n.val)
  //     if (n.left === null && n.right === null) {
  //       continue
  //     } else if (n.left === null) {
  //       tempStack.push(n.right)
  //     } else if(n.right === null) {
  //       tempStack.push(n.left)
  //     } else {
  //       if (level % 2 === 0) {
  //         tempStack.push(n.left)
  //         tempStack.push(n.right)
  //       } else {
  //         tempStack.push(n.right)
  //         tempStack.push(n.left)
  //       }
  //     }
  //   }
  //   stack = tempStack
  //   res.push(tempArr)
  //   level++
  // }
  // return res
  if (!root) return []
  let currentLevel = [root]
  const res = []
  while(currentLevel.length) {
    const nextLevel = []
    const currentLevelVals = []

    currentLevel.forEach(node => {
      currentLevelVals.push(node.val)
      node.left && nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    })

    res.push(currentLevelVals)
    res.length % 2 === 0 && currentLevelVals.reverse()
    currentLevel = nextLevel
  }
  return res
};
// @lc code=end


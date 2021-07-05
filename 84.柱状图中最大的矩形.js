/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0
  for (let i = 0; i < heights.length; i++) {
    let h = heights[i]
    let w = 1
    if (i < heights.length) {
      for (let j = i + 1; j < heights.length; j++) {
        if(heights[j] < h) {
          break
        }
        w++
      }
    }
    if (i > 0) {
      for (let p = i - 1; p >= 0; p--) {
        if(heights[p] < h) {
          break
        }
        w++
      }
    }
    maxArea = Math.max(h * w, maxArea)
  }
  return maxArea
};
console.log(largestRectangleArea([2,1,2]))
// @lc code=end


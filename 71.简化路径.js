/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = []
  const t = path.split('/')
  for (let i = 0; i < t.length; i++) {
    const item = t[i];
    if (item === '.' || item === '') {
      continue
    } else if (item === '..') {
      if (stack.length) {
        stack.pop()
      }
    } else {
      stack.push(item)
    }
  }
  return '/' + stack.join('/')
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let ans = 0
  const numStack = []
  const opStack = []
  let sign = 1 
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    if (s[i] === '+' || s[i] === '-') {
      sign = s[i] === '+' ? 1 : -1
    } else if (s[i] >= '0' && s[i] <= '9') {
      // 寻找完整数字
      let num = s[i]
      while (i < s.length - 1 && s[i + 1] >= '0' && s[i + 1] <= '9') {
        num = num * 10 + s[++i] * 1
      }
      ans = ans + sign * num
    } else if (s[i] === '(') {
      opStack.push(sign)
      numStack.push(ans)
      sign = 1
      ans = 0
    } else {
      ans = numStack.pop() + opStack.pop() * ans
    }
  }
  return ans
};
console.log(calculate("2147483647"))
// @lc code=end


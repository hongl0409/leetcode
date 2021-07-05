/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if (!tokens.length) return 0
  const stack = []
  const map = new Map()
  map.set('+', (a, b) => a + b)
  map.set('-', (a, b) => a - b)
  map.set('*', (a, b) => a * b)
  map.set('/', (a, b) => parseInt(a / b))
  tokens.forEach(num => {
    if(stack.length >= 2 && map.has(num)) {
      const n1 = stack.pop() * 1
      const n2 = stack.pop() * 1
      stack.push(map.get(num)(n2, n1))
    } else {
      stack.push(num)
    }
  })
  return stack[0]
};
// @lc code=end

console.log(evalRPN(["4","13","5","/","+"]))

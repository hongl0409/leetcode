// 冒泡排序
// 升序

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 在1的基础上优化了性能 
// 在经过n轮后，数组最后的n个数字不再继续遍历
function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.time()
console.log(bubbleSort2([2, 9, 6, 4, 7, 8, 3, 1, 5]))
console.timeEnd()

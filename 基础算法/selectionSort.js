// 选择排序

function selectionSort(arr) {
  let minIndex
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
        break
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

console.time()
console.log(selectionSort([2, 9, 6, 4, 7, 8, 3, 1, 5]))
console.timeEnd()


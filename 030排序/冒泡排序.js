/**
 * 冒泡排序三个阶段
 *  1. 单个循环（伪冒泡）
 *  2. 嵌套循环 / 递归
 *  3. 优化冒泡排序的次数（若排好序后，不再执行后面的排序）
 */

var arr1 = [1, 14, 13, 9, 6, 56, 47, 98];

function bubbleSort1(arr1) {
  for (var j = arr1.length - 1; j > 0; j--) {
    var isSwap = 0;

    // 每一个数都需要比较
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr1[i + 1]) {
        var temp = arr1[i];
        arr1[i] = arr1[i + 1];
        arr1[i + 1] = temp;
        isSwap = 1;
      }
    }

    if (isSwap === 0) return; // 下一次遍历整个列表时，判断之前是否有交换过，如果上一次没有交换过，则不需要后面的遍历
  }
}

bubbleSort1(arr1);

console.log(arr1);

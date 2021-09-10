// 选择排序

/**
 * 第一轮：
 *  1）7作为对比目标；temp = 7
 *  2）7与后面的数比较，如果 > 7, 则比较下一个；如果 < 7, 则与7替换
 *  3）遇到3，temp = 3
 */

// 第一个数   8次
// 第二个数   7次
// ...

var arr1 = [7, 8, 11, 23, 3, 14, 2, 47, 98];
// 9个

var selectSort = function (arr) {
  var selectCount = arr.length - 1; // 8
  var temp;

  // 需要对比次数（每次递减，selectCount = 8）
  for (var i = 0; i < arr.length - 1; i++) {
    var toCompareVal = arr[i];

    for (var j = 0; j < selectCount; j++) {
      // 如果 前面的数 > 后面的数
      if (toCompareVal > arr[i + 1]) {
        // FIXME - i的值，每次小循环内都不会递增；j的值虽然会递增，但是每次都是从0开始；需要实现每次都是基于i开始，i+j+1 ？--> 1.1) 0+0 ; 1.2) 0+1 ... ; 2.1) 1+0; 2.2) 1+1 ... ; 3.1) 2+0
        //交换位置
        temp = arr[i]; // temp = 7

        arr[i] = arr[i + 1]; // arr[0] = 3

        arr[i + 1] = temp; // arr[4] = 7

        //重置对比值
        toCompareVal = arr[i]; // 7
      }
    }

    selectCount--;
  }
};

selectSort(arr1);
console.log(arr1);

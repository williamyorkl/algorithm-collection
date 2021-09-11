// 选择排序

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
      if (toCompareVal > arr[i + j + 1]) {
        // NOTE - i的值，每次小循环内都不会递增；j的值虽然会递增，但是每次都是从0开始；需要实现每次都是基于i开始，
        // i+j+1 ？-->
        /**
         * 1.1) 0+0 +1; // 8
         * 1.2) 0+1 +1; // 11
         *
         * 2.1) 1+0 +1; // 11
         * 2.2) 1+1 +1; // 23
         *
         * 3.1) 2+0 +1; // 23
         * 3.2) 2+1 +1; // 3
         */

        // i.交换位置
        temp = arr[i]; // temp = 7

        arr[i] = arr[i + j + 1]; // arr[0] = 3

        arr[i + j + 1] = temp; // arr[0 + 3 + 1] = 7   // ["3", 8, 11, 23, "7", 14, 2, 47, 98];

        // ii.重置对比值
        toCompareVal = arr[i]; // 3
      }
    }

    selectCount--;
  }
};

selectSort(arr1);
console.log(arr1);

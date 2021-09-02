// 选择排序

var arr1 = [7, 8, 11, 23, 1, 14, 56, 47, 98];
// 9个

var selectSort = function (arr) {
  var selectCount = arr.length - 1; // 8
  var temp;

  for (var i = 0; i < arr.length - 1; i++) {
    var toCompareVal = arr[i];

    for (var j = 0; j < selectCount; i++) {
      // 如果 前面的数 > 后面的数
      if (toCompareVal > arr[i + 1]) {
        //交换位置
        temp = arr[i]; // 临时：8

        arr[i] = arr[i + 1]; // 7

        arr[i + 1] = temp; // 8

        //重置对比值
        toCompareVal = arr[i]; // 7
      }
    }

    selectCount--;
  }
};

selectSort(arr1);
console.log(arr1);

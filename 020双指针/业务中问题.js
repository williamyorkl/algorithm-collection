// 把以下原始数据插入到对应的parent下
const rawData = [
  { val: "东", parent: null },
  { val: "西", parent: null },
  { val: "南", parent: null },
  { val: "北", parent: null },
  { val: "东1", parent: "东" },
  { val: "东2", parent: "东" },
  { val: "西1", parent: "西" },
  { val: "西2", parent: "西" },
  { val: "南1", parent: "南" },
  { val: "南2", parent: "南" },
  { val: "北1", parent: "北" },
  { val: "北2", parent: "北" },
];

/** 一、普通理解（还是用了两次循环）  */

// let left = 0; // 左指针
// let slow = 4; // 右指针
// let newDataArr = [];

// while (right < rawData.length) {
//   if (rawData[left].val === rawData[right].parent) {
//     // push之前先判断是否在里面
//     if (!newDataArr.find((i) => i.val === rawData[left].val)) {
//       newDataArr.push(rawData[left]);
//     }
//     newDataArr.push(rawData[right]);
//     right++;
//   } else {
//     left++;
//   }
// }

/** 二、双指针进阶 */

let slow = 0; // 慢指针，用于标示父节点
let newDataArr = [];

for (let i = 0; i < rawData.length; i++) {
  if (rawData[i].parent) {
    // 因为“东1” 这种子节点都是有序的，所以限制每次推入数组的是子节点
    if (rawData[slow].val === rawData[i].parent) {
      newDataArr.push(rawData[slow]); // 1）推入[{ val: "东", parent: null }]
      // 如果在这里推入了{ val: "东1", parent: "东" }， 下一次就会变成了“东”和“东2”都在里面
      slow++;
    }

    newDataArr.push(rawData[i]);

    // 所以原理是，每次遍历的时候，其实都往数组推入数据
    // 当第一次推入数据的时候，发现第n条数据的parent与一开始的头一条数据的val相等
    // 则先把第一条数据先推入

    // 然后第n+1条数据，其实是不用处理的，因为每次会默认推入数组
    // 又因为父数据只能往数组里面推一次，所以当已经被推入一次数组之后，slow指针都要+1

    // 下一个循环，当准备被用于对比的数据与slow指针对应的数据相等时，slow指针对应的数据就会被推入，然后slow指向下一个位置

    // 总结来说：就是每次都会往数据里面推入子节点的数据，然后用一个slow指针来标示父节点，每次推入子节点之前都对比对比下slow指针指向的父节点是否与当前被推入的子节点有从属关系，有的话，则推入父节点，并slow指向下一个父节点
  }
}

console.log("🚀 ~ file: 业务中问题.js ~ line 20 ~ newDataArr", newDataArr);

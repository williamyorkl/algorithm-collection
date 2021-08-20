// 示例数据 menuType=0为一级菜单，1为按钮，2为二级菜单
let menuTreeList = [
  {
    "id": "cfda8029dfb311e7b555201a068c6482",
    "name": "系统管理",
    "menuType": 0,
    "children": [
        {
          "id": "3873ccc2dfda11e7b555201a068c6483",
          "name": "菜单管理",
          "menuType": 1,
        }
    ]
  },
  {
    "id": "cfda8029dfb311e7b555201a068c6486",
    "name": "设备管理",
    "menuType": 0,
    "children": [
      {
        "id": "18bf8d5df09511e78a57201a068c6487",
        "name": "设备管理-新增",
        "menuType": 1
      },
      {
        "id": "18bf8d5df09511e78a57201a068c6488",
        "name": "设备管理-修改",
        "menuType": 1,
        "children": [
          {
            "id": "18bf8d5df09511e78a57201a068c6484",
            "name": "设备管理-修改children",
            "menuType": 1,
            "children": [
              {
                "id": "18bf8d5df09511e78a57201a068c6484",
                "name": "设备管理-grandchildren1",
                "menuType": 1
              },
              {
                "id": "18bf8d5df09511e78a57201a068c6484",
                "name": "设备管理-grandchildren2",
                "menuType": 1
              }
            ]
          }
        ]
      }
    ]
  }
]

/**
 * 
 * @param {*} menuTreeList 
 * 
 *  "children": [
                {
                  "id": "18bf8d5df09511e78a57201a068c6484",
                  "name": "菜单管理-新增",
                  "menuType": 1
                },
                {
                    "id": "18bf8d5df09511e78a57201a068c6485",
                    "name": "菜单管理-修改",
                    "menuType": 1,
                    "children": [
                      {
                        "id": "18bf8d5df09511e78a57201a068c6484",
                        "name": "子新增1",
                        "menuType": 1
                      },
                      {
                        "id": "18bf8d5df09511e78a57201a068c6485",
                        "name": "子修改1",
                        "menuType": 1
                      }
                  ]
                }
            ]
 */

// 递归遍历把数据对象中 menuType = 1的推进数组

const getMenuType = function(menuTreeList){
  const menuArr =[]

  // 递归结束条件是判断是否有children这个属性
  for (const item of menuTreeList) {
    item.children && menuArr.push(...getMenuType(item.children))
    item.menuType === 1 && menuArr.push(item)
  }
  return menuArr
}

const result = getMenuType(menuTreeList)


console.log('menuArr',result);
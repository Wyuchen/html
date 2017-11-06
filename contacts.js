//Profile Lookup -----> 来自www.freecodecamp.cn---->229练习
//我们有一个对象数组，里面存储着通讯录。
//函数 lookUp 有两个预定义参数：firstName值和prop属性 。
//函数将会检查通讯录中是否存在一个与传入的 firstName 相同的联系人。如果存在，那么还需要检查对应的联系人中是否存在 prop属性。
//如果它们都存在，函数返回prop属性对应的值。
//如果firstName 值不存在，返回 "No such contact"。
//如果prop 属性不存在，返回 "No such property"

//初始化变量
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// 请把你的代码写在这条注释以下
for(var i=0;i<4;i++){
   if(contacts[i].firstName==firstName){
        if(contacts[i].hasOwnProperty(prop)){     
               return contacts[i][prop];
        }
        else{
            return "No such property";
        }
   }
}
  return "No such contact";       //写在循环外面是说明当都没有匹配到firstName的时候返回
// 请把你的代码写在这条注释以上
}

// 你可以修改这一行来测试你的代码
lookUp("Kristian", "lastName");


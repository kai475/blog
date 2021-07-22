/**
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m); // 第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 */
function findTopSum(arr, k, m) {
  /** 代码实现 */
  
}


/**
 * 按条件合并相邻项
 * 说明：实现一个方法，可将数组中相邻的项按条件合并
 * 示例：
 *   adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
 *   adjoin([0, 1, 2, 3, 4], item => item < 3); // [[0, 1, 2], 3, 4]
 */
function adjoin(arr, condition) {
  /* 代码实现 */
}



/**
 * 实现一个EatMan
 * 说明：实现一个EatMan，EatMan可以有以下一些行为
 * 示例：
 *  1. EatMan(“Hank”)输出:
 *   Hi! This is Hank!
 *  2. EatMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 *   Hi This is Hank!
 *   Eat dinner~
 *   Eat supper~
 *  3. EatMan(“Hank”).eat('dinner').eatFirst(“lunch”)输出
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
 *  4. EatMan(“Hank”).eat('dinner').eatFirst(“lunch”).eatFirst("breakfast")输出
 *   Eat breakfast~
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
*/

function EatMan(name){
}

console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
Promise.resolve(3).then(function (val) {
  console.log(val);
});
console.log(4);

/**
 * print order: 
 */

/**
 * 二十五匹马，五条赛道跑马，需要跑多少轮才能找出第三快的马
 */

/**
 * 答：
 * 前五轮：所有马分五组ABCDE，每组跑一轮，分别挑出五组中跑的最快的马A1/B1/C1/D1/E1；
 * 第六轮：五组最快的马跑一轮；
 *   淘汰末尾两名及其所在组（假设D1/E1），现剩余15匹马
 *   排除第一名（假设A1），现剩余14匹马(A2-A5, B1-B5, C1-C5)
 * 第七轮：第六轮跑得第一名的组的第二、第三名(假设A2、A3)
 *        + 第六轮跑得第二的组的第一、第二名（假设B1、B2）
 *        + 第六轮跑得第三的马（假设C1）
 *        即 A2+A3+B1+B2+C1 跑一轮；
 *   从而，第七轮最快的马为所有马中的第二名，第二快的马为第三名
 * 
 * 
 * 拓展：找出第四快的马需要多少轮？
 * 
 * 按上面的方法继续推断：
 * 假设第二、三名为 A2、A3 则需要在 A4，B1，共2匹马中找出第四名
 * 假设第二、三名为 A2、B1 则需要在 A3、B2、C1，共3匹马中找出第四名
 * 假设第二、三名为 B1、A2 则需要在 A3、B2、C1，共3匹马中找出第四名
 * 假设第二、三名为 B1、B2 则需要在 A2、B3、C1，共3匹马中找出第四名
 * 假设第二、三名为 B1、C1 则需要在 A2、B2、C2、D1，共4匹马中找出第四名
 * 总结：第八轮会找到第四名
 * 
 * 加速推断：
 * 淘汰掉第五名（假设E1）所在组，在 A2-A4、B1-B3、C1-C2、D1，共9匹马中找到第四名，
 * 已知 A2 > A3 > A4, B1 > B2 > B3, C1 > C2, B1 > C1 > D1
 * 第二名一定会在 A2 或 B1 中诞生，
 * 假设第二名为 A2，则第三名可能是 A3, B1
 * 假设第二名为 B1，则第三名可能是 A2, B2, C1
 * 从而得出结论第七轮可以得出第二、第三名，第八轮（比较剩余4匹马）可以得出第四名。
 * 
 */

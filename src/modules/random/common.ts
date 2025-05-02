/**
 * @name 随机数值
 * @group 随机工具
 * @param {Number} min 最小值，最小值可以等于该值
 * @param {Number} max 最大值，最大值可以等于该值
 * @returns Number
 */
export function random(min:number, max:number) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}


/**
 * @name 打乱数组
 * @group 随机工具
 * @param {Array} array
 * @returns {Array} array
 */
export function randomArray(array=[]) {
  return array.sort(() => Math.random() - 0.5);
}
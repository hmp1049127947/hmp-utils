const toString = Object.prototype.toString;

/**
 * @name is 函数
 * @group 类型判断
 * @param val 要判断的数据
 * @param type 判断的类型
 * @return boolean
 * @example
 * ```ts
 * console.log(is('哈哈哈','String')); // true
 * ```
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * @name 判断是不是undefined
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isUnDefined<T = unknown>(val?: T): val is T {
  return !isDefined(val);
}

/**
 * @name 不为 undefined
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isDefined<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}



/**
 * @name 判断是不是对象
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

/**
 * @name 判断数据是不是为空
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 * @description 当val为数字时，判断的是0和Number.isNaN
 */
export function isEmpty<T = unknown>(val: T): val is T {
  switch (typeof val) {
    case 'undefined':
      return true
    case 'string':
      if (val.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
        return true
      break
    case 'boolean':
      if (!val) return true
      break
    case 'number':
      if (0 === val || Number.isNaN(val)) return true
      break
    case 'object':
      return Object.keys(val as object).length === 0;
  }
  return false
}

/**
 * @name 判断是不是日期类型
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

/**
 * @name 判断是不是null
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isNull(val: unknown): val is null {
  return val === null;
}

/**
 * @name 判断是不是null 和 undefined
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDefined(val) && isNull(val);
}

/**
 * @name 判断是不是null 或者 undefined
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isNil(val: unknown): val is null | undefined {
  return isUnDefined(val) || isNull(val);
}

/**
 * @name 判断是不是字符串
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

/**
 * @name 判断是不是Promise
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @name 判断是不是字符串类型
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/**
 * @name 判断是不是function 函数
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isFunction(val: unknown): boolean {
  return typeof val === 'function';
}

/**
 * @name 判断是不是Boolean 类型
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/**
 * @name 判断是不是正则类型
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

/**
 * @name 判断是不是数组
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * @name 判断当前环境是不是window环境
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

/**
 * @name 判断当前环境是不是iframe环境
 * @group 类型判断
 * @return boolean
 */
export const isInIframe=window.self === window.top

/**
 * @name 判断是不是 Element对象
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

/**
 * @name 判断是不是Map对象
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

/**
 * @name 判断是不是在node环境
 * @group 类型判断
 * @param val 要判断的数据
 * @return boolean
 */
export const isServer = typeof window === 'undefined';

/**
 * @name 判断是不是在window环境
 * @group 类型判断
 */
export const isClient = !isServer;

/**
 * @name 判断是不是url链接
 * @group 类型判断
 * @param path 要判断的路径
 * @return boolean
 */
export function isUrl(path: string): boolean {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

/**
 * @name 判断是不是json字符串
 * @group 类型判断
 * @param str 要判断的数据
 * @return boolean
 */
export function isJSON(str: any): boolean {
    if (typeof str === 'string') {
      try {
        const obj = JSON.parse(str)
        return typeof obj === 'object'
      } catch (e) {
        return false
      }
    }else{
      return false
    }
  }

/**
 * @name 判断是不是车牌号
 * @group 类型判断
 * @param str 要判断的数据
 * @return boolean
 */
export function isCarNo(str: any): boolean {
  // 新能源车牌
  const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (str.length === 7) {
    return creg.test(str);
  } else if (str.length === 8) {
    return xreg.test(str);
  } else {
    return false;
  }
}

/**
 * @name 判断是不是身份证号
 * @group 类型判断
 * @param str 要判断的数据
 * @return boolean
 */
export function isIdCard(str: any): boolean {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    str)
}

/**
 * @name 是否为手机号
 * @group 类型判断
 * @param str 要判断的数据
 * @return boolean
 */
export function isMobile(str: any): boolean {
  return /^1[3-9]\d{9}$/.test(str)
}

/**
 * @name 验证电子邮箱格式
 * @group 类型判断
 * @param str 要判断的数据
 * @return boolean
 */
export function isEmail(str: any): boolean {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(str);
}

/**
 * @name 是否为图片
 * @group 类型判断
 * @param url 要判断的数据
 * @return boolean
 */
export function isImg(url: any): boolean {
  return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url)
}
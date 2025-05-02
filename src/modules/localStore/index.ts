
/**
 * @name localStorage工具类,可传入prefix作为缓存的前缀
 * @group 缓存工具
 * @example 示例1
 * ```ts
 * const storeInstant = new LocalStore({
 *   prefix: '_store_',
 * });
 * // 加入缓存
 * storeInstant.set('key','value');
 * // 获取缓存
 * storeInstant.get('key'); // value
 * // 删除缓存
 * storeInstant.remove('key');
 * // 清空缓存
 * storeInstant.clear();
 * ```
 */
export class LocalStore {
    private readonly prefix: string
    constructor(prefix: string = '') {
      this.prefix = prefix || ''
    }
  
    private getStoreKey(key: string) {
      return `${this.prefix}${key}`
    }
  
    get<T>(key: string, defaultValue: any = null): T {
      const storeKey = this.getStoreKey(key)
      const cacheStore = localStorage.getItem(storeKey)
      if (cacheStore) {
        const cache = JSON.parse(cacheStore)
        const expire = cache?.expire
        if (expire && expire < new Date().getTime()) {
          localStorage.removeItem(storeKey)
          return defaultValue
        }
        return cache.value
      }
      return defaultValue
    }
  
    /**
     * 存储
     * @param key 键
     * @param value 值
     * @param expire 过期时间（时间戳）
     */
    set(key: string, value: any, expire?: number) {
      const storeKey = this.getStoreKey(key)
      const cache: any = {
        value,
        expire,
      }
      if (expire) {
        cache.expire = new Date().getTime() + expire
      }
      localStorage.setItem(storeKey, JSON.stringify(cache))
    }
  
    // 删除数据
    remove(key: string) {
      localStorage.removeItem(this.getStoreKey(key))
    }
  
    //清除数据
    clear() {
      localStorage.clear()
    }
  }

const storeInstant = new LocalStore()
/**
 * @name localStore工具对象,无store前缀，是LocalStore的实例
 * @group 缓存工具
 * @example 
 * ```ts
 * // 加入缓存
 * localStore.set('key','value');
 * // 获取缓存
 * localStore.get('key'); // value
 * // 删除缓存
 * localStore.remove('key');
 * // 清空缓存
 * localStore.clear();
 * ```
 */
  export const localStore = {
    get:storeInstant.get.bind(storeInstant),
    set:storeInstant.set.bind(storeInstant),
    remove:storeInstant.remove.bind(storeInstant),
    clear:storeInstant.clear.bind(storeInstant),
  }
[**hmp-utils1**](../README.md) • **Docs**

***

# 类: LocalStore

## 方法名称

localStorage工具类,可传入prefix作为缓存的前缀

## 示例

```ts
const storeInstant = new LocalStore({
  prefix: '_store_',
});
// 加入缓存
storeInstant.set('key','value');
// 获取缓存
storeInstant.get('key'); // value
// 删除缓存
storeInstant.remove('key');
// 清空缓存
storeInstant.clear();
```

## Constructors

### new LocalStore()

> **new LocalStore**(`prefix`): [`LocalStore`](LocalStore.md)

#### 参数

| 参数名 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `prefix` | `string` | `''` |

#### 返回值类型

[`LocalStore`](LocalStore.md)

#### 查看源码

[modules/localStore/index.ts:22](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L22)

## Properties

### prefix

> `private` `readonly` **prefix**: `string`

#### 查看源码

[modules/localStore/index.ts:21](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L21)

## Methods

### clear()

> **clear**(): `void`

#### 返回值类型

`void`

#### 查看源码

[modules/localStore/index.ts:69](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L69)

***

### get()

> **get**\<`T`\>(`key`, `defaultValue`): `T`

#### 类型参数

| 类型参数 |
| :------ |
| `T` |

#### 参数

| 参数名 | 类型 | 默认值 |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `defaultValue` | `any` | `null` |

#### 返回值类型

`T`

#### 查看源码

[modules/localStore/index.ts:30](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L30)

***

### getStoreKey()

> `private` **getStoreKey**(`key`): `string`

#### 参数

| 参数名 | 类型 |
| :------ | :------ |
| `key` | `string` |

#### 返回值类型

`string`

#### 查看源码

[modules/localStore/index.ts:26](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L26)

***

### remove()

> **remove**(`key`): `void`

#### 参数

| 参数名 | 类型 |
| :------ | :------ |
| `key` | `string` |

#### 返回值类型

`void`

#### 查看源码

[modules/localStore/index.ts:64](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L64)

***

### set()

> **set**(`key`, `value`, `expire`?): `void`

存储

#### 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `key` | `string` | 键 |
| `value` | `any` | 值 |
| `expire`? | `number` | 过期时间（时间戳） |

#### 返回值类型

`void`

#### 查看源码

[modules/localStore/index.ts:51](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/localStore/index.ts#L51)

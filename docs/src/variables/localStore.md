[**hmp-utils**](../README.md) • **Docs**

***

# Variable: localStore

> `const` **localStore**: `object`

## 方法名称

localStore工具对象,无store前缀，是LocalStore的实例

## 示例

```ts
// 加入缓存
localStore.set('key','value');
// 获取缓存
localStore.get('key'); // value
// 删除缓存
localStore.remove('key');
// 清空缓存
localStore.clear();
```

## Type declaration

| Member | 类型 | Value |
| :------ | :------ | :------ |
| `clear` | () => `void` | ... |
| `get` | \<`T`\>(`key`, `defaultValue`) => `T` | ... |
| `remove` | (`key`) => `void` | ... |
| `set` | (`key`, `value`, `expire`?) => `void` | ... |

## 查看源码

[modules/localStore/index.ts:90](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/localStore/index.ts#L90)

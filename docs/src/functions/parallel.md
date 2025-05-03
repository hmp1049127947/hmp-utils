[**hmp-utils1**](../README.md) • **Docs**

***

# 函数: parallel()

### 并发：这个函数会限制同时进行的异步操作的数量，以避免同时启动过多的异步任务。

> **parallel**(`limit`, `array$1`, `func`): `Promise`\<`any`\>

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `limit` | `number` | 并发的数量 |
| `array$1` | `any`[] | 需要被异步处理的元素数组 |
| `func` | `any` | 转换函数（将数组中的每个元素转换为一个异步操作） |

## 返回值类型

`Promise`\<`any`\>

返回一个数组，该数组包含了按原数组顺序排序的所有成功的结果。

## 示例

```ts
const users await parallel(3,[1,2,3,4,5,6,7,8,9],async (userId)=>{
 return await api.users.find(userId)
})
```

## 查看源码

[modules/async/index.ts:60](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/async/index.ts#L60)

[**hmp-utils**](../README.md) • **Docs**

***

# 函数: tryIt()

### 帮你给异步操作加一层 try catch，有利于操作的兜底以及错误的捕获

> **tryIt**(`func`): (...`args`) => `any`

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `func` | `any` | promise函数 |

## 返回值类型

`Function`

[err,result] err 为错误信息，result 为结果

### 参数

| 参数名 | 类型 |
| :------ | :------ |
| ...`args` | `any` |

### 返回值类型

`any`

## 示例

```ts
const [err,result]=await tryIt(apis.getUserInfo)(userId)
```

## 查看源码

[modules/async/index.ts:29](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/async/index.ts#L29)

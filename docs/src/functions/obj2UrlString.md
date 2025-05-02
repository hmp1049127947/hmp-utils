[**hmp-utils**](../README.md) • **Docs**

***

# 函数: obj2UrlString()

### 对象转url参数

> **obj2UrlString**(`obj`): `string`

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `obj` | `any` | 对象 |

## 返回值类型

`string`

'?a=1&b=2'

## 示例

```ts
obj2UrlString({
 a:1,
 b:2
})

//输出 ?a=1&b=2
```

## 查看源码

[modules/url/index.ts:45](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/url/index.ts#L45)

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

[modules/url/index.ts:45](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/url/index.ts#L45)

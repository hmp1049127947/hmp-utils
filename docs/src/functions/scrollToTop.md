[**hmp-utils**](../README.md) • **Docs**

***

# 函数: scrollToTop()

### 滚动到顶部

> **scrollToTop**(`el`, `settings`, `callback`?): `void`

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `el` | `any` | 滚动的元素 |
| `settings` | `any` | 配置项 |
| `callback`? | `any` | 回调 |

## 返回值类型

`void`

## 示例

```ts
 scrollToTop(document.querySelector('#target'), {
   to:20,  // 滚动至距离  
   time:1000, //滚动时间，单位：毫秒
 })
```

## 查看源码

[modules/element/scrollToTop.ts:25](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/element/scrollToTop.ts#L25)

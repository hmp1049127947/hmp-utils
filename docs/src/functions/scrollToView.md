[**hmp-utils**](../README.md) • **Docs**

***

# 函数: scrollToView()

### 滚动到目标元素

> **scrollToView**(`target`, `settings`?, `callback`?): `void`

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `target` | `any` | 目标元素 |
| `settings`? | `null` \| `ISettings` | 配置项 |
| `callback`? | `any` | 回调 |

## 返回值类型

`void`

## 示例

```ts
 scrollToView(document.querySelector('#target'), {
   time:1000,
    align: {
        top:  0 : 0.5, // 视图比例 0 to 1, 默认 0.5 (center)
        topOffset:  80 : 0 // 视图偏移 pixels to offset top alignment
    }
 })
```

## 查看源码

[modules/element/scrollToView.ts:207](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/element/scrollToView.ts#L207)

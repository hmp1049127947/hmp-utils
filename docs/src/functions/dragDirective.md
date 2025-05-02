[**hmp-utils**](../README.md) • **Docs**

***

# 函数: dragDirective()

### 自定义拖动指令

> **dragDirective**(`app`): `void`

## 参数

| 参数名 | 类型 |
| :------ | :------ |
| `app` | `any` |

## 返回值类型

`void`

## 示例

```ts
 main.ts
 import { directive } from 'hmp-utils'
 app.use(directive)
```
```vue
 v-drag="[dragDom,dragHeader]"
//如 `<div v-drag="['.el-dialog', '.el-dialog__header']"></div>`
//dragDom 要拖动的元素，dragHeader 要拖动的 Header 位置
```

## 查看源码

[modules/directive/drag.ts:145](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/directive/drag.ts#L145)

[**hmp-utils1**](../README.md) • **Docs**

***

# 函数: clickOutsideDirective()

### 点击某个元素外部时触发事件

> **clickOutsideDirective**(`app`): `void`

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
`<div v-clickOutside="func"></div>`
```

## 查看源码

[modules/directive/clickOutside.ts:108](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/directive/clickOutside.ts#L108)

[**hmp-utils**](../README.md) • **Docs**

***

# 函数: lazyDirective()

### 自定义图片懒加载指令

> **lazyDirective**(`app`): `void`

## 参数

| 参数名 | 类型 |
| :------ | :------ |
| `app` | `any` |

## 返回值类型

`void`

## 示例

```ts
 main.ts
 import { directive } from 'plsteins-utils'
 app.use(directive)
```
```vue
 <img v-lazy="url链接" alt="" />
```

## 查看源码

modules/directive/lazy.ts:27

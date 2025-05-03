[**hmp-utils1**](../README.md) • **Docs**

***

# 函数: retry()

### 重试函数：允许您运行异步函数并在失败时自动重试。 给定要运行的异步函数、可选的最大重试次数 (r) 以及重试之间的可选延迟毫秒数 (d)，
将调用给定的异步函数，重试 r 次，并在重试之间等待 d 毫秒。

> **retry**(`options`, `func`): `Promise`\<`any`\>

## 参数

| 参数名 | 类型 |
| :------ | :------ |
| `options` | `any` |
| `func` | `any` |

## 返回值类型

`Promise`\<`any`\>

## 示例

```ts
const res = await retry(
    {
      times: 8,
      delay: 1200,
    },
    async () => {
      const { data } = await mattingApi.getSegmentResult({
        requestId,
      })
      if (data.status === 1) {
        return Promise.resolve(data)
      }else{
        return Promise.reject(new Error('正在处理中'))
      }
    },
  )
```

## 查看源码

[modules/async/index.ts:115](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/async/index.ts#L115)

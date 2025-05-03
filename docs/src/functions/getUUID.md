[**hmp-utils1**](../README.md) • **Docs**

***

# 函数: getUUID()

### 获取全局唯一标识符 uuid

> **getUUID**(`len`, `firstU`, `radix`): `string`

本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85

## 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `len` | `number` | `32` | uuid的长度 默认为32 |
| `firstU` | `boolean` | `true` | 将返回的首字母置为"u" |
| `radix` | `number` | `0` | 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制 |

## 返回值类型

`string`

String

## 查看源码

[modules/random/uuid.ts:11](https://github.com/hmp1049127947/hmp-utils/blob/dee7627dd7f5e043cd0494e8f8fdc05ccdb65423/src/modules/random/uuid.ts#L11)

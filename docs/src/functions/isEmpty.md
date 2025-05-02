[**hmp-utils**](../README.md) • **Docs**

***

# 函数: isEmpty()

### 判断数据是不是为空

> **isEmpty**\<`T`\>(`val`): `val is T`

## 类型参数

| 类型参数 | Value |
| :------ | :------ |
| `T` | `unknown` |

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `val` | `T` | 要判断的数据 |

## 返回值类型

`val is T`

boolean

## Description

当val为数字时，判断的是0和Number.isNaN

## 查看源码

modules/is/index.ts:57

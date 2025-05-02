[**hmp-utils**](../README.md) • **Docs**

***

# 类: AesCrypto

## 方法名称

aes加密解密工具,key由外部传入，可做二次封装

## 示例

```ts
const aesCrypto = new AesCrypto({
  key: '0CoJUm6Qyw8W8jud',
});
//加密
const encrypted = aesCrypto.encrypt('哈哈哈哈');
//解密
console.log(aesCrypto.decrypt(encrypted)); // 哈哈哈哈
```

## Constructors

### new AesCrypto()

> **new AesCrypto**(`opt`): [`AesCrypto`](AesCrypto.md)

#### 参数

| 参数名 | 类型 |
| :------ | :------ |
| `opt` | [`EncryptionParams`](../interfaces/EncryptionParams.md) |

#### 返回值类型

[`AesCrypto`](AesCrypto.md)

#### 查看源码

[modules/crypto/index.ts:35](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/crypto/index.ts#L35)

## Properties

### iv

> `private` **iv**: `any`

#### 查看源码

[modules/crypto/index.ts:33](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/crypto/index.ts#L33)

***

### key

> `private` **key**: `any`

#### 查看源码

[modules/crypto/index.ts:32](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/crypto/index.ts#L32)

## Accessors

### getOptions

> `get` `private` **getOptions**(): `object`

#### 返回值类型

`object`

| Member | 类型 | Value |
| :------ | :------ | :------ |
| `iv` | `any` | ... |
| `mode` | `BlockCipherMode` | ECB |
| `padding` | `Padding` | pkcs7 |

#### 查看源码

[modules/crypto/index.ts:48](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/crypto/index.ts#L48)

## Methods

### decrypt()

> **decrypt**(`data`): `any`

#### 参数

| 参数名 | 类型 |
| :------ | :------ |
| `data` | `any` |

#### 返回值类型

`any`

#### 查看源码

[modules/crypto/index.ts:66](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/crypto/index.ts#L66)

***

### encrypt()

> **encrypt**(`data`): `string` \| `object`

#### 参数

| 参数名 | 类型 |
| :------ | :------ |
| `data` | `string` \| `object` |

#### 返回值类型

`string` \| `object`

#### 查看源码

[modules/crypto/index.ts:56](https://github.com/hmp1049127947/hmp-utils/blob/4a6ef6c09762a1cd3b8d7a3366d8664e5e49db4c/src/modules/crypto/index.ts#L56)

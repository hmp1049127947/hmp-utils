import aes from 'crypto-js/aes';
import { parse } from 'crypto-js/enc-utf8';
import pkcs7 from 'crypto-js/pad-pkcs7';
import ECB from 'crypto-js/mode-ecb';
import md5 from 'crypto-js/md5';
import UTF8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import { isJSON } from '../is/index';



export interface EncryptionParams {
  key: string;
  iv?: string;
}

/**
 * @name aes加密解密工具,key由外部传入，可做二次封装
 * @group 加解密
 * @example
 * ```ts
 * const aesCrypto = new AesCrypto({
 *   key: '0CoJUm6Qyw8W8jud',
 * });
 * //加密
 * const encrypted = aesCrypto.encrypt('哈哈哈哈');
 * //解密
 * console.log(aesCrypto.decrypt(encrypted)); // 哈哈哈哈
 * ```
 */
export class AesCrypto {
  private key;
  private iv;

  constructor(opt: EncryptionParams) {
    const { key, iv } = opt;
    if (!key) {
      throw new Error('key must be required');    
    }
    this.key = parse(key);
    if (iv) {
      this.iv = parse(iv);
    }else{
      this.iv = this.key;
    }
  }

  private get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv,
    };
  }

  encrypt(data: string | object) {
    try {
      const plaintext = typeof data === 'object' ? JSON.stringify(data) : data
      return aes.encrypt(plaintext, this.key || '', this.getOptions).toString();
    }catch(error) {
      console.error('加密失败:', error)
      return data;
    }
  }

  decrypt(data: any) :any {
    try {
      const result= aes.decrypt(data, this.key || '', this.getOptions).toString(UTF8);
      return isJSON(result) ? JSON.parse(result) : result
    }catch(error) {
      console.error('解密失败:', error)
      return data;
    }
  }
}

/**
 * @name base64 编码
 * @group 加解密
 * @param cipherText 需要编码的文本
 * @example
 * ```ts
 * base64Encode('哈哈哈哈)
 * ```
 */
export function base64Encode(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64);
}

/**
 * @name base64 解码
 * @group 加解密
 * @param cipherText 需要解码的文本
 * @example
 * ```ts
 * base64Decode('哈哈哈哈)
 * ```
 */
export function base64Decode(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8);
}

/**
 * @name MD5 加密
 * @group 加解密
 * @param cipherText 需要MD5加密的文本
 * @example
 * ```ts
 * md5Encrypt('哈哈哈哈)
 * ```
 */
export function md5Encrypt(cipherText: string) {
  return md5(cipherText).toString();
}

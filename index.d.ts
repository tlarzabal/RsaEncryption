import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Rsa Encryption
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { RsaEncryption } from '@ionic-native/rsa-encryption';
 *
 *
 * constructor(private rsaEncryption: RsaEncryption) { }
 *
 * ...
 *
 *
 * this.rsaEncryption.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class RsaEncryptionOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    encryptString(arg1: string): Promise<any>;
}

export declare const RsaEncryption: RsaEncryptionOriginal;
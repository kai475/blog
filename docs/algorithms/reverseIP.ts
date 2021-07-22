/**
 * reverse an IP addr - from ByteDance
 * @param {string} ip
 * example: ip = 192.168.1.1 return 1.1.168.192
 */

const reverseIP = (ip: string) => ip.split('.').reverse().join('.');

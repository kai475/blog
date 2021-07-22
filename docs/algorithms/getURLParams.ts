/**
 * getUrlParam - nowcoder.com
 * if no sKey, return paramsObject or {};
 * if sKey, return paramsObject[sKey] or '';
 * if paramsObject[sKey] has multiple value, return [...values].
 */

function getUrlParam(sUrl: string, sKey: string) {
  const url = new URL(sUrl);
  if (!url.search) {
    if (!sKey) return {};
    if (sKey) return '';
  }
  const paramsArray = url.search.slice(1).split('&');
  let params = {};
  paramsArray.forEach((param) => {
    const [key, value] = param.split('=');
    if (params[key]) {
      params[key] = [].concat(params[key], value);
    } else {
      params[key] = value;
    }
  });
  if (!sKey) return params;
  return params[sKey] || '';
}
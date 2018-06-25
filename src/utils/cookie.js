import Cookie from 'js-cookie';

/**
 *  存入 cookie
 * @param {*} tokenKey 存入的 key
 * @param {*} tokenValue 存入的 value
 * @param {*} minute 存入的失效时间， 单位为分钟，默认失效时间为 30 分钟
 */
export const set = (tokenKey, tokenValue, minute = 30) =>
  Cookie.set(tokenKey, tokenValue, { expires: (minute / 24 / 60) });

/**
 * 获取 cookie 里面的 value
 * @param {*} tokenKey 存入的 key
 */
export const get = tokenKey => Cookie.get(tokenKey);

/**
 * 移除 cookie 里面的值
 * @param {*} tokenKey 存入的 key
 */
export const remove = tokenKey => Cookie.remove(tokenKey);

export default {
  set,
  get,
  remove,
};

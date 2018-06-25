export const set = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
export const get = key => JSON.parse(sessionStorage.getItem(key));
export const remove = key => sessionStorage.removeItem(key);
export const clear = () => sessionStorage.clear();

export default {
  set,
  get,
  remove,
  clear,
};

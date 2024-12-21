const getLocalStorage = (key, defaultVal) => {
  const item = localStorage.getItem(key);
  return item !== null ? JSON.parse(item) : defaultVal;
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getLocalStorage, setLocalStorage };

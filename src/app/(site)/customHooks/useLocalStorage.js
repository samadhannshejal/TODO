export const useLocalStorage = (key) => {
  const getItem = () => {
    const response = localStorage.getItem(key);
  
    const result = response ? JSON.parse(response) : [];
    return result;
  };
  const setItem = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  return {
    getItem,
    setItem,
  };
};

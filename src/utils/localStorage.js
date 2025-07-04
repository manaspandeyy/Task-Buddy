const USERNAME_KEY = 'username';

export const saveUsername = (username) => {
  localStorage.setItem(USERNAME_KEY, username);
};

export const getUsername = () => {
  return localStorage.getItem(USERNAME_KEY);
};

export const clearUsername = () => {
  localStorage.removeItem(USERNAME_KEY);
};

export const getTasks = () => {
  const user = getUsername();
  return JSON.parse(localStorage.getItem(`tasks_${user}`)) || [];
};

export const saveTasks = (tasks) => {
  const user = getUsername();
  localStorage.setItem(`tasks_${user}`, JSON.stringify(tasks));
};

export const newArray = length => Array.from(Array(length).keys());
export const reverseString = string =>
  string
    .split("")
    .reverse()
    .join("");

export const encodeToken = payload => {
  const { data, salt = 10 } = payload;
  let hash = reverseString(btoa(JSON.stringify(data)));

  newArray(salt).forEach(index => {
    hash = btoa(hash);
  });
  const secret = {
    hash,
    salt
  };
  const token = btoa(JSON.stringify(secret));

  return token;
};
export const decodeToken = token => {
  if (!token) return;

  let { hash, salt } = JSON.parse(atob(token));

  newArray(salt).forEach(index => {
    hash = atob(hash);
  });

  const data = JSON.parse(atob(reverseString(hash)));

  return data;
};

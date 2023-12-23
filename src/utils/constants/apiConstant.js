export const HTTP_TYPE = {
  POST: { key: "post" },
  GET: { key: "get" },
  DELETE: { key: "delete" },
  PUT: { key: "put" },
};

export const API_PATH = {
  SIGN_IN: {
    path: "users/signIn",
  },
};

export const apiPathReturn = () => {
  let result = {};
  let keys = Object.keys(API_PATH);

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = {
      path: API_PATH[keys[i]].path,
    };
  }

  return result;
};

export const ACTIONS = {
  GET_TOKEN: 'GET_TOKEN',
};

export const getToken = (token) => ({
  type: ACTIONS.GET_TOKEN,
  token,
});

// export const getImage = (image) => ({
//   type: 'IMAGE', image,
// });

export const editUser = (user) => {
  return {
      type: 'EDIT_USER',
      payload: user
  };
};
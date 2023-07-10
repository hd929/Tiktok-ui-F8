import * as request from '~/utils/httpRequest';

export const add = async (data) => {
  try {
    const result = await request.post('users', data);

    return result.data.Result;
  } catch (error) {
    console.log(error);
  }
};

export const suggested = async (followed, amounts) => {
  try {
    const result = await request.get('users/suggested', {
      params: {
        amounts: amounts,
        followed: followed,
      },
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

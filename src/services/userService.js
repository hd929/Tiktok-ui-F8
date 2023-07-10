import * as request from '~/utils/httpRequest';

export const add = async (data) => {
  try {
    const result = await request.post('users', data);
    console.log(data);

    return result.data.Result;
  } catch (error) {
    console.log(error);
  }
};

export const suggested = async (followed) => {
  try {
    const result = await request.get('users/suggested', {
      params: {
        amounts: 9,
        followed: followed,
      },
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (id, followed) => {
  try {
    const result = await request.put('users', {
      id: id,
      followed: followed ? 1 : 0,
    });

    return result.data.Result;
  } catch (error) {
    console.log(error);
  }
};

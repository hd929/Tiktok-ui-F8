import * as request from '~/utils/httpRequest';

export const add = async (data) => {
  try {
    const result = await request.post('users', data);

    return result.data.Result;
  } catch (error) {
    console.log(error);
  }
};

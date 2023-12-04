// postThunk.ts
import { AppThunk } from "../store";
import { startLoading, postDataSuccess, postDataFailure } from "../reducers/postJsonSlice";
import axios from "axios";

const endpointUrl = 'https://jsonplaceholder.typicode.com/posts';

export const postJsonData = (requestData: any): AppThunk => async (dispatch) => {
  try {
    dispatch(startLoading());

    const response = await axios.post(endpointUrl, requestData, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    dispatch(postDataSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(postDataFailure(error.response?.data || 'An error occurred'));
    } else {
      dispatch(postDataFailure('An unexpected error occurred'));
    }
  }
};
export const getpostJsonData = (): AppThunk => async (dispatch) => {
    try {
      dispatch(startLoading());
  
      const response = await axios.get(endpointUrl, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
  
      dispatch(postDataSuccess(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(postDataFailure(error.response?.data || 'An error occurred'));
      } else {
        dispatch(postDataFailure('An unexpected error occurred'));
      }
    }
  };
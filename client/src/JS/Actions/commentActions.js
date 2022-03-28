import axios from "axios";
import {
  GET_COMMENT_LOAD,
  GET_COMMENT_SUCESS,
  GET_COMMENT_FAIL,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_SUCESS,
} from "../ActionTypes/CommentTypes";

export const getComment = (id) => async (dispatch) => {
  dispatch({ type: GET_COMMENT_LOAD });
  try {
    let result = await axios.get(`/api/comment/${id}`);
    dispatch({
      type: GET_COMMENT_SUCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({ type: GET_COMMENT_FAIL, payload: error.response.data });
  }
};
export const AddComment = (id, newComment) => async (dispatch) => {
  try {
    let result = await axios.post(`/api/comment/${id}`, newComment);
    dispatch({
      type: ADD_COMMENT_SUCESS,
      payload: result.data,
    });
    dispatch(getComment(id));
  } catch (error) {
    dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data });
  }
};

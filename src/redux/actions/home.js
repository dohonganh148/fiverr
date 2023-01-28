import { getJobs } from "../../services/home";
import ACTION_TYPE from "../type";
export const getJobList = (data) => async (dispatch) => {
  let res = await getJobs(data);
  dispatch({
    type: ACTION_TYPE.GET_JOBS,
    payload: res,
  });
};

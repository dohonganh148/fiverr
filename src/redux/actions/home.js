import { getJobs, getJobsByType, getTypes } from "../../services/home";
import ACTION_TYPE from "../type";
export const getJobList = (data, index) => async (dispatch) => {
  let res = await getJobs(data, index);
  dispatch({
    type: ACTION_TYPE.GET_JOBS,
    payload: res,
  });
};
export const getJobTypes = () => async (dispatch) => {
  let res = await getTypes();
  dispatch({
    type: ACTION_TYPE.GET_JOB_TYPES,
    payload: res,
  });
};
export const getJobListByType = (data, index) => async (dispatch) => {
  let res = await getJobsByType(data, index);
  dispatch({
    type: ACTION_TYPE.GET_JOBS_BY_TYPE,
    payload: res,
  });
};

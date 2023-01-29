import ACTION_TYPE from "../type";
const initialState = {
  jobs: [],
  jobTypes: [],
};
const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.GET_JOBS:
      return {
        ...state,
        jobs: payload,
      };
    case ACTION_TYPE.GET_JOB_TYPES:
      return {
        ...state,
        jobTypes: payload,
      };
    default:
      return { ...state };
  }
};

export default homeReducer;

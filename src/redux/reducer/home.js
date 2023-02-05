import ACTION_TYPE from "../type";
const initialState = {
  jobs: [],
  jobTypes: [],
  profile: {},
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
    case ACTION_TYPE.GET_JOBS_BY_TYPE:
      return {
        ...state,
        jobs: payload,
      };
    case ACTION_TYPE.GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case ACTION_TYPE.UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case ACTION_TYPE.LOG_OUT:
      return {
        ...state,
        profile: {},
      };
    default:
      return { ...state };
  }
};

export default homeReducer;

import requester from "./api";
import apiPath from "./apiPath";
export const login = async (params) => {
  let res = await requester.post(`${apiPath.LOGIN}`, params);
  if (res.data) {
    return res.data;
  }
};
export const signup = async (params) => {
  let res = await requester.post(`${apiPath.SIGN_UP}`, params);
  if (res.data) {
    return res.data;
  }
};
export const getUser = async (id) => {
  let res = await requester.get(`${apiPath.GET_USER}/${id}`);
  if (res.data) {
    return res.data.content;
  }
};
export const updateUser = async (params, id) => {
  let res = await requester.put(`${apiPath.GET_USER}/${id}`, params);
  if (res.data) {
    return res.data.content;
  }
};
export const uploadAvatar = async (params) => {
  let res = await requester.post(`${apiPath.GET_USER}/upload-avatar`, params);
  if (res.data) {
    return res.data.content;
  }
};

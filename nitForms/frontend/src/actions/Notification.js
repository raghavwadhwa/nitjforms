import axios from "axios";
import { POST_NOTIFICATION, GET_NOTIFICATION } from "./types";
import { createMessage, returnErrors } from "./Messages";
import { getResponse, clearResponse, getMultipleResponse } from "./Response";

export const getNotification = (username) => (dispatch) => {
  axios
    .get("/userNotifications")
    .then((res) => {
      var response = res.data.filter((notify) => notify.reciever === username);
      dispatch({
        type: GET_NOTIFICATION,
        payload: response,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getDirectorNotification = (username) => (dispatch) => {
  axios
    .get("/userNotifications")
    .then((res) => {
      dispatch(clearResponse());
      res.data.map((notify) => {
        if (notify.reciever === username) {
          dispatch(
            getMultipleResponse(
              notify.formName,
              notify.acceptedResponseID,
              notify.linkToPage
            )
          );
        }
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const postNotification = (quest) => (dispatch) => {
  axios
    .post("/userNotifications/", quest)
    .then((res) => {
      dispatch({ type: POST_NOTIFICATION, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

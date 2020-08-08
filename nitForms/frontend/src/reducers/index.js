import { combineReducers } from "redux";
import Forms from "./CreateForm";
import FormName from "./FormName";
import Errors from "./Errors";
import Auth from "./Auth";
import Messages from "./Messages";
import AcceptedResponse from "./AcceptedResponse";
import SharedUsers from "./Common";
import NotingTemplate from "./NotingTemplate";

export default combineReducers({
  Forms: Forms,
  FormName: FormName,
  Auth: Auth,
  Errors: Errors,
  Messages: Messages,
  AcceptedResponse: AcceptedResponse,
  SharedUsers: SharedUsers,
  NotingTemplate: NotingTemplate,
});

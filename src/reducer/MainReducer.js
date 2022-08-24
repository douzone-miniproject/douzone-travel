import {combineReducers} from "redux";
import {MemberReducer} from "./MemberReducer";
import {SessionReducer} from "./SessionReducer";

const MainReducer = combineReducers({
    MemberReducer,
    SessionReducer
})

export default MainReducer
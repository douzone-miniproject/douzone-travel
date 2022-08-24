import {combineReducers} from "redux";
import {MemberReducer} from "./MemberReducer";
import {SessionReducer} from "./SessionReducer";

const RouteReducer = combineReducers({
    MemberReducer,
    SessionReducer
})

export default RouteReducer
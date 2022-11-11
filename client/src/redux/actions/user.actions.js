import UserTypes from "../types/user.types";
import * as api from "../../api/user";

export const setCurrentUser = (user) => ({
    type: UserTypes.SET_USER,
    payload: user
})
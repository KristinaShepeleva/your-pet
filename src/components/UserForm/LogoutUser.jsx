import { LogoutIcon } from "helpers/icons"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authOperations";

export const LogoutUser = () => {
    const dispatch = useDispatch();
    return (
           <button type="button" onClick={() => dispatch(logout())}>
        <LogoutIcon /> Logout
      </button>
    )
}
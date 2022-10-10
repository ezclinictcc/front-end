import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../store/redux/user/userSlice";

export function useUsername() {
  const userName = useSelector(selectLoggedUser);
  return { userName };
}

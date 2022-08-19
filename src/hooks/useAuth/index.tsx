import { useAppSelector } from "../useAppSelector";

export const useAuth = () => {
  let authenticated = false;
  const user = useAppSelector((state) => state.authReducer);

  if (Date.now() > user.expiry) {
    return { authenticated };
  }

  return { authenticated: user.isAuthenticated };
};


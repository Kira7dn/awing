import { useEffect, useReducer } from "react";
import { initialState, subReducer } from "./reducer";
import Context from "./Context";
// import { IState, IThemeAction, UserActions } from "./interface";

interface ProviderProps {
  children: React.ReactNode;
}
// const combinedReducers = (
//   { user, theme }: IState,
//   action: UserActions | IThemeAction
// ) => ({
//   user: userReducer(user, action),
//   theme: themeReducer(theme, action),
// });
export const APP_STATE_NAME = "testing";

function StoreProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(subReducer, initialState);
  useEffect(() => {
    localStorage.setItem(APP_STATE_NAME, JSON.stringify(state));
  }, [state]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
export default StoreProvider;

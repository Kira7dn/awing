import { createContext, Dispatch } from "react";
import { initialState } from "./reducer";
import { Campaign, StateActions } from "./interface";

const AppContext = createContext<{
  state: Campaign;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });
export default AppContext;

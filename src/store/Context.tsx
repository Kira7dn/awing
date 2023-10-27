import { createContext, Dispatch } from "react";
import { initialState } from "./reducer";
import { ICampaign, StateActions } from "./interface";

const AppContext = createContext<{
  state: ICampaign;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });
export default AppContext;

import { createContext, Dispatch } from "react";
import { initialState } from "./reducer";
import { StateActions, SubCampaign } from "./interface";

const AppContext = createContext<{
  state: SubCampaign[];
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });
export default AppContext;

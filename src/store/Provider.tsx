import { useEffect, useReducer } from "react";
import {
  infoReducer,
  initialState,
  subReducer,
  validateReducer,
} from "./reducer";
import Context from "./Context";
import { Campaign, CampaignActions, SubCampaignActions } from "./interface";

interface ProviderProps {
  children: React.ReactNode;
}

export const APP_STATE_NAME = "testing";

function StoreProvider({ children }: ProviderProps) {
  const combinedReducers = (
    { information, subCampaigns, isValid }: Campaign,
    action: CampaignActions | SubCampaignActions
  ) => ({
    information: infoReducer(information, action),
    subCampaigns: subReducer(subCampaigns, action),
    isValid: validateReducer(isValid, action),
  });

  const [state, dispatch] = useReducer(combinedReducers, initialState);
  useEffect(() => {
    localStorage.setItem(APP_STATE_NAME, JSON.stringify(state));
  }, [state]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
export default StoreProvider;

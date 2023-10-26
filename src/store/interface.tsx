/**
 * interfaces.tsx
 */
import {
  ADD_ADS,
  ADD_SUB_CAMPAIGN,
  DELETE_ADS,
  SET_CURRENT_SUB,
  SET_IS_VALID,
  UPDATE_ADS,
  UPDATE_CAMPAIGN,
  UPDATE_SUB_CAMPAIGN,
} from "./action";

export type Campaign = {
  information: Information;
  subCampaigns: ISubCampaign[];
  status: Status;
};
export type Status = {
  isValid: boolean;
  currentSub: number;
};
export type Information = {
  name: string;
  describe?: string;
};

export type ISubCampaign = {
  id: number;
  name: string;
  status: boolean;
  ads: Ads[];
};

export type Ads = {
  id: number;
  name: string;
  quantity: number;
};

export type IAdsAdd = {
  type: typeof ADD_ADS;
  payload: {
    subCampaignId: number;
    ads: Ads;
  };
};
export type IAdsUpdate = {
  type: typeof UPDATE_ADS;
  payload: {
    subCampaignId: number;
    ads: Ads;
  };
};
export type IAdsDelete = {
  type: typeof DELETE_ADS;
  payload: {
    subCampaignId: number;
    ads: {
      id: number;
    };
  };
};
export type AdsActions = IAdsAdd | IAdsUpdate | IAdsDelete;

export type ISubAdd = {
  type: typeof ADD_SUB_CAMPAIGN;
  payload: ISubCampaign;
};
export type ISubUpdate = {
  type: typeof UPDATE_SUB_CAMPAIGN;
  payload: ISubCampaign;
};

export type SubCampaignActions = ISubAdd | ISubUpdate;

export type InfoAction = {
  type: typeof UPDATE_CAMPAIGN;
  payload: Information;
};

export type ICampaignValidate = {
  type: typeof SET_IS_VALID;
  payload: boolean;
};

export type ISubCurrent = {
  type: typeof SET_CURRENT_SUB;
  payload: number;
};

export type StatusAction = ICampaignValidate | ISubCurrent;

export type StateActions = SubCampaignActions | InfoAction | StatusAction;

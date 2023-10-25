import {
  ADD_ADS,
  ADD_SUB_CAMPAIGN,
  DELETE_ADS,
  SET_IS_VALID,
  UPDATE_ADS,
  UPDATE_CAMPAIGN,
  UPDATE_SUB_CAMPAIGN,
} from "./action";

export type Campaign = {
  information: Information;
  subCampaigns: SubCampaign[];
  isValid: boolean;
};
export type Information = {
  name: string;
  describe?: string;
};
export type SubCampaign = {
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
export const initialCampaign: Campaign = {
  information: {
    name: "",
    describe: "",
  },
  subCampaigns: [
    {
      id: 1,
      name: "Chiến dịch con 1",
      status: true,
      ads: [
        {
          id: 1,
          name: "Quảng cáo 1",
          quantity: 0,
        },
      ],
    },
  ],
  isValid: true,
};

export type CampaignAction = {
  type: string;
  payload: Information;
};

export type SubCampaignAction = {
  type: string;
  payload: SubCampaign;
};
export type AdsAction = {
  type: string;
  payload: {
    subCampaignId: number;
    ads: Ads;
  };
};

export type StateAction = CampaignAction | SubCampaignAction | AdsAction;
// Create reducer for update states
export const campaignReducer = (state: Campaign, action: StateAction) => {
  switch (action.type) {
    case UPDATE_CAMPAIGN:
      return {
        ...state,
        information: {
          name: action.payload.name,
          describe: action.payload.describe,
        },
      };
    case ADD_SUB_CAMPAIGN:
      return {
        ...state,
        subCampaigns: [...state.subCampaigns, action.payload],
      };
    case UPDATE_SUB_CAMPAIGN:
      return {
        ...state,
        subCampaigns: state.subCampaigns.map((subCampaign) => {
          if (subCampaign.id === action.payload.id) {
            return {
              ...subCampaign,
              status: action.payload.status,
              name: action.payload.name,
            };
          }
          return subCampaign;
        }),
      };
    case ADD_ADS:
      return {
        ...state,
        subCampaigns: state.subCampaigns.map((subCampaign) => {
          if (subCampaign.id === action.payload.subCampaignId) {
            return {
              ...subCampaign,
              ads: [...subCampaign.ads, action.payload.ads],
            };
          }
          return subCampaign;
        }),
      };
    case UPDATE_ADS:
      return {
        ...state,
        subCampaigns: state.subCampaigns.map((subCampaign) => {
          if (subCampaign.id === action.payload.subCampaignId) {
            return {
              ...subCampaign,
              ads: subCampaign.ads.map((ads) => {
                if (ads.id === action.payload.ads.id) {
                  return {
                    ...ads,
                    name: action.payload.ads.name,
                    quantity: action.payload.ads.quantity,
                  };
                }
                return ads;
              }),
            };
          }
          return subCampaign;
        }),
      };

    case DELETE_ADS:
      return {
        ...state,
        subCampaigns: state.subCampaigns.map((subCampaign) => {
          if (subCampaign.id === action.payload.subCampaignId) {
            return {
              ...subCampaign,
              ads: subCampaign.ads.filter(
                (ads) => ads.id !== action.payload.ads.id
              ),
            };
          }
          return subCampaign;
        }),
      };
    case SET_IS_VALID:
      return {
        ...state,
        isValid: action.payload,
      };
    default:
      return state;
  }
};

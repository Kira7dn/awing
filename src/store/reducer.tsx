import { APP_STATE_NAME } from "./Provider";
import {
  // ADD_ADS,
  ADD_SUB_CAMPAIGN,
  SET_CURRENT_SUB,
  // DELETE_ADS,
  SET_IS_VALID,
  // UPDATE_ADS,
  UPDATE_INFOMATION,
  UPDATE_SUB_CAMPAIGN,
} from "./action";
import {
  Campaign,
  Information,
  StateActions,
  ISubCampaign,
  Status,
} from "./interface";

export const initialState: Campaign = JSON.parse(
  localStorage.getItem(APP_STATE_NAME)!
)
  ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  : {
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
      status: {
        isValid: true,
        currentSub: 1,
      },
    };

export const subReducer = (subs: ISubCampaign[], action: StateActions) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SUB_CAMPAIGN:
      return [...subs, payload];
    case UPDATE_SUB_CAMPAIGN:
      return subs.map((subCampaign) => {
        if (subCampaign.id === payload.id) {
          return payload;
        }
        return subCampaign;
      });
    // case ADD_ADS:
    //   return subs.map((subCampaign) => {
    //     if (subCampaign.id === payload.subCampaignId) {
    //       return {
    //         ...subCampaign,
    //         ads: [...subCampaign.ads, payload.ads],
    //       };
    //     }
    //     return subCampaign;
    //   });
    // case UPDATE_ADS:
    //   return subs.map((subCampaign) => {
    //     if (subCampaign.id === payload.subCampaignId) {
    //       return {
    //         ...subCampaign,
    //         ads: subCampaign.ads.map((ads) => {
    //           if (ads.id === payload.ads.id) {
    //             return {
    //               ...ads,
    //               name: payload.ads.name,
    //               quantity: payload.ads.quantity,
    //             };
    //           }
    //           return ads;
    //         }),
    //       };
    //     }
    //     return subCampaign;
    //   });
    // case DELETE_ADS:
    //   return subs.map((subCampaign) => {
    //     if (subCampaign.id === payload.subCampaignId) {
    //       return {
    //         ...subCampaign,
    //         ads: subCampaign.ads.filter((ads) => ads.id !== payload.ads.id),
    //       };
    //     }
    //     return subCampaign;
    //   });
    default:
      return subs;
  }
};

export const infoReducer = (info: Information, action: StateActions) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_INFOMATION:
      return payload;
    default:
      return info;
  }
};

export const validateReducer = (status: Status, action: StateActions) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_VALID:
      return { ...status, isValid: payload };
    case SET_CURRENT_SUB:
      return { ...status, currentSub: payload };
    default:
      return status;
  }
};

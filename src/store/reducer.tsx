import { APP_STATE_NAME } from "./Provider";
import {
  ADD_SUB_CAMPAIGN,
  SET_CURRENT_SUB,
  SET_IS_VALID,
  UPDATE_INFOMATION,
  UPDATE_SUB_CAMPAIGN,
} from "./action";
import {
  ICampaign,
  IInformation,
  StateActions,
  ISubCampaign,
  Status,
} from "./interface";

export const initialState: ICampaign = JSON.parse(
  localStorage.getItem(APP_STATE_NAME)!
)
  ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  : {
      information: {
        name: "",
        describe: "",
        error: "Vui lòng điền thông tin.",
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
              error_name: null,
              error_quantity: "Vui lòng điền thông tin.",
            },
          ],
          error_name: null,
          error_ads: "Lỗi Quảng cáo",
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
    default:
      return subs;
  }
};

export const infoReducer = (info: IInformation, action: StateActions) => {
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

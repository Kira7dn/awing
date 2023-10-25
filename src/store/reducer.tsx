import { APP_STATE_NAME } from "./Provider";
import { UPDATE_SUB } from "./action";
import { StateActions, SubCampaign } from "./interface";

export const initialState: SubCampaign[] = JSON.parse(
  localStorage.getItem(APP_STATE_NAME)!
)
  ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!)
  : [
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
    ];

// export const themeReducer = (theme: ITheme, action: StateActions) => {
//   switch (action.type) {
//     case THEME:
//       return { ...theme, ...action.payload };
//     default:
//       return theme;
//   }
// };

export const subReducer = (subs: SubCampaign[], action: StateActions) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SUB:
      return { ...subs, ...payload };
    default:
      return subs;
  }
};
// export { initState };

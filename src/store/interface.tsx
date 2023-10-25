/**
 * interfaces.tsx
 */
import { UPDATE_ADS, UPDATE_SUB } from "./action";

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
export type AdsAction = {
  type: typeof UPDATE_ADS;
  payload: Ads;
};
export type SubCampaignAction = {
  type: typeof UPDATE_SUB;
  payload: SubCampaign;
};

// type IssuesAction = {
//   type: string;
//   payload: Payload;
// };

// export interface IUser {
//   username: string;
//   active: boolean;
// }
// export interface ITheme {
//   dark: boolean;
// }

// export interface IState {
//   user: IUser;
//   theme: ITheme;
// }

// export interface IUserLogin {
//   type: typeof LOGIN;
//   payload: IUser;
// }

// export interface IUserLogout {
//   type: typeof LOGOUT;
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   payload: {};
// }

// export interface IThemeAction {
//   type: typeof THEME;
//   payload: { toggle: boolean };
// }

// export type UserActions = IUserLogin | IUserLogout;
export type StateActions = AdsAction | SubCampaignAction;

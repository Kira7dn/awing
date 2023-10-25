export type Campaign = {
  information: Information;
  subCampaigns: [SubCampaign];
};
export type Information = {
  name: string;
  describe?: string;
};
export type SubCampaign = {
  id: number;
  name: string;
  status: boolean;
  ads: [
    {
      id: number;
      name: string;
      quantity: number;
    }
  ];
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
};

type CampaignAction = {
  type: string;
  payload?: Information | SubCampaign;
};

// Create reducer for update states
export const campaignReducer = (
  state: Campaign = initialCampaign,
  action: CampaignAction
) => {
  switch (action.type) {
    case "UPDATE_CAMPAIGN":
      return {
        ...state,
        information: action.payload,
      };
    case "ADD_SUB_CAMPAIGN":
      return {
        ...state,
        subCampaigns: [...state.subCampaigns, action.payload],
      };
    case "UPDATE_SUB_CAMPAIGN_BY_ID":
      return {
        subCampaigns: state.subCampaigns.map((subCampaign) => {
          if (subCampaign.id === action.payload?.id) {
            return action.payload;
          }
          return subCampaign;
        }),
      };
    default:
      return state;
  }
};

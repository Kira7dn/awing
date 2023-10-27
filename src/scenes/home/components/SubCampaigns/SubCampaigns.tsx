import { NoteAdd } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import SubItem from "./SubItem/SubItem";
import { tokens } from "@/theme";
import { useStore } from "@/store/hook";
import SubCampaignCard from "./SubItem/SubCard";
import { ADD_SUB_CAMPAIGN, SET_CURRENT_SUB } from "@/store/action";

const SubCampaigns = () => {
  const { state, dispatch } = useStore();
  const { subCampaigns, status } = state;
  const newSub = {
    id: subCampaigns[subCampaigns.length - 1].id + 1,
    name: `Chiến dịch con ${subCampaigns[subCampaigns.length - 1].id + 1}`,
    status: true,
    ads: [
      {
        id: 1,
        name: "Quảng cáo 1",
        quantity: 0,
      },
    ],
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10px",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            height: "6px",
            backgroundColor: "#F5F5F5",
            overflowY: "hidden",
          },

          "&::-webkit-scrollbar-thumb": {
            "&-webkit-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: "10px",
            backgroundColor: tokens.primary[100],
            overflowX: "auto",
          },
          paddingBottom: "10px",
        }}
      >
        <Box key="add" sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            onClick={() => {
              dispatch({
                type: ADD_SUB_CAMPAIGN,
                payload: newSub,
              });
              dispatch({
                type: SET_CURRENT_SUB,
                payload: newSub.id,
              });
            }}
          >
            <NoteAdd sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        {subCampaigns.map((subCampaign) => {
          return (
            <Box
              key={subCampaign.id}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                dispatch({ type: SET_CURRENT_SUB, payload: subCampaign.id })
              }
            >
              <SubCampaignCard
                subCampaign={subCampaign}
                isSelected={subCampaign.id === status.currentSub}
              />
            </Box>
          );
        })}
      </Box>
      <SubItem />
    </Box>
  );
};

export default SubCampaigns;

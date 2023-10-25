import { useState } from "react";
import { NoteAdd } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import SubCampaignCard from "./SubCampaignCard";
import SubItem from "./SubItem";
import { useStore } from "../../../store/hook";
import { ISubCampaign } from "../../../store/interface";

const SubCampaign = ({ subCampaigns }: { subCampaigns: ISubCampaign[] }) => {
  const { state } = useStore();
  const [subCampaignList, setSubCampaignList] = useState(subCampaigns);
  const [currentSub, setCurrentSub] = useState(subCampaigns[0]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10px",
          overflowY: "hidden",
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          paddingBottom: "10px",
        }}
      >
        <Box key="add" sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large">
            <NoteAdd sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        {subCampaignList.map((subCampaign) => {
          return (
            <Box
              key={subCampaign.id}
              sx={{ cursor: "pointer" }}
              onClick={() => setCurrentSub(subCampaign)}
            >
              <SubCampaignCard
                subCampaign={subCampaign}
                isSelected={currentSub.id === subCampaign.id}
              />
            </Box>
          );
        })}
      </Box>
      <SubItem subCampaign={state.subCampaigns[0]} />
    </Box>
  );
};

export default SubCampaign;

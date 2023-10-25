import { SubCampaign } from "../../../store/reducer";
import { useState } from "react";
import SubCampaignItem from "./SubCampaignItem";

const SubCampaigns = (
  { subCampaigns }: { subCampaigns: SubCampaign[] }
) => {
  const [currentSub, setCurrentSub] = useState(subCampaigns[0])
  return (
    <>
      <SubCampaignItem sub={currentSub} />
    </>
  );
};

export default SubCampaigns;

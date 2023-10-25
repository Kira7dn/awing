import SubItem from "./SubItem";
import { useStore } from "../../../store/hook";

const SubCampaign = () => {
  const { state } = useStore();
  return (
    <>
      <SubItem subCampaign={state[0]} />
    </>
  );
};

export default SubCampaign;

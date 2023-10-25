import AdvertiseList from "./AdvertiseList";
import SubInfo from "./SubInfo";

type Props = {
  subCampaign: {
    id: number;
    name: string;
    status: boolean;
    ads: {
      id: number;
      name: string;
      quantity: number;
    }[];
  };
};

function SubItem({ subCampaign }: Props) {
  return (
    <>
      <SubInfo
        id={subCampaign.id}
        nameProps={subCampaign.name}
        statusProps={subCampaign.status}
      />
      <AdvertiseList adsProps={subCampaign.ads} subId={subCampaign.id} />
    </>
  );
}

export default SubItem;

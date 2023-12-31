import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Campaign from "./Information/Information";
import SubCampaign from "./SubCampaigns/SubCampaigns";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "14px", md: "20px" } }}
              >
                THÔNG TIN
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "14px", md: "20px" } }}
              >
                CHIẾN DỊCH CON
              </Typography>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Campaign />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SubCampaign />
      </CustomTabPanel>
    </Box>
  );
}

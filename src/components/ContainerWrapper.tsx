import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
  maxWidth?: string;
  sx?: object;
};

function ContainerWrapper({ children, maxWidth = "1440px", sx }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { maxWidth },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ContainerWrapper;

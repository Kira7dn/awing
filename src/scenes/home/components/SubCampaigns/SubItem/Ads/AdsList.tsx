import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  TableContainer,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { AddCircleOutline, Delete } from "@mui/icons-material";

import { AdsItem } from "./AdsItem";
import { useStore } from "@/store/hook";
import { UPDATE_SUB_CAMPAIGN } from "@/store/action";

function AdsList() {
  const { state, dispatch } = useStore();
  const { subCampaigns, status } = state;
  const subCampaign = subCampaigns.filter((c) => c.id === status.currentSub)[0];
  const ads = subCampaign.ads;

  const [selected, setSelected] = useState<number[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = ads.map((ad) => ad.id);
      setSelected(newSelected);
      setCheckAll(true);
      return;
    }
    setCheckAll(false);
    setSelected([]);
  };
  const handleAdd = () => {
    const newAds = [...ads];
    const index = newAds.length > 0 ? newAds[newAds.length - 1].id : 0;
    newAds.push({
      id: index + 1,
      name: `Quảng cáo ${index + 1}`,
      quantity: 0,
    });
    dispatch({
      type: UPDATE_SUB_CAMPAIGN,
      payload: {
        ...subCampaign,
        ads: newAds,
      },
    });
  };
  const handleDelete = () => {
    const newAds = ads.filter((n) => !selected.includes(n.id));
    dispatch({
      type: UPDATE_SUB_CAMPAIGN,
      payload: {
        ...subCampaign,
        ads: newAds,
        error_ads: newAds.length === 0 ? "Lỗi Quảng cáo" : null,
      },
    });
    setSelected([]);
    setCheckAll(false);
  };

  const handleChangeAds = (event: React.ChangeEvent<HTMLInputElement>) => {
    const error = {
      error_name:
        event.target.name === "name" && event.target.value === ""
          ? "Vui lòng điền thông tin."
          : null,
      error_quantity:
        event.target.name === "quantity" && Number(event.target.value) <= 0
          ? "Vui lòng điền thông tin."
          : null,
    };

    const newAds = subCampaign.ads.map((ad) => {
      if (ad.id === Number(event.target.id)) {
        return {
          ...ad,
          [event.target.name]: event.target.value,
          ...error,
        };
      }
      return ad;
    });
    dispatch({
      type: UPDATE_SUB_CAMPAIGN,
      payload: {
        ...subCampaign,
        ads: newAds,
        error_ads:
          error.error_name || error.error_quantity ? "Lỗi Quảng cáo" : null,
      },
    });
  };
  const handleCheck = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else {
      newSelected = selected.filter((n) => n !== id);
    }
    setSelected(newSelected);
  };
  function isSelected(id: number) {
    return selected.indexOf(id) !== -1;
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", pb: 2, overflow: "hidden" }}>
        <Toolbar
          variant="dense"
          sx={{
            ...(selected.length > 0 && {
              bgcolor: "rgba(0, 0, 0, 0.08)",
            }),
            minHeight: 40,
          }}
        >
          {selected.length > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%", fontSize: "16px" }}
              variant="h4"
            >
              {selected.length} selected
            </Typography>
          ) : (
            <Typography
              sx={{ flex: "1 1 100%", fontSize: "16px", fontWeight: 600 }}
              variant="h4"
              id="tableTitle"
            >
              DANH SÁCH QUẢNG CÁO
            </Typography>
          )}
          {selected.length > 0 ? (
            <Tooltip title="Delete">
              <IconButton
                size={matches ? "large" : "medium"}
                onClick={handleDelete}
              >
                <Delete fontSize="inherit" />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              size={matches ? "large" : "small"}
              onClick={handleAdd}
            >
              <AddCircleOutline />
              <Typography variant="h4">Thêm</Typography>
            </Button>
          )}
        </Toolbar>

        <TableContainer sx={{ maxHeight: { xs: "200px", md: "240" } }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={checkAll}
                    onChange={handleSelectAllClick}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
                  />
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    Tên quảng cáo*
                  </Typography>
                </TableCell>
                <TableCell width="20%" sx={{ minWidth: "120px" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    Số lượng*
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ads.map((ad) => {
                const isItemSelected = isSelected(ad.id);
                return (
                  <AdsItem
                    key={ad.id}
                    row={ad}
                    isItemSelected={isItemSelected}
                    handleCheck={handleCheck}
                    handleChangeAds={handleChangeAds}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default AdsList;

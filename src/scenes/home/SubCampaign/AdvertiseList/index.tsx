import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
} from "@mui/material";
import { AddCircleOutline, Delete } from "@mui/icons-material";
import { useState } from "react";
import { AdsRow } from "./AdsRow";

const adsProps = [
  { id: 1, name: "Quảng cáo 1", quantity: 1 },
  { id: 2, name: "Quảng cáo 2", quantity: 1 },
  { id: 3, name: "Quảng cáo 3", quantity: 1 },
  { id: 4, name: "Quảng cáo 4", quantity: 1 },
];
function AdvertiseList() {
  const [ads, setAds] = useState(adsProps);
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = ads.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleAdd = () => {
    const newAds = [...ads];
    newAds.push({
      id: newAds[newAds.length - 1].id + 1,
      name: `Quảng cáo ${newAds[newAds.length - 1].id + 1}`,
      quantity: 1,
    });
    setAds(newAds);
  };
  const handleDelete = () => {
    const newAds = ads.filter((n) => !selected.includes(n.id));
    setAds(newAds);
    setSelected([]);
  };
  const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  function isSelected(id: number) {
    return selected.indexOf(id) !== -1;
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", pb: 2, overflow: "hidden" }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(selected.length > 0 && {
              bgcolor: "rgba(0, 0, 0, 0.08)",
            }),
          }}
        >
          {selected.length > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%", fontSize: "20px" }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {selected.length} selected
            </Typography>
          ) : (
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h3"
              id="tableTitle"
              component="div"
            >
              DANH SÁCH QUẢNG CÁO
            </Typography>
          )}
          {selected.length > 0 ? (
            <Tooltip title="Delete">
              <IconButton size="large" onClick={handleDelete}>
                <Delete fontSize="inherit" />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              size="large"
              sx={{ display: "flex", gap: 1 }}
              onClick={handleAdd}
            >
              <AddCircleOutline />
              <Typography variant="h4">Thêm</Typography>
            </Button>
          )}
        </Toolbar>

        <TableContainer sx={{ maxHeight: 280 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onChange={handleSelectAllClick}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="h4" sx={{ fontSize: "18px" }}>
                    Tên quảng cáo*
                  </Typography>
                </TableCell>
                <TableCell width="20%">
                  <Typography variant="h4" sx={{ fontSize: "18px" }}>
                    Số lượng*
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ads.map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <AdsRow
                    row={row}
                    isItemSelected={isItemSelected}
                    handleClick={handleClick}
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

export default AdvertiseList;

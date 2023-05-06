import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./loginSlice";

export default function Drawers({ state, setState, toggleDrawer }) {
  function resets() {
    dispatch(logOut());
  }
  const dispatch = useDispatch();
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          to="/dashboard"
          styles={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
            textDecoration: "none",
          })}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/products"
          styles={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
            textDecoration: "none",
          })}
        >
          <ListItem disablePadding>
            {" "}
            <ListItemButton>
              <ListItemText primary="product" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/cart"
          styles={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
            textDecoration: "none",
          })}
        >
          <ListItem disablePadding>
            {" "}
            <ListItemButton>
              <ListItemText primary="cart" />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton href="/" onClick={() => resets()}>
            <ListItemText primary="SignOut" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import React from "react";
import Drawers from "./drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";
const Sidebars = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const user = useSelector((state) => state.cart);
  const users = useSelector((state) => state.login);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <div className="topbar">
        <div className="child1">
          <MenuIcon
            onClick={toggleDrawer("left", true)}
            style={{ position: "relative", left: 20, top: 20 }}
          >
            {" "}
            <button>click</button>{" "}
          </MenuIcon>

          <div className="seconDiv">
            <Link to="/cart">
              <div className="cartIcon">
                <AddShoppingCartIcon
                  style={{ position: "absolute", top: 30, right: 120 }}
                />
                <div className="circle">
                  <p className="counts">{user.totalCount} </p>
                </div>
              </div>
            </Link>
            <div>
              <Avatar
                src="/broken-image.jpg"
                style={{ position: "relative", right: 30, top: 20 }}
              />
              <p className="userName">{users.name}</p>
            </div>
          </div>
        </div>
        <Drawers
          state={state}
          setState={setState}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </>
  );
};

export default Sidebars;

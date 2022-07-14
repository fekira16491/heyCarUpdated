import React from "react";
import Layer3 from "../Images/Layer3.png";
import Layer4 from "../Images/Layer4.png";
import Layer6 from "../Images/Layer6.png";
import Layer7 from "../Images/Layer7.png";

const SideBar = () => {
  return (
    <div className="columnFlex">
      <img
        src={Layer3}
        alt="sideLogo"
        className="sideBarDimension mediumMarginBottom"
      ></img>
      <img
        src={Layer4}
        alt="sideLogo"
        className="sideBarDimension mediumMarginBottom"
      ></img>
      <img
        src={Layer6}
        alt="sideLogo"
        className="sideBarDimension mediumMarginBottom"
      ></img>
      <img
        src={Layer7}
        alt="sideLogo"
        className="sideBarDimension mediumMarginBottom"
      ></img>
    </div>
  );
};
export default SideBar;

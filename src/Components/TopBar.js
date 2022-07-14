import React from "react";
import logo from "../Images/logo.png";
import group from "../Images/group.png";

const TopBar = ({ users }) => {
  let [user, ...restOfUsers] = users || [];
  let firstTwoCharacter = (user?.firstName + " " + user?.lastName)
    .split(" ")
    .map(function (item) {
      return item[0];
    })
    .join("");
  console.log("firstname", firstTwoCharacter);

  return (
    <div className="columnFlex">
      <div className="rowFlex topbarLogoStyle">
        <img src={logo} className="mediumMarginLeft" alt="mainLogo" />
        <img src={group} className="mediumMarginLeft" alt="groupLogo" />
        <div className="rowFlex flexJustifyContentEnd wholeWidth alignItemsCenter">
          <button className="btn ">{firstTwoCharacter}</button>
          <label className="topBarLabel smallMarginLeft">
            {user?.firstName} {user?.lastName}
          </label>
        </div>
      </div>
      <hr className="solid wholeWidth" />
    </div>
  );
};

export default TopBar;

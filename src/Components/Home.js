import React, { useCallback, useEffect, useState } from "react";
import NoDataFound from "./NoDataFound";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import TopSelector from "./TopSelector";
import { fetchUserList } from "./redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectList } from "./redux/action/projectAction";
import { fetchGatewayList } from "./redux/action/gatewayAction";
import { postReportList } from "./redux/action/reportAction";

const Home = () => {
  let dispatch = useDispatch();
  let selectedInput = {};

  //getting users
  const users = useSelector((state) => state?.user);
  let {
    usersList: { data },
  } = users;

  //getting projects
  const projects = useSelector((state) => state?.project);
  //getting projects
  const gateways = useSelector((state) => state?.gateway);
  const report = useSelector((state) => state?.report);

  let { projectList } = projects;
  let { gatewayList } = gateways;

  console.log("projects", projects);
  useEffect(() => {
    dispatch(fetchUserList());
    dispatch(fetchProjectList());
    dispatch(fetchGatewayList());
  }, []);
  return (
    <div
      className="columnFlex "
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
      }}
    >
      <TopBar users={data} />
      <div className="rowFlex mediumMarginLeft topbarLogoStyle  wholeWidth">
        <SideBar />
        <div className="columnFlex smallLineHeight mediumMarginLeft">
          <h1>Reports</h1>
          <h2>Easily generate a report of your transactions</h2>
        </div>
        <TopSelector projectList={projectList} gatewayList={gatewayList} />
      </div>
      <NoDataFound />
      <div
        style={{
          flex: 1,
          marginLeft: "6rem",
        }}
        className="rowFlex mediumMarginLeft alignItemsEnd mediumMarginBottom wholeWidth"
      >
        <h3>Terms&Conditions | Privacy policy</h3>
      </div>
    </div>
  );
};

export default React.memo(Home);

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomSelect from "./CustomSelect";
import { REPORT_INPUT } from "./redux/action/actionType";
import { postReportList } from "../Components/redux/action/reportAction";
const TopSelector = ({ projectList, gatewayList }) => {
  let { data } = projectList;

  let projectNames = data?.map((x) => x.name);
  let gatewaynames = gatewayList?.data?.map((x) => x.name);

  let appendAllProjects = ["All projects", ...(projectNames || [])];
  let appendAllGateways = ["All gateways", ...(gatewaynames || [])];
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedGateway, setSelectedGateway] = useState("");
  //let selectedProject = React.createRef();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  let dispatch = useDispatch();
  console.log("project", selectedProject);
  const formInputsForReport = () => {
    let proId = projectList.data.findIndex((x) => x.name === selectedProject);
    let gatewayId = gatewayList.data.findIndex(
      (x) => x.name === selectedGateway
    );

    let selectedInput = {
      projectId:
        proId === -1 ? selectedProject : projectList.data[proId].projectId,
      gatewayId:
        gatewayId === -1
          ? selectedGateway
          : gatewayList.data[gatewayId].gatewayId,
      from: fromDate,
      to: toDate,
    };
    dispatch(postReportList(selectedInput));
  };
  const handlePassData = (data) => {
    // 👇️ take parameter passed from Child component
    if (appendAllProjects.indexOf(data) !== -1) setSelectedProject(data);
    if (appendAllGateways.indexOf(data) !== -1) setSelectedGateway(data);
  };
  console.log("Project", selectedProject);
  console.log("Gateway", selectedGateway);

  return (
    <div
      style={{ paddingRight: "3rem" }}
      className="rowFlex flexJustifyContentEnd wholeWidth mediumMarginRight"
    >
      <CustomSelect
        description="cars"
        defaultText="Select projects"
        id="project"
        optionsList={appendAllProjects}
        passData={handlePassData}
      ></CustomSelect>
      <CustomSelect
        className="smallMarginLeft"
        description="cars"
        defaultText="Select gateways"
        id="gateway"
        optionsList={appendAllGateways}
        passData={handlePassData}
      ></CustomSelect>
      <input
        style={{ marginLeft: "1rem" }}
        className="mediumMarginLeft dateBox"
        type="date"
        placeholder="from date"
        id="start"
        name="trip-start"
        onChange={(e) => setFromDate(e.target.value)}
      ></input>
      <input
        style={{ marginLeft: "1rem" }}
        className="smallMarginLeft dateBox"
        type="date"
        id="start"
        name="trip-start"
        placeholder="to date"
        onChange={(e) => setToDate(e.target.value)}
      ></input>
      <button
        style={{ marginLeft: "1rem" }}
        className="buttonTopSelector"
        onClick={formInputsForReport}
      >
        Generate report
      </button>
    </div>
  );
};

export default TopSelector;

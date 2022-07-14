import React from "react";

const NoDataFound = () => {
  return (
    <div className="columnFlex flexJustifyContentCenter alignItemsCenter">
      <h1>No reports </h1>
      <h2 style={{ width: "35%", marginTop: ".4rem" }}>
        Currently you have no data for the reports to be generated.Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </h2>
    </div>
  );
};

export default NoDataFound;

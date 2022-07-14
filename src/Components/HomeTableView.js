import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

/**
 * function populate the row values
 * @returns formatted date
 */
const Row = (props) => {
  const { name, values } = props;

  let totalAmount = 0;

  const sortArray = (array) => {
    array.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.created) - new Date(a.created);
    });
  };

  sortArray(values);

  if (values?.length > 0) {
    values?.forEach((value) => {
      totalAmount = totalAmount + value.amount;
    });

    totalAmount = Math.round(totalAmount);
  }

  const convertDataFormatDateMonth = (d) => {
    if (d !== undefined) {
      let dateParsed = new Date(d);
      var datestring =
        dateParsed?.getDate() +
        "-" +
        dateParsed?.getMonth() +
        "-" +
        dateParsed.getFullYear();
      return datestring;
    }
  };

  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          borderBottom: "none",
          align: "center",
          height: "70px",
        }}
      >
        <TableCell
          align="left"
          sx={{ fontWeight: "bold" }}
          onClick={() => setOpen(!open)}
          component="th"
          scope="row"
        >
          {name}
        </TableCell>
        <TableCell
          align="right"
          sx={{ fontWeight: "bold", pr: 5 }}
          onClick={() => setOpen(!open)}
          component="th"
          scope="row"
        >
          Total Amout: {totalAmount}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead style={{ backgroundColor: "white" }}>
                  <TableRow>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="center">Transaction Id</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    // --> Notice below changes
                    values.length > 0 &&
                      values.map((report, index) => {
                        return (
                          <TableRow key={report.date}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {convertDataFormatDateMonth(report.created)}
                            </TableCell>
                            <TableCell align="center">
                              {report.paymentId}
                            </TableCell>
                            <TableCell align="right">{report.amount}</TableCell>
                          </TableRow>
                        );
                      })
                  }
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

/**
 *
 * @returns Dashboard Table
 */
const HomeTableView = (props) => {
  let { localProjectValue, localGatewayValue, localReportValues } = props;
  return (
    <TableContainer
      sx={{
        m: 1,

        backgroundColor: "#F1FAFE",
        borderRadius: "10px",
      }}
    >
      <Table aria-label="collapsible table" sx={{ m: "15px" }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{ fontWeight: "bold", borderBottom: "none" }}
            >
              {localProjectValue}|{localGatewayValue}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(localReportValues).map((report, index) => (
            <Row
              key={report}
              name={report}
              values={Object.values(localReportValues)[index]}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomeTableView;

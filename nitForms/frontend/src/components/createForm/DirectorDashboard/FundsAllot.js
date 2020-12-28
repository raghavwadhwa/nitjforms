import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getDeptDetails } from "../../../actions/DirectorDashboardActions";

var columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "department", headerName: "Department", width: 170 },
  { field: "fundsallocated", headerName: "Committed Amount Fund", width: 130 },
  {
    field: "expenditureamount",
    headerName: " Expenditure Amount Fund",
    width: 130,
  },
  {
    field: "recommendedamount",
    headerName: "Recommended Amount Fund",
    width: 130,
  },
  { field: "pipelinedamount", headerName: "Pipelined Amount Fund", width: 130 },
  { field: "availableamount", headerName: "Available Amount Fund", width: 130 },
];

export class FundsAllot extends Component {
  componentDidMount() {
    this.props.getDeptDetails();
    console.log(this.props.DepartmentDetail);
  }
  onChangeType = (e) => {
    this.setState({ userType: e });
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: ".5vw",
            width: "80%",
            marginTop: "1vw",
            marginLeft: "1vw",
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            marginBottom: "3vw",
          }}
        >
          <div
            style={{
              height: 600,
              flexBasis: "95%",
              boxShadow:
                ".05vw .05vw .7vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
            }}
          >
            <div>
              Choose the department to which you want to allocate fund?
              <DropdownButton
                variant="light"
                style={{
                  size: "2vw",
                  fontSize: "1vw",
                }}
                id="dropdown-basic-button"
              >
                <Dropdown.Item>Computer Science</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Mechanical</Dropdown.Item>
                <Dropdown.Item>Chemistry</Dropdown.Item>
              </DropdownButton>
              <input name="" type="text" placeholder="Enter Amount in Ruppes" />{" "}
              <Button
                style={{
                  marginRight: "2vw",
                  backgroundColor: "white",
                  color: "#009999",
                  border: " 0.06vw solid #009999",
                  boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                  marginBottom: "1vw",
                  fontFamily: "Times New Roman",
                }}
              >
                Allocate Ammount
              </Button>
            </div>
            <h3>Currently Allocated Funds</h3>
            {this.props.DepartmentDetail.map((dept) => {
              return (
                <div>
                  <p>
                    {dept.deptname}
                    {"    "}
                    Committed amount{dept.committedAmount}
                    {"    "}
                    Recommended amount{dept.recommendedAmount}
                    {"    "}
                    pipelined amount{dept.pipelinedAmount}
                    {"    "}
                    avaialble amount {dept.availableAmount}
                    {"    "}
                    expenditure amount{dept.expenditureAmount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  DepartmentDetail: state.DepartmentDetail.DepartmentDetail,
});

export default connect(mapStateToProps, { getDeptDetails })(FundsAllot);

import React, { Component, Fragment } from "react";
import AutoComplete from "./AutoComplete";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { connect } from "react-redux";
import { getAccepted } from "../../actions/AcceptedResponse";
import { Table } from "react-bootstrap";
import DownloadLink from "react-download-link";
import { Button } from "react-bootstrap";

export class AcceptedResponses extends Component {
  state = {
    content: "",
  };
  created_by2 = "";
  constructor(props) {
    super(props);
    this.props.getAccepted(this.props.match.params.title);

    {
      this.props.FormName.map((a) => {
        this.created_by2 = a.created_by;
      });
    }
    console.log(this.created_by2, this.props.created_by1);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content);
  };

  render() {
    return (
      <Fragment>
        {/* <AutoComplete
          options={[
            "Papaya",
            "Persimmon",
            "Paw Paw",
            "Prickly Pear",
            "Peach",
            "Pomegranate",
            "Pineapple",
          ]}
        /> */}
        <div
          style={{
            position: "relative",
            float: "left",
            width: "35vw",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Editor</h3>
          <hr />
          <form onSubmit={this.onSubmit}>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onInit={(editor) => {
                const data = editor.getData();
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({
                  content: data,
                });
              }}
            />
            <div
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "2vw",
              }}
            >
              <Button variant="outline-success" type="submit">
                <DownloadLink
                  style={{ font: "white" }}
                  label="SUBMIT AND DOWNLOAD"
                  filename="myfile.html"
                  exportFile={() => this.state.content}
                />
              </Button>
            </div>
          </form>
        </div>
        <div
          style={{
            position: "relative",
            float: "right",
            width: "35vw",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Accepted Responses</h3>
          <hr />
          <Table striped bordered hover responsive id={this.props.title}>
            {/* <thead>
          {Object.keys(this.props.Forms).map((quest) => console.log(quest))};
          
        </thead> */}
            <tbody>
              {Object.entries(this.props.AcceptedResponse).map(
                ([key, value]) => {
                  return (
                    <Fragment key={key}>
                      <tr>
                        {Object.entries(value).map(([question, answer]) => {
                          return (
                            <Fragment key={question}>
                              <td
                                style={{
                                  alignContent: "center",
                                  alignItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                <strong>{question.toUpperCase()}</strong>
                                <br />
                                {answer}
                              </td>
                            </Fragment>
                          );
                        })}
                      </tr>
                    </Fragment>
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  FormName: state.FormName.FormName,
  created_by1: state.Auth.user.username,
});

export default connect(mapStateToProps, { getAccepted })(AcceptedResponses);
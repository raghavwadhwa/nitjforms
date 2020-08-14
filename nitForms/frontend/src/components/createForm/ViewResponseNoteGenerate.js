import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";
import DisplayEditor from "./DisplayEditor";
import { Link } from "react-router-dom";
import NotingIndivdiual from "./NotingIndivdiual";
import { putAccepted } from "../../actions/AcceptedResponse";

export class ViewResponseNoteGenerate extends Component {
  state = {
    obj1: {},
    content: "",
    toggleforward: false,
    forwardTo: "",
  };
  obj = {};
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    {
      Object.entries(this.props.AcceptedResponse).map(([key, value]) => {
        if (key === this.props.match.params.value) {
          this.obj = value;
          this.setState({ obj1: value });
        }
      });
    }
    console.log(this.obj);
  }
  onclick2 = (e) => {
    e.preventDefault();

    this.setState({ toggleforward: !this.state.toggleforward });
  };

  onClick3 = () => {
    var quest = {};
    quest = this.obj;
    var arr = quest["forwardTo"];
    const name = { [this.props.created_by1]: this.state.forwardTo };
    arr.push(name);
    quest["forwardTo"] = arr;
    console.log(quest);
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onClick = () => {
  //   let value1 = this.props.match.params.value;
  //   let title1 = this.props.match.params.title;
  //   const quest = {};
  //   var comm = "";
  //   var comm1 = "";
  //   var comm2 = "";
  //   {
  //     Object.entries(this.props.Forms).map(([key, value]) => {
  //       if (key === value1) {
  //         Object.entries(value).map(([question, answer]) => {
  //           if (question !== "id") {
  //             quest[question] = answer;
  //           }
  //         });
  //       }
  //     });
  //   }
  //   console.log(this.state.content);
  //   quest["comment"] = this.state.content;
  //   this.props.addAccepted(quest, title1);
  // };

  render() {
    let value1 = this.props.match.params.value;
    const { content } = this.state.content;

    return (
      <div>
        <div
          style={{
            position: "relative",
            width: "36vw",
            float: "right",
            marginBottom: "1vw",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "36vw",
              float: "right",
              justifyContent: "center",
              textAlign: "center",

              paddingTop: "1vw",
              marginBottom: "1.5vw",
              // backgroundColor: "#009999",
              // backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
              // backgroundImage:
              //   "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
              backgroundImage:
                "linear-gradient(rgba(81, 214, 255, .5),rgba(141, 158, 198, 0.5))",
              boxShadow: ".3vw .3vw .5vw grey",
              borderRadius: ".3vw",
              paddingRight: "1vw",
            }}
          >
            <h4 style={{ color: "black" }}> Accepted Responses</h4>
          </div>
          <div
            style={{
              float: "right",
              postion: "relative",
              width: "36vw",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              // display: "flex",
              // justifyContent: "center",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              marginBottom: "4vw",
              backgroundColor: "#EEEEEE",
              boxShadow: ".3vw .3vw .5vw grey",
              borderRadius: ".3vw",
              //  border: ".2vw solid silver",
            }}
          >
            <Fragment>
              {Object.entries(this.props.AcceptedResponse).map(
                ([key, value]) => {
                  if (key === value1)
                    return (
                      <Fragment key={key}>
                        {Object.entries(value).map(([question, answer]) => {
                          return (
                            <Fragment key={question}>
                              <Card
                                style={{
                                  borderRadius: ".95vw",
                                  borderWidth: 0,
                                  // border: ".2vw solid #ed6a5a",
                                  marginBottom: "2vw",
                                  width: "25",
                                  color: "#009999",

                                  // height: "auto",
                                  boxShadow: ".5vw .5vw .5vw  silver",
                                }}
                              >
                                <div>
                                  <Card.Header
                                    style={{
                                      backgroundColor: "white",
                                      borderRadius: ".75vw .75vw 0 0",
                                      // width: "25vw",
                                      height: "2.5vw",
                                      fontSize: "1vw",
                                      color: "#009999",
                                      margin: 0,
                                      padding: "0.6vw",
                                    }}
                                  >
                                    <strong> {question.toUpperCase()}</strong>
                                  </Card.Header>
                                  <Card.Body
                                    style={{
                                      backgroundColor: "white",
                                      borderRadius: " 0 0 .75vw .75vw",
                                      // width: "25vw",
                                      fontSize: "0.93vw",
                                      height: "auto",
                                      padding: "0.6vw",
                                      margin: 0,
                                    }}
                                  >
                                    {/* <Card.Title
                                  style={{
                                    fontSize: ".93vw",
                                    marginBottom: ".5vw",
                                  }}
                                >
                                
                                </Card.Title> */}
                                    <Card.Text>
                                      <TextareaAutosize
                                        name={question}
                                        value={answer}
                                        style={{
                                          width: "25vw",
                                          borderColor: "white",
                                          fontSize: "1vw",
                                        }}
                                      >
                                        {answer}
                                      </TextareaAutosize>
                                    </Card.Text>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Fragment>
                          );
                        })}
                      </Fragment>
                    );
                }
              )}
            </Fragment>
          </div>
          <Fragment>
            {Object.entries(this.obj).map(([question, answer]) => {
              if ((question !== "comment") & (question !== "forwardTo")) {
                return (
                  <Fragment key={question}>
                    <Card
                      style={{
                        borderRadius: ".95vw",
                        borderWidth: ".2vw",
                        borderColor: "lightgrey",
                        marginBottom: "2vw",
                        width: "40.37vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "auto",
                      }}
                    >
                      <div>
                        <Card.Header
                          style={{
                            backgroundColor: "#A2B8FB ",
                            borderRadius: ".75vw .75vw 0 0",
                            width: "40vw",
                            height: "2.5vw",
                            fontSize: "1vw",

                            margin: 0,
                            padding: "0.6vw",
                          }}
                        >
                          QUESTION
                        </Card.Header>
                        <Card.Body
                          style={{
                            backgroundColor: "#EEF0F7 ",
                            borderRadius: " 0 0 .75vw .75vw",
                            width: "40vw",
                            fontSize: "0.93vw",
                            height: "auto",
                            padding: "0.6vw",
                            margin: 0,
                          }}
                        >
                          <Card.Title
                            style={{
                              fontSize: ".93vw",
                              marginBottom: ".5vw",
                            }}
                          >
                            <strong> {question.toUpperCase()}</strong>
                          </Card.Title>
                          <Card.Text>
                            <TextareaAutosize
                              name={question}
                              value={answer}
                              style={{
                                width: "37vw",
                                borderColor: "white",
                                fontSize: "1vw",
                              }}
                            >
                              {answer}
                            </TextareaAutosize>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Fragment>
                );
              }
            })}
          </Fragment>
        </div>
        <div
          style={{
            position: "relative",
            width: "34vw",
            float: "left",
            marginBottom: "1vw",
          }}
        >
<<<<<<< HEAD
          <div
            style={{
              position: "relative",
              width: "34vw",
              float: "left",
              justifyContent: "center",
              textAlign: "center",
              //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
              backgroundImage:
                "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
              paddingTop: "1vw",
              marginBottom: "1.5vw",
              // backgroundColor: "#00a3a3",
              boxShadow: ".3vw .3vw .5vw grey",
              borderRadius: ".3vw",
              paddingRight: "1vw",
            }}
          >
            <h4 style={{ color: "white" }}> Linked Notings</h4>
          </div>
          <div
            style={{
              float: "left",
              postion: "relative",
              width: "34vw",

              textAlign: "center",

              paddingLeft: "2vw",
              paddingRight: "2vw",
              // display: "flex",
              // justifyContent: "center",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              marginBottom: "4vw",
              backgroundColor: "#EEEEEE",
              boxShadow: ".3vw .3vw .5vw grey",
              borderRadius: ".3vw",
            }}
          >
            <NotingIndivdiual title={this.props.match.params.title} />
            <br />

            <Button
              style={{
                marginBottom: "2vw",
                marginRight: "2vw",
                backgroundColor: "white",
                color: "#009999",
                border: " 0.06vw solid #009999",
                boxShadow: ".1vw .1vw .1vw .1vw silver",
              }}
              onClick={this.onclick2}
            >
              Forward to
            </Button>
            {this.state.toggleforward === true ? (
              <div style={{ textAlign: "center" }}>
                <form>
                  <input type="text" placeholder="Enter Username" />
                  <Button
                    style={{
                      marginRight: "2vw",
                      backgroundColor: "white",
                      color: "#009999",
                      border: " 0.06vw solid #009999",
                      boxShadow: ".1vw .1vw .1vw .1vw silver",
                    }}
                  >
                    Forward
                  </Button>
                </form>
              </div>
            ) : null}
          </div>
=======
          <NotingIndivdiual
            title={this.props.match.params.title}
            value={this.props.match.params.value}
            id={this.props.match.params.id}
          />
          {/* <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Choose Noting
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Link 1</a>
              <a className="dropdown-item">Link 2</a>
              <a className="dropdown-item">Link 3</a>
            </div>
          </div> */}
          <br />

          <br />
          <br />
          <br />
          <Button style={{ marginBottom: "2vw" }} onClick={this.onclick2}>
            Forward to
          </Button>
          {this.state.toggleforward === true ? (
            <div style={{ textAlign: "center" }}>
              <input
                name="forwardTo"
                value={this.state.forwardTo}
                onChange={this.onChange}
                type="text"
                placeholder="Enter Username"
              />
              <Button onClick={this.onClick3}>Forward</Button>
            </div>
          ) : null}
          <Link to={"/combine/" + this.props.match.params.id}>
            <Button>View Timeline</Button>
          </Link>
>>>>>>> 102e526e34ee578ec73a250a264b2d5a7df552a8
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  created_by1: state.Auth.user.username,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps, { putAccepted })(
  ViewResponseNoteGenerate
);

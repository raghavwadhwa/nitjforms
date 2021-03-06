const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            {/* <img src={discussion.author.image} alt={discussion.author.name} /> */}
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              on{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button>
                <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Edit
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array,
};

Discussions.defaultProps = {
  title: "Form Approval Status",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        // image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#",
      },
      post: {
        title: "Hello World!",
        url: "#",
      },
      body: "Well, the way they make shows is, they make one show ...",
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        // image: require("../../images/avatars/2.jpg"),
        name: "John Doe",
        url: "#",
      },
      post: {
        title: "Hello World!",
        url: "#",
      },
      body: "After the avalanche, it took us a week to climb out. Now...",
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        // image: require("../../images/avatars/3.jpg"),
        name: "John Doe",
        url: "#",
      },
      post: {
        title: "Hello World!",
        url: "#",
      },
      body: "My money's in that office, right? If she start giving me...",
    },
  ],
};

export default Discussions;

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col,
} from "shards-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../../store";
import { createMessage } from "../../../actions/Messages";
import { putResponse } from "../../../actions/AcceptedResponse";
import { putDeptDetailsCommit } from "../../../actions/DirectorDashboardActions";

export class Discussions extends Component {
  onClickMessage = (responseType, response, formName) => {
    if (responseType === "Accept") {
      store.dispatch(
        createMessage({
          acceptCommitMessage: `You have committed the amount of Rs${response.recommendedAmount} from ${response.userDept}`,
        })
      );
      response["committedAmount"] = parseInt(response["recommendedAmount"]);
      response["recommendedAmount"] = 0;
      console.log(response);
      this.props.putResponse(response.id, formName, response);
      this.props.putDeptDetailsCommit(
        response.userDept,
        response.committedAmount,
        responseType
      );
    } else if (responseType === "Reject") {
      store.dispatch(
        createMessage({
          rejectCommitMessage: `You have rejected the recomendation of Rs${response.recommendedAmount} `,
        })
      );
      response["recommendedAmount"] = 0;
      console.log(response);
      // this.props.putResponse(response.id, formName, response);
      // this.props.putDeptDetails(response.userDept, response.recommendedAmount);
    }
  };

  render() {
    return (
      <div>
        {/* <h1>asdjk</h1> */}
        <Card small className="blog-comments">
          <CardHeader className="border-bottom">
            <h6 className="m-0">form approvals</h6>
          </CardHeader>
          <CardBody className="p-0">
            {console.log(this.props.Response, "checking")}
            {this.props.Response.map((res) => {
              return (
                <div key={res.acceptedResponseID}>
                  <div className="blog-comments__content">
                    <div className="blog-comments__meta text-mutes">
                      <span className="text-mutes">
                        {res.acceptedResponseID}
                      </span>
                    </div>

                    {/* <h3>{res.acceptedResponseID}</h3> */}
                    <p className="m-0 my-1 mb-2 text-muted">
                      {/* {discussion.body} */}
                      {res.recommendedAmount}
                    </p>

                    <div className="blog-comments__actions">
                      <ButtonGroup size="sm">
                        <Link to={this.props.link}>
                          <Button theme="white">
                            <span className="text-success">
                              <i className="material-icons">abc</i>
                            </span>{" "}
                            View Timeline
                          </Button>
                        </Link>

                        <Button
                          theme="white"
                          onClick={() =>
                            this.onClickMessage(
                              "Reject",
                              res,
                              this.props.formName
                            )
                          }
                        >
                          <span className="text-danger">
                            <i className="material-icons">clear</i>
                          </span>{" "}
                          Reject
                        </Button>
                        <Button
                          theme="white"
                          onClick={() =>
                            this.onClickMessage(
                              "Accept",
                              res,
                              this.props.formName
                            )
                          }
                        >
                          <span className="text-light">
                            <i className="material-icons">more_vert</i>
                          </span>{" "}
                          Accept
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardBody>
          <CardFooter className="border-top">
            <Row>
              <Col className="text-center view-report">
                <Button theme="white" type="submit">
                  View All Comments
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Response: state.Response.Response,
  formName: state.Response.formName,
  username: state.Auth.user.username,
  link: state.Response.link,
});

export default connect(mapStateToProps, { putResponse, putDeptDetailsCommit })(
  Discussions
);

// const Discussions = ({ title, discussions }) => (
//   <Card small className="blog-comments">
//     <CardHeader className="border-bottom">
//       <h6 className="m-0">{title}</h6>
//     </CardHeader>

//     <CardBody className="p-0">
//       {discussions.map((discussion, idx) => (
//         <div key={idx} className="blog-comments__item d-flex p-3">
//           {/* Avatar */}
//           <div className="blog-comments__avatar mr-3">
//             {/* <img src={discussion.author.image} alt={discussion.author.name} /> */}
//           </div>

//           {/* Content */}
//           <div className="blog-comments__content">
//             {/* Content :: Title */}
//             <div className="blog-comments__meta text-mutes">
//               <a className="text-secondary" href={discussion.author.url}>
//                 {discussion.author.name}
//               </a>{" "}
//               on{" "}
//               <a className="text-secondary" href={discussion.post.url}>
//                 {discussion.post.title}
//               </a>
//               <span className="text-mutes">- {discussion.date}</span>
//             </div>

//             {/* Content :: Body */}
//             <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

//             {/* Content :: Actions */}
//             <div className="blog-comments__actions">
//               <ButtonGroup size="sm">
//                 <Button theme="white">
//                   <span className="text-success">
//                     <i className="material-icons">check</i>
//                   </span>{" "}
//                   Approve
//                 </Button>
//                 <Button theme="white">
//                   <span className="text-danger">
//                     <i className="material-icons">clear</i>
//                   </span>{" "}
//                   Reject
//                 </Button>
//                 <Button theme="white">
//                   <span className="text-light">
//                     <i className="material-icons">more_vert</i>
//                   </span>{" "}
//                   Edit
//                 </Button>
//               </ButtonGroup>
//             </div>
//           </div>
//         </div>
//       ))}
//     </CardBody>

//     <CardFooter className="border-top">
//       <Row>
//         <Col className="text-center view-report">
//           <Button theme="white" type="submit">
//             View All Comments
//           </Button>
//         </Col>
//       </Row>
//     </CardFooter>
//   </Card>
// );

// Discussions.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string,
//   /**
//    * The discussions dataset.
//    */
//   discussions: PropTypes.array,
// };

// Discussions.defaultProps = {
//   title: "Form Approval Status",
//   discussions: [
//     {
//       id: 1,
//       date: "3 days ago",
//       author: {
//         // image: require("../../images/avatars/1.jpg"),
//         name: "John Doe",
//         url: "#",
//       },
//       post: {
//         title: "Hello World!",
//         url: "#",
//       },
//       body: "Well, the way they make shows is, they make one show ...",
//     },
//     {
//       id: 2,
//       date: "4 days ago",
//       author: {
//         // image: require("../../images/avatars/2.jpg"),
//         name: "John Doe",
//         url: "#",
//       },
//       post: {
//         title: "Hello World!",
//         url: "#",
//       },
//       body: "After the avalanche, it took us a week to climb out. Now...",
//     },
//     {
//       id: 3,
//       date: "5 days ago",
//       author: {
//         // image: require("../../images/avatars/3.jpg"),
//         name: "John Doe",
//         url: "#",
//       },
//       post: {
//         title: "Hello World!",
//         url: "#",
//       },
//       body: "My money's in that office, right? If she start giving me...",
//     },
//   ],
// };

// export default Discussions;

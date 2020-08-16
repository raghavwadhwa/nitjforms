import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import OldForms from "./OldForms";
import Link from "@material-ui/core/Link";
import Header from "../layout/Header";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link as Link1 } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/fa";
import SearchBar from "material-ui-search-bar";
import Features from "./features";
import DashBox from "./DashBox";
import { connect } from "react-redux";
import { getName, updateName } from "../../actions/FormName";
import { getDefaultKeyBinding } from "draft-js";
import Clock from "react-live-clock";
import CountUp from "react-countup";

class Albumm extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
        <div
          style={{
            // backgroundColor: "#ffb266",
            backgroundImage: "linear-gradient(to right,orange,white)",
            marginTop: "1vw",

            minHeight: "7vw",
            borderRadius: ".3vw",
            padding: "1vw",
            color: "white",
            fontSize: "1.2vw",
          }}
        >
          <div
            style={{
              width: "5vw",
              float: "left",
              position: "relative",
              marginRight: "3vw",
            }}
          >
            <span style={{ fontSize: "5vw" }} class="material-icons">
              account_circle
            </span>
          </div>
          {/* <div
            style={{ float: "right", position: "relative", marginLeft: "9vw" }}
          ></div> */}
          <h4 style={{ float: "right", color: "black" }}>
            {" "}
            <Clock format={"dddd, MMMM Do, YYYY, h:mm:ss A"} ticking={true} />
          </h4>
          NAME:{this.props.username}
          <br />
          USERTYPE:ADMIN <br />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "1vw",

            // width: "60vw",
            // position: "relative",
          }}
        >
          <div
            style={{
              //   width: "17vw",

              backgroundImage: "linear-gradient(rgba(179, 204, 37, .5),white",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              // backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw rgba(179, 204, 37, .5), 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            USERS
            <br />
            <h3>
              <CountUp end={13} duration={5} />
            </h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              backgroundImage: "linear-gradient(pink,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              // backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw pink, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            CUSTOMERS
            <br />
            <h3>
              <CountUp end={123} duration={5} />
            </h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              backgroundImage: "linear-gradient(lightblue,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              // backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw lightblue, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            NOTINGS
            <br />
            <h3>
              <CountUp end={6} duration={5} />
            </h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              backgroundImage: "linear-gradient(#ffcc99,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw #ffcc99, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            FORMS
            <br />
            <h3>
              <CountUp end={15} duration={5} />
            </h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              backgroundImage: "linear-gradient(#cc99ff,white",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw #cc99ff, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            DUES
            <br />
            <h3>
              <CountUp end={10} duration={5} />
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "1vw",
          }}
        >
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "32%",
              minHeight: "18vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              // MozBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            ONLINE USERS
            <br />
            <table
              style={{
                width: "100%",
                marginTop: "1vw",
                // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                // backgroundImage: "linear-gradient(pink,white)",
                backgroundColor: "white",
                borderRadius: ".4vw",
                padding: ".5vw",
              }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USERNAME</th>
                  <th>EMAIL </th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>abc</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "green",
                        padding: ".1vw",
                        color: "white",
                      }}
                    >
                      Online
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>efg</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "green",
                        padding: ".1vw",
                        color: "white",
                      }}
                    >
                      Online
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>xyz</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "red",
                        padding: ".1vw",
                        color: "white",
                      }}
                    >
                      Active Today
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "32%",
              minHeight: "18vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              boxShadow:
                ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              // boxShadow:
              //   ".2vw .1vw .4vw purple, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              // MozBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            USERS
            <br />
            <h3>graph</h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              boxShadow:
                ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              flexBasis: "32%",
              minHeight: "18vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              // boxShadow:
              //   ".2vw .1vw .4vw green, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              // MozBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            RECENT POSTS
            <br />
            <table
              rules="all"
              style={{
                width: "100%",
                marginTop: "1vw",
                border: ".1vw solid grey",
                backgroundColor: "white",
                borderSpacing: "1vw",
                // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                // backgroundImage: "linear-gradient(lightgreen,white)",
              }}
            >
              {/* <thead>
                <tr>
                  <th>DATE</th>
                  <th></th>
                 
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>12-03-2020</td>
                  <td>Test1</td>
                </tr>
                <tr>
                  <td>2-04-2020</td>
                  <td>Test2</td>
                </tr>
                <tr>
                  <td>19-07-2020</td>
                  <td>Test3</td>
                </tr>
                <tr>
                  <td>12-03-2020</td>
                  <td>Test4</td>
                </tr>
                <tr>
                  <td>2-04-2020</td>
                  <td>Test5</td>
                </tr>
                <tr>
                  <td>19-07-2020</td>
                  <td>Test6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <Features /> */}
        <div
          style={{
            // backgroundImage: "linear-gradient(#fffeaa,orange)",
            padding: "4vw",
            marginTop: "3vw",
            borderRadius: ".3vw",

            backgroundColor: "white",
            // border: ".1vw solid orange",
            boxShadow: ".2vw .3vw .7vw .01vw orange",
            // height: "15vw",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            FORMS
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            LET'S CREATE A NEW FORM
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link1 to="/definingsteps">
                  <Button style={{ backgroundColor: "ORANGE", color: "white" }}>
                    CREATE A NEW FORM
                  </Button>
                </Link1>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "orange",
                    border: ".1vw solid orange",
                  }}
                >
                  VIEW PREVIOUS FORMS
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <OldForms />
        <Features />
        <footer>
          <Typography variant="h6" align="center" gutterBottom>
            {" "}
            National Institute of Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Jalandharr
          </Typography>
        </footer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.Auth.user.username,
});

export default connect(mapStateToProps, { getName })(Albumm);
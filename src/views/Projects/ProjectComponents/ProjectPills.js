import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import ProjectCarousel from "views/Projects/ProjectComponents/ProjectCarousel.js";
import Container from "react-bootstrap/Container";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default class ProjectPills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    };
  }

  componentDidMount() {
    var pills = this.props.pills;
    var descriptions = this.props.descriptions;
    var images = this.props.images;
    var captions = this.props.captions;
    var tabsToRender = [];

    for (let i = 0; i < pills.length; i++) {
      tabsToRender.push({
        tabButton: pills[i],
        tabContent: (
          <Container style={{ marginTop: "-90px" }}>
            <ProjectCarousel
              captions={captions[i]}
              images={images[i]}
            />
            <span>
              <h3
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  marginTop: "-30px"
                }}
              >
                {descriptions[i]}
              </h3>
            </span>
          </Container>
        )
      });
    }
    this.setState({ tabs: tabsToRender });
  }
  render() {
    console.log(this.state.tabs);
    return <ProjectPillsComponent tabs={this.state.tabs} />;
  }
}
function ProjectPillsComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Events this Year</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>
                Learn about the events hosted by the American Enterprise project
                in Homestead FBLA
              </small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 10, md: 10 }
                }}
                tabs={props.tabs}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

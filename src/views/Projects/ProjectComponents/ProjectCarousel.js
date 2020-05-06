import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default class ProjectCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toRender: []
    };
  }
  componentDidMount() {
    let captions = this.props.captions;
    let images = this.props.images;
    let toRender = [];
    for (let i = 0; i < captions.length; i++) {
      toRender.push(
        <div>
          <img src={images[i]} alt="First slide" className="slick-image" />
          <div className="slick-caption">
            <h4>{captions[i]}</h4>
          </div>
        </div>
      );
    }
    this.setState({ toRender: toRender });
  }
  render() {
    return <ProjectCarouselComponent toRender={this.state.toRender} />;
  }
}

function ProjectCarouselComponent(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>{props.toRender}</Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

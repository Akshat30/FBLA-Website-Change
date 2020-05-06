import React from "react";
import { createBrowserHistory } from "history";
import {
  BrowserRouter,
  HashRouter,
  Router,
  Route,
  Switch,
} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import firebase from "./firebase/firebase.js";
// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MemberPortal from "views/Portals/MemberPortal.js";
import AdminPortal from "views/Portals/AdminPortal";
import BarcodeGenerator from "views/BarcodeGenerator/BarcodeGenerator";
import "bootstrap/dist/css/bootstrap.min.css";
import MeetTheTeam from "views/MeetTheTeam/MeetTheTeam";
import AE from "views/Projects/AE";
import CS from "views/Projects/CS";
import PWB from "views/Projects/PWB";
import NotAUser from "views/ErrorPages/NotAUser";
import CantBeHere from "views/ErrorPages/CantBeHere";
import WrongLogin from "views/ErrorPages/WrongLogin";
import CompetitionsHistory from "views/CompetitionsHistory/CompetitionsHistory";
import DocumentViews from "views/DocumentViews/DocumentViews.js";
import BlogPosts from "views/BlogPosts/BlogPosts.js";
import Checkout from "components/Registration/Checkout";
import UpdateDB2008 from "update08toCurrent.js";
import UpdateBefore08 from "updateBefore08.js"

var hist = createBrowserHistory();
class Builder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter basename="/">
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/barcode-generator"} component={BarcodeGenerator} />
        <Route path={"/profile-page"} component={ProfilePage} />
        <Route path={"/not-a-user"} component={NotAUser} />
        <Route path={"/member-portal"} component={() => <MemberPortal />} />
        <Route path={"/cant-be-here"} component={CantBeHere} />
        <Route path={"/wrong-login"} component={WrongLogin} />
        <Route
          path={"/login-page"}
          component={() => <LoginPage login={this.login} />}
        />
        <Route path={"/american-enterprise"} component={AE} />
        <Route path={"/community-service"} component={CS} />
        <Route path={"/partnership-with-business"} component={PWB} />
        <Route path={"/admin-portal"} component={() => <AdminPortal />} />
        <Route
          path={"/competitions-history"}
          component={() => <CompetitionsHistory />}
        />
        <Route path={"/meet-the-team"} component={MeetTheTeam} />
        <Route path={"/doc-views"} component={() => <DocumentViews />} />
        <Route path={"/registration"} component={() => <Checkout />} />
        <Route path={"/blog-posts"} component={() => <BlogPosts />} />
      </HashRouter>
    );
  }
}

export default Builder;

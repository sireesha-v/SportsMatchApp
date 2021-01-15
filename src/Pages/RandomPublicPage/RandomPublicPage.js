import React from "react";
import { withRouter } from "react-router";
import PublicLandingPage from "./Container/PublicLandingPage";

const RandomPublicPage = (props) => {
    return (
        <div>
           <PublicLandingPage/>
        </div>
    )
};

export default withRouter(RandomPublicPage);
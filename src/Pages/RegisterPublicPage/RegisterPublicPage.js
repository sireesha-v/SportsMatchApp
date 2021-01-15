import React from "react";
import { withRouter } from "react-router";
import PublicHeader from "./Container/PublicHeader";
import RegistrationForm from "./Container/RegisterForm";

const RegisterPublicPage = (props) => {
    return (
        <div>
			<PublicHeader/>
			<br/>
			<br/>
			<RegistrationForm/>
        </div>
    )
};

export default withRouter(RegisterPublicPage);
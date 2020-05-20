import React from "react";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const GoogleAuthentication = withRouter((props) => {
  const successResponse = (response) => {
    const { tokenId, name } = response;
    axios
      .post("/api/posts/login/google", { tokenId, name })
      .then(({ data: { email } }) => {
        message.success(`You login with ${email} successfully`);
        props.history.push("/");
      })
      .catch(console.log);
  };

  const failureResponse = (response) => {
    console.log("error", response);
  };

  return (
    <div>
      <GoogleLogin
        clientId="1033191101999-pknjrq16npib35r2b5k3cm3nbu35cld4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={successResponse}
        onFailure={failureResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
});

export default GoogleAuthentication;

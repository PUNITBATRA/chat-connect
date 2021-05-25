import React from "react";
import Api from "../Api";
import "./Login.css";
export default ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Error!");
    }
  };
  const handleGoogleLogin = () => {
    console.log("Coming Soon!");
  };
  return (
    <div className="login-body" style={{ textAlign: "center" }}>
      <h1>Test Credentials </h1>
      <h4>Email- test_zjnqfkd_admin@tfbnw.net</h4>
      <p>Password- test@123</p>

      <h4>Email- zvngvjtfvd_1621887422@tfbnw.net</h4>
      <p>Password- test@123</p>
      <p>
        Current Features- Chat Support,Login With FB,Emoji Support, Mic
        Support,New Connection Sidebar Support <br />
        <br /> Feature to be added in the upcoming versions- Login With Google
        soon.
      </p>
      <div className="login">
        <button
          onClick={handleFacebookLogin}
          style={{
            backgroundColor: "#3B5998",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login from facebook
        </button>
        {/* <button onClick={handleGoogleLogin}>Login from Google</button> */}
      </div>
    </div>
  );
};

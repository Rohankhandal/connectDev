import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  // Initilize the state variable emailId with an empty string  [Compulsory to give some vlaue]
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm flex justify-center mx-auto mt-20">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID:{emailId}</legend>
              <input
                type="text"
                className="input"
                value={emailId}
                placeholder="Type here"
                onChange={(e) => setEmailId(e.target.value)}
                // -------------imp--------------
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                value={password}
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

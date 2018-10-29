import React from "react";

export default props => {
  return (
    <div>
      <h1 className="display-4">
        {/* About Contact Manager */}
        {/* how you get paramaters from the url */}
        {props.match.params.id}
      </h1>
      <p>Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

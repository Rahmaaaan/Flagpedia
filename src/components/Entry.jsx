import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="{props.name}">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        <b>Unicode:</b> {props.unicode}
      </dd>
      <dd>
        <b>Dial code:</b> {props.dialCode}
      </dd>
    </div>
  );
}

export default Entry;

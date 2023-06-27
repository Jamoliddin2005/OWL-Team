import React from "react";
import "./Loading.css";

function Loading({ size }) {
  return (
    <div className="loadingio-spinner-dual-ring-anbxjryze45">
      <div
        className="ldio-tew8w4t9laf"
        style={{ transform: `translateZ(0)  scale(${size})` }}
      >
        <div></div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;

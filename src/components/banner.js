import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="bg-white banner">
      <div className="container">
        <div className="flex">
          <div className="banner-obj"></div>
          <div className="banner-obj">
            <h1>
              Home Shopping, <br />
              Your Choice!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              molestias possimus quisquam neque repellendus perspiciatis
              incidunt saepe reiciendis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

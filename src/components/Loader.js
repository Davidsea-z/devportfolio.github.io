import React from "react";
import Lottie from "lottie-react";
import infiniteLoader from "../Assets/infinite-loader.json";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Lottie
        animationData={infiniteLoader}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}

export default Loader;
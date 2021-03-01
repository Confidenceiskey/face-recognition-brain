import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return imageUrl ? (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt="Uploaded face/faces shot"
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {boxes.map((box) => (
          <div
            className="bounding-box"
            key={`${box.topRow}-${box.rightCol}`}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  ) : null;
};

export default FaceRecognition;
